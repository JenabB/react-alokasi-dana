import React, { useContext } from "react";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";

const Blogs = () => {
  const { selectedBlog } = useContext(GlobalContext);

  return (
    <div>
      <AppBarWithBackButton title="blogs" />
      <div className="lg:w-2/4 mx-auto w-full">
        <div className="mt-10">
          <h1 className="text-bold my-4">{selectedBlog.title}</h1>
          <p>{selectedBlog.writer}</p>
          <p>
            {moment(selectedBlog.createdAt).subtract(10, "days").calendar()}
          </p>

          <img src={selectedBlog.images} alt={selectedBlog.title} />
          <div className="p-8">
            <p>{selectedBlog.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
