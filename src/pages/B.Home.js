import React, { useContext } from "react";

//components
import AppBar from "../components/home/B1.AppBar";
import FloatingAddButton from "../components/home/B4.FloatingAddButton";
import HistoryPendanaan from "../components/home/B3.HistoryPendanaan";
import TotalAlokasiDana from "../components/home/B2.TotalAlokasiDana";
import Blogs from "../components/home/Blogs";
//utils
import { motion } from "framer-motion";

//
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const {
    historyPendanaan,
    totalAlokasiDana,
    getTotalAlokasiDana,
    totalDanaAwal,
    totalDanaAkhir,
    getTotalDanaAwal,
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
      }} //Transition configuration. Here, we're specifying how long we want the duration to last for (in our case, 0.5 seconds).
    >
      <AppBar />

      <div className="lg:w-2/4 mx-auto w-full">
        <TotalAlokasiDana
          historyPendanaan={historyPendanaan}
          totalAlokasiDana={totalAlokasiDana}
          getTotalAlokasiDana={getTotalAlokasiDana}
          totalDanaAwal={totalDanaAwal}
          totalDanaAkhir={totalDanaAkhir}
          getTotalDanaAwal={getTotalDanaAwal}
          getTotalDanaAkhir={getTotalDanaAkhir}
        />
        <Blogs />
        <HistoryPendanaan />
      </div>
      <FloatingAddButton />
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Home;
