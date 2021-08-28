import React from "react";
import AppBar from "../components/AppBar";
import FloatingAddButton from "../components/FloatingAddButton";
import Footer from "./home/Footer";
import History from "./home/History";
import TotalAlokasiDana from "./home/TotalAlokasiDana";

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="lg:w-2/4 mx-auto w-full">
        <TotalAlokasiDana />
        <History />
      </div>
      <Footer />
      <FloatingAddButton />
    </div>
  );
};

export default Home;
