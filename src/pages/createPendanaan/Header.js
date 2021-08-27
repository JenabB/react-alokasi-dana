import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";

const Header = () => {
  const { danaAwal, danaAkhir } = useContext(GlobalContext);

  return (
    <div className="bg-green-600 text-center text-white  m-4 p-4 rounded-lg">
      <div className="grid grid-cols-2">
        <div>
          <h1>Dana Awal</h1>
          <h1 className="font-bold">{formatRp(danaAwal)}</h1>
        </div>
        <div>
          <h1>Dana Akhir</h1>
          <h1 className="font-bold">{formatRp(danaAkhir)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
