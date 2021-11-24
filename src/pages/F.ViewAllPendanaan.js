import React, { useState, useEffect, useContext } from "react";
import Helmet from "react-helmet";
import moment from "moment";

//context
import { GlobalContext } from "context/GlobalState";

//component
import AppBarWithBackButton from "components/AppBarWithBackButton";
import Pendanaan from "components/common/Pendanaan";
import { motion } from "framer-motion";

import { searchInput } from "theme/inputTheme";
import { formatRp } from "utils/formatRp";

const ViewAllPendanaan = () => {
  const [groupByDate, setGroupByDate] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortAscending, setSortAscending] = useState(false);
  const [query, setQuery] = useState("");

  const { historyPendanaan } = useContext(GlobalContext);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  // const items = historyPendanaan.filter((data) => {
  //   return data.namaPendanaan.toLowerCase().includes(query.toLowerCase());
  // });

  //grouping by date
  useEffect(() => {
    // this gives an object with dates as keys

    const groups = historyPendanaan.reduce((groups, dana) => {
      const date = moment(dana.createdAt).format("YYYY MMMM");

      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(dana);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      const semuaProduk = [];
      const danaAwal = [];

      groups[date].forEach((el) => danaAwal.push(el.danaAwal));

      const totalDanaAwal = danaAwal.reduce((prev, curr) => prev + curr, 0);

      groups[date].forEach((el) => semuaProduk.push(el.semuaProduk));
      const allProd = [].concat(...semuaProduk.map((el) => el));

      const semuaHarga = [];
      allProd.forEach((el) => semuaHarga.push(parseInt(el.harga)));
      const totalPendanaan = semuaHarga.reduce((prev, cure) => prev + cure, 0);
      const totalDanaAkhir = totalDanaAwal - totalPendanaan;

      let sortedDana = groups[date].sort((a, b) => {
        if (sortField === 'totalDana') {
          a.totalDana = +a.danaAwal - +a.danaAkhir;
          b.totalDana = +b.danaAwal - +b.danaAkhir;
        }
        if (sortAscending) return a[sortField] - b[sortField];
        return b[sortField] - a[sortField];
      });

      return {
        date,
        dana: sortedDana,
        totalPendanaan: totalPendanaan,
        totalProduk: allProd.length || null,
        totalDanaAwal: totalDanaAwal,
        totalDanaAkhir: totalDanaAkhir,
      };
    });
    setGroupByDate(groupArrays);
  }, [historyPendanaan, sortAscending, sortField]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Semua Pendanaan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AppBarWithBackButton title="Semua Pendanaan" />
      <div className="text-center my-7">
        <input
          type="search"
          className={searchInput}
          placeholder="cari pendanaan"
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      <div className="lg:w-2/4 mx-auto w-full">
        <div className="grid">
          {groupByDate.length > 0 ? (
            groupByDate.map((g, i) => (
              <div key={i}>
                <h1 className="text-center my-4 font-bold text-green-700">
                  {g.date}
                </h1>
                <div className="p-4 m-4 text-white bg-primary rounded-md">
                  <div className="text-center">
                    <h1>{formatRp(g.totalPendanaan)} dana dialokasikan</h1>
                    <div className="grid grid-cols-2 my-2 text-center">
                      <div>
                        <h1>Dana Awal</h1>
                        <p>{formatRp(g.totalDanaAwal)}</p>
                      </div>
                      <div>
                        <h1>Dana Akhir</h1>
                        <p>{formatRp(g.totalDanaAkhir)}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="grid grid-cols-2 my-2 text-center">
                    <p className="text-sm">{g.dana.length} pendanaan</p>
                    <p className="text-sm">{g.totalProduk} produk</p>
                  </div>
                </div>
                <div className="ml-2">
                  <select className="py-1 px-2" onChange={(e) => setSortField(e.target.value)}>
                    <option value="totalDana">Total Dana Dialokasikan</option>
                    <option value="danaAwal">Dana Awal</option>
                    <option value="danaAkhir">Dana Akhir</option>
                  </select>
                  <button className={`material-icons ml-2 text-primary transform ${sortAscending ? '' : 'rotate-180'}`} onClick={() => setSortAscending(!sortAscending)}>
                    sort
                  </button>
                </div>
                <div>
                  {g.dana.map((h, i) => (
                    <Pendanaan h={h} i={i} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ViewAllPendanaan;
