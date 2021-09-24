import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//context
import { GlobalContext } from "../../context/GlobalState";

//utils
import { formatRp } from "../../utils/formatRp";
import { motion } from "framer-motion";

const TotalAlokasiDana = () => {
  const {
    historyPendanaan,
    totalAlokasiDana,
    getTotalAlokasiDana,
    totalDanaAwal,
    totalDanaAkhir,
    getTotalDanaAwal,
    getTotalDanaAkhir,
  } = useContext(GlobalContext);
  const [arraySemua, setArraySemua] = useState([]);
  const [arrayDanaAwal, setArrayDanaAwal] = useState([]);
  const [arrayDanaAkhir, setArrayDanaAkhir] = useState([]);

  useEffect(() => {
    //memasukkan array semua produk ke array baru
    setArraySemua([]);
    setArrayDanaAwal([]);
    setArrayDanaAkhir([]);

    historyPendanaan.forEach((item) => {
      arraySemua.push(item.semuaProduk);
    });

    //array untuk semua harga
    const arrayHarga = [].concat(
      ...arraySemua.map((totalHarga) =>
        totalHarga.map((a) => parseInt(a.harga))
      )
    );

    //menjumlahkan nilai array harga
    const totalHargaSemuaProduk = arrayHarga.reduce(
      (prev, cure) => prev + cure,
      0
    );
    getTotalAlokasiDana(totalHargaSemuaProduk);

    // memasukkan semua dana awal ke array baru
    historyPendanaan.forEach((item) => {
      arrayDanaAwal.push(item.danaAwal);
    });

    const totalDanaAwal = arrayDanaAwal.reduce((prev, cur) => prev + cur, 0);
    getTotalDanaAwal(totalDanaAwal);

    // memasukkan semua dana akhir ke array baru
    historyPendanaan.forEach((item) => {
      arrayDanaAkhir.push(item.danaAkhir);
    });

    const totalDanaAkhir = arrayDanaAkhir.reduce((prev, cur) => prev + cur, 0);
    getTotalDanaAkhir(totalDanaAkhir);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historyPendanaan]);

  return (
    <div className="p-4">
      <Link to="detail">
        <motion.div
          className="bg-green-800 text-white rounded-xl p-4 w-full mx-auto"
          style={{ height: "200px" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.9,
              },
            },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 1,
          }}
        >
          <h1>Total Dana Dialokasikan</h1>
          <h2 className="text-4xl my-4 font-bold">
            {formatRp(totalAlokasiDana)}
          </h2>
          <hr />
          <div className="grid grid-cols-2 text-center mt-4">
            <div>
              <h1>Total Dana Awal</h1>
              <p className="font-bold">{formatRp(totalDanaAwal)}</p>
            </div>
            <div>
              <h1>Total Dana Akhir</h1>
              <p className="font-bold">{formatRp(totalDanaAkhir)}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default TotalAlokasiDana;
