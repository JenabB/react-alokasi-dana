import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";

const TotalAlokasiDana = () => {
  const { history } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  // console.log(total);

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
    setTotal(totalHargaSemuaProduk);
  }, [history]);

  return (
    <div className="p-4">
      <div
        className="bg-green-800 m-4 text-white rounded-xl p-4 w-full mx-auto"
        style={{ height: "200px" }}
      >
        <h1>Total Dana Dialokasikan</h1>
        <h2 className="text-4xl my-4">{formatRp(total)}</h2>
      </div>
    </div>
  );
};

export default TotalAlokasiDana;
