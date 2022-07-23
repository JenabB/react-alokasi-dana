import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
//utils
import { formatRp } from "utils/formatRp";
import { motion } from "framer-motion";

const Header = () => {
  const { danaAwal, danaAkhir } = useContext(GlobalContext);

  return (
    <motion.header
      className="bg-primary sticky top-4 z-10 text-center text-white m-3 rounded-lg"
      animate={{
        scale: [2, 1],
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-2">
        <div className="bg-tabungan p-2">
          <h1>Dana Awal</h1>
          <h1 className="font-bold">{formatRp(danaAwal)}</h1>
        </div>
        <div className="bg-asmara p-2">
          <h1>Dana Akhir</h1>
          <h1 className="font-bold">{formatRp(danaAkhir)}</h1>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
