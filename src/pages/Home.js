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
      initial={{ scaleY: 0 }} //This is the style of the component at the beginning of the animation when it is animating in.
      animate={{ scaleY: 1 }} //This is the style of the component at the end of the animation when it is animating in.
      exit={{ scaleY: 0 }} //This is the style of the component at the end of the animation when it is animating out.
      transition={{ duration: 0.5 }} //Transition configuration. Here, we're specifying how long we want the duration to last for (in our case, 0.5 seconds).
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
