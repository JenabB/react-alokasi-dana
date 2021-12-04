import React, { useContext } from "react";
import { useHistory } from "react-router";

//components
import AppBar from "components/home/B1.AppBar";
import FloatingAddButton from "components/home/B4.FloatingAddButton";
import HistoryPendanaan from "components/home/B3.HistoryPendanaan";
import TotalAlokasiDana from "components/home/B2.TotalAlokasiDana";

//utils
import { motion } from "framer-motion";

//context
import { GlobalContext } from "context/GlobalState";
import User from "components/home/B1.User";

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

  // development only, please delete button and imports when done
  const history = useHistory();

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
      <AppBar />

      <div className="lg:w-2/4 mx-auto w-full">
        <User />
        <button style={{ backgroundColor: 'red', color: 'black' }} onClick={() => history.push('report')}>
          Click here to go to Report Page
          <p>(development only, delete code in B.Home.js when done).</p>
        </button>
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
      <FloatingAddButton />
    </motion.div>
  );
};

export default Home;
