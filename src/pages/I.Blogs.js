import React, { useContext } from "react";
import moment from "moment";

//components
import AppBarWithBackButton from "../components/AppBarWithBackButton";

//context
import { GlobalContext } from "../context/GlobalState";

const Blogs = (props) => {
  const { blogs } = useContext(GlobalContext);
  const id = props.match.params.id;
  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <div>
      <AppBarWithBackButton title="blogs" />
      <div className="lg:w-2/4 mx-auto w-full bg-white p-4">
        <div className="mt-4">
          <h1 className="text-bold my-4">{blog.title}</h1>
          <p>{blog.writer}</p>
          <p className="text-sm mb-4">
            {moment(blog.createdAt).subtract(10, "days").calendar()}
          </p>

          <img src={blog.images} alt={blog.title} />
          <div className="p-8">
            <p>{blog.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
