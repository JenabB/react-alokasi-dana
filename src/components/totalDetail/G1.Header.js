import React from "react";
import { formatRp } from "utils/formatRp";

const Header = ({
  totalAlokasiDana,
  totalDanaAwal,
  totalDanaAkhir,
  totalProduk,
}) => {
  return (
    <div
      className="m-4 p-4 rounded-xl text-white bg-primary"
      style={{ height: "200px" }}
    >
      <div className="">
        <h1>Total Dana Dialokasikan</h1>
        <h1 className="text-lg font-bold">{formatRp(totalAlokasiDana)}</h1>
        <div className="grid grid-cols-2 mt-4">
          <div>
            <h1>Total Dana Awal</h1>
            <h1 className="text-lg font-bold">{formatRp(totalDanaAwal)}</h1>
          </div>
          <div>
            <h1>Total Dana Akhir</h1>
            <h1 className="text-lg font-bold">{formatRp(totalDanaAkhir)}</h1>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-bold">
            {totalProduk.length}
            <span className="font-normal"> produk telah ditambahkan</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
