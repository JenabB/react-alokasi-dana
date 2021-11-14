import React from "react";
import moment from "moment";
import { formatRp } from "utils/formatRp";
import { category } from "utils/categoryClassName";
import { Link } from "react-router-dom";
import { danaCard } from "theme/rectangularTheme";

const Dana = ({ dana }) => {
  return (
    <div className={danaCard}>
      <h1 className="text-primary text-xl font-bold">{dana.nama}</h1>
      <div className="grid grid-cols-3 items-center">
        <Link to={`/category/${dana.category}`}>
          <h2 className={category(dana.category)}>{dana.category}</h2>
        </Link>
        <h3 className="mx-2">{formatRp(dana.harga)}</h3>
      </div>

      <p className="text-gray-400 text-sm mt-4">
        {moment(dana.createdAt).fromNow()}
      </p>
    </div>
  );
};

export default Dana;
