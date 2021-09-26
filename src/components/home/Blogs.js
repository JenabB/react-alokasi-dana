import React from "react";
import blogs from "./data/blogs.json";
import moment from "moment";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="px-6 mt-10">
      <div className="flex justify-between">
        <h1 className="ml-4 mb-2">Blogs</h1>
        <Link to="all-blogs">
          <h1 className="text-green-900 font-bold">Lihat semua</h1>
        </Link>
      </div>
      <hr className="border-green-800" />
      <div className="flex overflow-x-auto max-w-screen-sm">
        {blogs.blogs.map((b, i) => (
          <Link to={`blogs/${b.id}`} key={i}>
            <div className="m-2" style={{ width: "200px" }}>
              <img
                src={b.images}
                alt={b.title}
                style={{ width: "200px", height: "100px", objectFit: "cover" }}
              />
              <div
                className="bg-white rounded-lg p-4"
                style={{ height: "90px" }}
              >
                <h1 className="text-sm mb-2">{b.title}</h1>
              </div>
              <div className="bg-white p-4">
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
