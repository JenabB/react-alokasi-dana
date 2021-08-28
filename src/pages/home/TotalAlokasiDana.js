import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";

const TotalAlokasiDana = () => {
  const { history, totalAlokasiDana, getTotalAlokasiDana } =
    useContext(GlobalContext);

  useEffect(() => {
    let arrayy = [];

    history.forEach((item) => {
      arrayy.push(item.semuaProduk);
    });

    const arrayHarga = [].concat(
      ...arrayy.map((totalHarga) => totalHarga.map((a) => parseInt(a.harga)))
    );
    console.log(arrayHarga);

    const totalHargaSemuaProduk = arrayHarga.reduce(
      (prev, curee) => prev + curee
    );
    getTotalAlokasiDana(totalHargaSemuaProduk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <div className="p-4">
      <Link to="detail">
        <div
          className="bg-green-800 m-4 text-white rounded-xl p-4 w-full mx-auto"
          style={{ height: "200px" }}
        >
          <h1>Total Dana Dialokasikan</h1>
          <h2 className="text-4xl my-4">{formatRp(totalAlokasiDana)}</h2>
        </div>
      </Link>
    </div>
  );
};

export default TotalAlokasiDana;
