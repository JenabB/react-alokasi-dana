import React, { useContext } from "react";
import blogs from "./data/blogs.json";
import moment from "moment";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const Blogs = () => {
  const { getSelectedBlog } = useContext(GlobalContext);

  return (
    <div className="px-6 mt-10">
      <h1 className="ml-4 mb-2">Blogs</h1>
      <hr className="border-green-800" />
      <div className="flex overflow-x-auto max-w-screen-sm">
        {blogs.blogs.map((b, i) => (
          <Link to={`blogs/${b.id}`} key={i} onClick={() => getSelectedBlog(b)}>
            <div className="m-2" style={{ width: "200px" }}>
              <img src={b.images} alt={b.title} />
              <div className="bg-white rounded-lg p-4">
                <h1 className="text-sm">{b.title}</h1>
                <h6 className="text-sm">{b.writer}</h6>
                <p className="text-xs text-gray-400">
                  {moment(b.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
