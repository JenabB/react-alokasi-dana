import React from "react";
import AppBar from "../components/AppBar";
import FloatingAddButton from "../components/FloatingAddButton";
import History from "./home/History";
import TotalAllocation from "./home/TotalAllocation";

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="lg:w-2/4 mx-auto w-full">
        <TotalAllocation />
        <History />
      </div>

      <FloatingAddButton />
    </div>
  );
};

export default Home;
