import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import AppBarWithBackButton from "components/AppBarWithBackButton";
import { GlobalContext } from "context/GlobalState";
import Dana from "components/danaDetail/D.Dana";
import { motion } from "framer-motion";

import { formatRp } from "utils/formatRp";
const ProductByCategory = (props) => {
  const category = props.match.params.category;

  const { totalProduk } = useContext(GlobalContext);
  const filtered = totalProduk.filter((x) => x.category === category);

  const semuaHarga = [];
  filtered.forEach((element) => {
    semuaHarga.push(parseInt(element.harga));
  });

  const totalHarga = semuaHarga.reduce((prev, cur) => prev + cur, 0);
  function categoryHeader(category) {
    const prefix = "p-4 rounded-lg text-white m-4 bg-";

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
    <motion.div
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
            delay: 0.4,
          },
        },
      }}
    >
      <Helmet>
        <title>{category}</title>
      </Helmet>
      <AppBarWithBackButton title={category} />
      <div className={categoryHeader(category)}>
        <h1>
          <span className="font-bold text-lg">{formatRp(totalHarga)}</span>{" "}
          telah dialokasikan untuk {category}
        </h1>
        <h1>
          Terdapat
          <span className="font-bold text-lg"> {filtered.length} </span>produk
          dalam kategori
        </h1>
      </div>

      <div className="lg:w-2/4 mx-auto w-full">
        <div className="grid">
          {filtered.map((f, i) => (
            <Dana dana={f} key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductByCategory;
