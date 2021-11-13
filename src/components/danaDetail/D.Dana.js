import React from "react";
import moment from "moment";
import { formatRp } from "../../utils/formatRp";
import { Link } from "react-router-dom";

const Dana = ({ dana }) => {
  function categoryClassName(category) {
    const prefix = "inline-block px-3 py-1 rounded-lg text-white my-2 bg-";

    switch (category) {
      case "pribadi":
        return prefix + "pribadi";
      case "umum":
        return prefix + "umum";
      case "keluarga":
        return prefix + "keluarga";
      case "tabungan":
        return prefix + "tabungan";
      case "hiburan":
        return prefix + "hiburan";
      case "asmara":
        return prefix + "asmara";
      case "pendidikan":
        return prefix + "pendidikan";
      case "kesehatan":
        return prefix + "kesehatan";
      case "pembangunan":
        return prefix + "pembangunan";
      case "makanan":
        return prefix + "makanan";
      case "ibadah":
        return prefix + "ibadah";

      default:
        return prefix + "white";
    }
  }

  return (
    <div className="shadow-lg bg-white rounded-lg m-4 p-4">
      <h1 className="text-primary text-xl font-bold">{dana.nama}</h1>
      <div className="grid grid-cols-3 items-center">
        <Link to={`/category/${dana.category}`}>
          <h2 className={categoryClassName(dana.category)}>{dana.category}</h2>
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
