import React from "react";
import AppBar from "../components/AppBar";
import FloatingAddButton from "../components/FloatingAddButton";
// import Footer from "./home/Footer";
import History from "./home/History";
import TotalAlokasiDana from "./home/TotalAlokasiDana";
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
        <History />
      </div>
      <FloatingAddButton />
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Home;
