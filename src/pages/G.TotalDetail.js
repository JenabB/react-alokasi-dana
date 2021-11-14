import React, { useContext } from "react";
import Helmet from "react-helmet";

//component
import AppBarWithBackButton from "components/AppBarWithBackButton";
import AllProduct from "components/totalDetail/G2.AllProduct";
import Header from "components/totalDetail/G1.Header";
import { motion } from "framer-motion";

//context
import { GlobalContext } from "context/GlobalState";

const TotalDetail = () => {
  const { totalAlokasiDana, totalDanaAwal, totalDanaAkhir, totalProduk } =
    useContext(GlobalContext);

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
          totalProduk={totalProduk}
        />
        <AllProduct totalProduk={totalProduk} />
      </div>
    </motion.div>
  );
};

export default TotalDetail;
