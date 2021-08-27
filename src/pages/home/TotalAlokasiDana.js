import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";

const TotalAlokasiDana = () => {
  const { totalAlokasiDana } = useContext(GlobalContext);
  return (
    <div className="p-4">
      <div
        className="bg-green-800 m-4 text-white rounded-xl p-4 w-full mx-auto"
        style={{ height: "200px" }}
      >
        <h1>Total Dana Dialokasikan</h1>
        <h2 className="text-4xl my-4">{formatRp(totalAlokasiDana)}</h2>
      </div>
    </div>
  );
};

export default TotalAlokasiDana;
