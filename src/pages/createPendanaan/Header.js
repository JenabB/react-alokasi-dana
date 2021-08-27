import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";

const Header = () => {
  const { danaAwal, danaAkhir, hargaProduk, semuaProduk } =
    useContext(GlobalContext);

  return (
    <div className="bg-green-600 sticky top-4 z-10 text-center text-white  m-4 p-4 rounded-lg">
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
        {hargaProduk !== 0 && semuaProduk.length !== 0 ? (
          <div className="bg-green-900 rounded-lg px-2 py-3">
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
    </div>
  );
};

export default Header;