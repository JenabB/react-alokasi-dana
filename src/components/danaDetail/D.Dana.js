import React from "react";
import moment from "moment";
import { formatRp } from "../../utils/formatRp";
import { Link } from "react-router-dom";

const Dana = ({ dana }) => {
  return (
    <div className="shadow-lg rounded m-4 p-4">
      <h1 className="text-green-900 text-xl font-bold">{dana.nama}</h1>
      <Link to={`/kategori/${dana.kategori}`}>
        <h2
          className={`inline-block px-3 py-1 rounded-lg my-2 ${
            dana.kategori === "pribadi"
              ? "bg-blue-400"
              : "ibadah"
              ? "bg-green-300"
              : "pendidikan"
              ? "bg-yellow-500"
              : "umum"
              ? "bg-red-400"
              : "bg-red-300"
          }`}
        >
          {dana.kategori}
        </h2>
      </Link>
      <h3>{formatRp(dana.harga)}</h3>
      <p className="text-gray-400 text-sm mt-4">
        {moment(dana.createdAt).fromNow()}
      </p>
    </div>
  );
};

export default Dana;
