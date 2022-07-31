import React, { useContext } from "react";

//components
import { HistoryPendanaan, TotalAlokasiDana } from "components/home";
import { AppBar } from "components/common";
//utils
import { motion } from "framer-motion";

//context
import { GlobalContext } from "context/GlobalState";
import User from "components/home/User";

const Home = () => {
  const {
    historyPendanaan,
    totalAlokasiDana,
    getTotalAlokasiDana,
    totalDanaAwal,
    totalDanaAkhir,
    getTotalDanaAwal,
    getTotalProduk,
    getSemuaProduk,
    getTotalDanaAkhir,
  } = useContext(GlobalContext);

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
      <AppBar title="Alokasi Dana" />

      <div className="mx-auto w-full pb-20">
        <div className="flex justify-between py-4 px-8">
          <User />
          <button
            className="bg-primary px-2 rounded-lg text-white"
            onClick={() => {
              window.location.reload(true);
            }}
          >
            Update App
          </button>
        </div>
        <TotalAlokasiDana
          historyPendanaan={historyPendanaan}
          totalAlokasiDana={totalAlokasiDana}
          getTotalAlokasiDana={getTotalAlokasiDana}
          totalDanaAwal={totalDanaAwal}
          totalDanaAkhir={totalDanaAkhir}
          getSemuaProduk={getSemuaProduk}
          getTotalDanaAwal={getTotalDanaAwal}
          getTotalDanaAkhir={getTotalDanaAkhir}
          getTotalProduk={getTotalProduk}
        />
        <HistoryPendanaan />
      </div>
    </motion.div>
  );
};

export default Home;
