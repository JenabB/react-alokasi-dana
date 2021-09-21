import React from "react";
import Dana from "../danaDetail/D.Dana";

const AllProduct = ({ semua }) => {
  return (
    <div className="m-4 mt-14">
      <h1 className="text-center">Semua Produk</h1>
      <div className="">
        {semua.map((dana, i) => (
          <Dana dana={dana} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
