import React from "react";

const AllProduct = ({ semua }) => {
  return (
    <div className="m-4 mt-14">
      <h1 className="text-center">Semua Produk</h1>
      <div className="grid grid-cols-2">
        {semua.map((p, i) => (
          <div className="shadow-lg p-4 my-4" key={i}>
            <h1 className="text-lg text-green-900 font-bold">{p.nama}</h1>
            <p>{p.harga}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
