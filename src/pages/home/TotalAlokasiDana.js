import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";

const TotalAlokasiDana = () => {
  const { history, totalAlokasiDana, getTotalAlokasiDana } =
    useContext(GlobalContext);
  const [arrayy] = useState([]);
  const [arrayDanaAwal] = useState([]);
  const [arrayDanaAkhir] = useState([]);
  const [totalAwal, setTotalAwal] = useState(0);
  const [totalAkhir, setTotalAkhir] = useState(0);

  useEffect(() => {
    //memasukkan array semua produk ke array baru
    history.forEach((item) => {
      arrayy.push(item.semuaProduk);
    });

    //array untuk semua harga
    const arrayHarga = [].concat(
      ...arrayy.map((totalHarga) => totalHarga.map((a) => parseInt(a.harga)))
    );
    console.log(arrayHarga);

    //menjumlahkan nilai array harga
    const totalHargaSemuaProduk = arrayHarga.reduce(
      (prev, curee) => prev + curee,
      0
    );
    getTotalAlokasiDana(totalHargaSemuaProduk);

    // memasukkan semua dana awal ke array baru
    history.forEach((item) => {
      arrayDanaAwal.push(item.danaAwal);
    });

    const totalDanaAwal = arrayDanaAwal.reduce(
      (prev, curee) => prev + curee,
      0
    );
    setTotalAwal(totalDanaAwal);

    // memasukkan semua dana akhir ke array baru
    history.forEach((item) => {
      arrayDanaAkhir.push(item.danaAkhir);
    });

    const totalDanaAkhir = arrayDanaAkhir.reduce(
      (prev, curee) => prev + curee,
      0
    );
    setTotalAkhir(totalDanaAkhir);

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
          <div className="grid grid-cols-2 text-center mt-4">
            <div>
              <h1>Total Dana Awal</h1>
              <p>{formatRp(totalAwal)}</p>
            </div>
            <div>
              <h1>Total Dana Akhir</h1>
              <p>{formatRp(totalAkhir)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TotalAlokasiDana;
