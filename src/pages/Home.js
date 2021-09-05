import React from "react";

//components
import AppBar from "../components/AppBar";
import FloatingAddButton from "../components/FloatingAddButton";
import HistoryPendanaan from "./home/HistoryPendanaan";
import TotalAlokasiDana from "./home/TotalAlokasiDana";

//utils
import { motion } from "framer-motion";

const Home = () => {
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
        <TotalAlokasiDana />
        <HistoryPendanaan />
      </div>
      <FloatingAddButton />
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Home;
