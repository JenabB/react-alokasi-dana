import React, { useState, useContext } from "react";
import moment from "moment";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import { formatRp } from "../utils/formatRp";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const DanaDetail = () => {
  const { pendanaanDetail } = useContext(GlobalContext);
  const detail = pendanaanDetail;
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const items = detail.semuaProduk.filter((data) => {
    return data.nama.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dana Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AppBarWithBackButton title="Dana Detail" />

      <div className="lg:w-2/4 mx-auto w-full">
        <div className="px-4">
          <div className="text-center text-white rounded-xl mt-4 pb-8 pt-4 bg-green-600">
            <div className="flex justify-between px-4">
              <div></div>
              <h1 className="text-3xl font-bold">{detail.namaPendanaan}</h1>
              <Link to={`${detail.id}/edit`}>
                <span class="material-icons md-24">edit</span>
              </Link>
            </div>
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

        <div className="text-left mt-4 px-4">
          <h1>Total Pengeluaran</h1>
          <p>{formatRp(detail.danaAwal - detail.danaAkhir)}</p>
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
