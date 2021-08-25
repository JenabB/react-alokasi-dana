import React from "react";
import AppBar from "../components/AppBar";
import FloatingAddButton from "../components/FloatingAddButton";
import History from "./Home/History";
import TotalAllocation from "./Home/TotalAllocation";

const Home = () => {
  return (
    <div>
      <AppBar />
      <TotalAllocation />
      <History />
      <FloatingAddButton />
    </div>
  );
};

export default Home;
