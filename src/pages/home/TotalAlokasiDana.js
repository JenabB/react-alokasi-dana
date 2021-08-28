import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";

const TotalAlokasiDana = () => {
  const { totalAlokasiDana, history } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  // console.log(total);

  useEffect(() => {
    let hasil = 0;
    let arrayy = [];
    let arrayyy = [];
    history.forEach((item) => {
      arrayy.push(item.semuaProduk);
    });

    arrayy.forEach((item) => {
      arrayyy.push(item.map((i) => parseInt(i.harga)));
    });

    console.log("arrayy", arrayy);
    console.log("hasil", arrayyy);
    console.log("hasil", arrayyy.concat());
  }, [history]);

  return (
    <div className="p-4">
      <div
        className="bg-green-800 m-4 text-white rounded-xl p-4 w-full mx-auto"
        style={{ height: "200px" }}
      >
        <h1>Total Dana Dialokasikan</h1>
        <h2 className="text-4xl my-4">{formatRp(totalAlokasiDana)}</h2>
      </div>
    </div>
  );
};

export default TotalAlokasiDana;
