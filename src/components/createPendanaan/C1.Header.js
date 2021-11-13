import React, { useContext } from "react";

//context
import { GlobalContext } from "../../context/GlobalState";

//utils
import { formatRp } from "../../utils/formatRp";
import { motion } from "framer-motion";

const Header = () => {
  const { danaAwal, danaAkhir, semuaProduk } = useContext(GlobalContext);

  return (
    <motion.div
      className="bg-primary sticky top-4 z-10 text-center text-white m-3 p-3 rounded-lg"
      animate={{
        scale: [2, 1],
      }}
      transition={{ duration: 0.8 }}
    >
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
      <div className="mt-8 text-center">
        {semuaProduk.length !== 0 ? (
          <div className="bg-primaryLight rounded-lg px-2 py-3">
            <table className="table-fixed w-full">
              <tr>
                <th className="w-1/4">No.</th>
                <th className="w-2/4">Nama</th>
                <th className="w-2/4">Harga</th>
              </tr>
              {semuaProduk.map((product, index) => (
                <tr key={index}>
                  <td>{semuaProduk.indexOf(product) + 1}</td>
                  <td width="300px">{product.nama}</td>
                  <td>{formatRp(product.harga)}</td>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

export default Header;
