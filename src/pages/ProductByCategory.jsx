import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AppBar } from "components/common";
import { GlobalContext } from "context/GlobalState";
import Dana from "components/common/Dana";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { formatRp } from "utils/formatRp";

const ProductByCategory = () => {
  const { category } = useParams();

  const { totalProduk } = useContext(GlobalContext);
  const filtered = totalProduk.filter((x) => x.category === category);

  const semuaHarga = [];
  filtered.forEach((element) => {
    semuaHarga.push(parseInt(element.harga));
  });

  const totalHarga = semuaHarga.reduce((prev, cur) => prev + cur, 0);

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
      <AppBar isBack={true} title={category} />
      <div className="bg-asmara p-4 mb-4">
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
