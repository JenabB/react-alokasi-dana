import React, { useState, useEffect, useContext } from "react";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import Pendanaan from "./home/Pendanaan";

const ViewAllPendanaan = () => {
  const [groupss, setGroupss] = useState({});
  console.log(groupss);
  const { historyPendanaan } = useContext(GlobalContext);
  //grouping by date
  useEffect(() => {
    // this gives an object with dates as keys

    const groups = historyPendanaan.reduce((groups, dana) => {
      const date = String(dana.createdAt).split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(dana);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        dana: groups[date],
      };
    });
    setGroupss(groupArrays);
  }, [historyPendanaan]);
  return (
    <div>
      <AppBarWithBackButton />
      <div>
        {historyPendanaan.map((h, i) => (
          <Pendanaan h={h} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ViewAllPendanaan;
