import React, { useContext } from "react";
import moment from "moment";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import { formatRp } from "../utils/formatRp";

const DanaDetail = () => {
  const { pendanaanDetail } = useContext(GlobalContext);
  console.log(pendanaanDetail);
  const detail = pendanaanDetail;
  return (
    <div>
      <AppBarWithBackButton />
      <div className="lg:w-2/4 mx-auto w-full">
        <div className="text-center text-white rounded-lg mt-4 py-8 bg-green-600">
          <h1 className="text-3xl">{detail.namaPendanaan}</h1>
          <p>
            {moment(detail.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </p>
          <div className="grid grid-cols-2 mt-8">
            <div>
              <h1>Dana Awal</h1>
              <h1>{detail.danaAwal}</h1>
            </div>
            <div>
              <h1>Dana Awal</h1>
              <h1>{detail.danaAkhir}</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center mt-10">Alokasi Dana</h1>
          <div className="rounded-lg px-2 py-3">
            <table className="table-fixed w-full text-center">
              <tr>
                <th className="w-1/4">No.</th>
                <th className="w-2/4">Nama</th>
                <th className="w-2/4">Harga</th>
              </tr>
              {detail.semuaProduk.map((product, index) => (
                <tr key={index}>
                  <td>{detail.semuaProduk.indexOf(product) + 1}</td>
                  <td width="300px">{product.nama}</td>
                  <td>{formatRp(product.harga)}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanaDetail;
