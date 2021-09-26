import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//context
import { GlobalContext } from "../context/GlobalState";

//components
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import moment from "moment";

const AllBlogs = () => {
  const { blogs } = useContext(GlobalContext);

  return (
    <div>
      <AppBarWithBackButton title="Blogs" />
      <motion.div
        whileTap={{
          scale: 1,
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="lg:w-2/4 mx-auto w-full"
      >
        <div className="grid lg:grid-cols-2">
          {blogs.map((b, i) => (
            <Link to={`/blogs/${b.id}`}>
              <div className="m-4" key={i}>
                <img src={b.images} alt={b.title} />
                <div className="bg-white p-4">
                  <h1 className="mb-4 font-bold">{b.title}</h1>
                  <h2>{b.writer}</h2>
                  <h3>{moment(b.createdAt).fromNow()}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllBlogs;
