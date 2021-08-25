import React from "react";
import { formatRp } from "../../utils/formatRp";

const TotalAllocation = () => {
  return (
    <div className="p-4">
      <div
        className="bg-green-400 m-4 text-white rounded-xl p-4 lg:w-2/4 w-full mx-auto"
        style={{ height: "200px" }}
      >
        <h1>Total Dana Dialokasikan</h1>
        <h2 className="text-4xl my-4">{formatRp(1000000000)}</h2>
      </div>
    </div>
  );
};

export default TotalAllocation;
