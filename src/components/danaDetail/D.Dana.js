import React from "react";
import moment from "moment";

const Dana = ({ dana }) => {
  return (
    <div className="shadow-lg rounded m-4 p-4">
      <h1 className="text-green-900 text-xl font-bold">{dana.nama}</h1>
      <h2>{dana.kategori}</h2>
      <h3>{dana.harga}</h3>
      <p>{moment(dana.createdAt).fromNow()}</p>
    </div>
  );
};

export default Dana;
