import React, { useContext, useState, useEffect } from "react";
import Helmet from "react-helmet";

//component
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import AllProduct from "../components/totalDetail/G2.AllProduct";
import Header from "../components/totalDetail/G1.Header";

//context
import { GlobalContext } from "../context/GlobalState";

const TotalDetail = () => {
  const [semuaProduk, setSemuaProduk] = useState([]);
  const [semua, setSemua] = useState([]);
  const [semuaHarga, setSemuaHarga] = useState(0);
  const { historyPendanaan, totalAlokasiDana, totalDanaAwal, totalDanaAkhir } =
    useContext(GlobalContext);
  console.log(semuaProduk);

  useEffect(() => {
    setSemuaProduk([]);
    setSemua([]);
    historyPendanaan.forEach((el) => semuaProduk.push(el.semuaProduk));

    //array untuk semua harga
    const arrayHarga = [].concat(...semuaProduk.map((el) => el));
    setSemua(arrayHarga);

    //yare
    //menjumlahkan nilai array harga
    const totalHargaSemuaProduk = arrayHarga.reduce(
      (prev, cure) => prev.harga + cure.harga,
      0
    );
    setSemuaHarga(totalHargaSemuaProduk);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Total Dana Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AppBarWithBackButton title="Total Dana Detail" />

      <div className="lg:w-2/4 mx-auto w-full">
        <Header
          totalAlokasiDana={totalAlokasiDana}
          totalDanaAwal={totalDanaAwal}
          totalDanaAkhir={totalDanaAkhir}
          semua={semua}
        />
        <AllProduct semuaHarga={semuaHarga} semua={semua} />
      </div>
    </div>
  );
};

export default TotalDetail;
