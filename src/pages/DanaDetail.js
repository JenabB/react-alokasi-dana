import React, { useState, useContext } from "react";
import moment from "moment";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import { formatRp } from "../utils/formatRp";

const DanaDetail = () => {
  const { pendanaanDetail } = useContext(GlobalContext);
  const detail = pendanaanDetail;
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(detail);

  const items = detail.semuaProduk.filter((data) => {
    return data.nama.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <AppBarWithBackButton />
      <div className="lg:w-2/4 mx-auto w-full">
        <div className="px-4">
          <div className="text-center text-white rounded-xl mt-4 py-8 bg-green-600">
            <h1 className="text-3xl">{detail.namaPendanaan}</h1>
            <p>
              {moment(detail.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
            <div className="grid grid-cols-2 mt-8">
              <div>
                <h1>Dana Awal</h1>
                <h1>{formatRp(detail.danaAwal)}</h1>
              </div>
              <div>
                <h1>Dana Akhir</h1>
                <h1>{formatRp(detail.danaAkhir)}</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center mt-10">Alokasi Dana</h1>
          <div className="text-center my-4">
            <input
              type="search"
              className="bg-gray-200 rounded-lg px-2 py-1"
              placeholder="cari pendanaan"
              value={query}
              onChange={handleQueryChange}
            />
          </div>
          {query !== "" ? (
            <div>
              <div>
                <table className="table-fixed w-full text-center">
                  <tr>
                    <th className="w-1/4">No.</th>
                    <th className="w-2/4">Nama</th>
                    <th className="w-2/4">Harga</th>
                  </tr>
                  {items.map((data) => (
                    <tr>
                      <td>{items.indexOf(data) + 1}</td>
                      <td>{data.nama}</td>
                      <td>{formatRp(data.harga)}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : (
            <div className="px-2 py-3">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default DanaDetail;
