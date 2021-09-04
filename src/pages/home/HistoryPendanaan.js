import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import { GlobalContext } from "../../context/GlobalState";
import { formatRp } from "../../utils/formatRp";
import { motion } from "framer-motion";

const HistoryPendanaan = () => {
  const [query, setQuery] = useState("");
  const [groupss, setGroupss] = useState({});
  console.log(groupss);
  const { historyPendanaan, getPendanaanDetail, deleteOnePendanaan } =
    useContext(GlobalContext);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const items = historyPendanaan.filter((data) => {
    return data.namaPendanaan.toLowerCase().includes(query.toLowerCase());
  });

  //grouping by date
  useEffect(() => {
    // this gives an object with dates as keys

    const groups = historyPendanaan.reduce((groups, dana) => {
      const date = String(dana.createdAt).split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(dana);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        dana: groups[date],
      };
    });
    setGroupss(groupArrays);
  }, [historyPendanaan]);

  return (
    <div className="m-4 rounded-xl p-4 w-full mx-auto">
      <h1>History</h1>
      <hr />
      {/* 
      {groupss ? <div>{group.map}</div> : ""} */}

      {historyPendanaan.length > 0 ? (
        <div>
          <div className="text-center my-7">
            <input
              type="search"
              className="bg-gray-200 w-3/4 rounded-lg px-2 py-1"
              placeholder="cari pendanaan"
              value={query}
              onChange={handleQueryChange}
            />
          </div>
          {query !== "" ? (
            <div>
              {items.map((h, i) => (
                <motion.div
                  key={i}
                  className="p-4 m-2 shadow-lg rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.7 },
                  }}
                  whileTap={{
                    scale: 1,
                  }}
                >
                  <div>
                    <div className="flex justify-between">
                      <Link
                        to={`pendanaan/${h.id}`}
                        onClick={() => getPendanaanDetail(h)}
                        className="text-green-800 font-bold text-lg"
                      >
                        {h.namaPendanaan}
                      </Link>
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Hapus pendanaan?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteOnePendanaan(h.id);
                              Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        Delete
                      </button>
                    </div>

                    <div className="grid grid-cols-2 mt-2 mb-2">
                      <div>
                        <h1>Dana awal</h1>
                        <h1>{formatRp(h.danaAwal)}</h1>
                      </div>
                      <div>
                        <h1>Dana akhir</h1>
                        <h1>{formatRp(h.danaAkhir)}</h1>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      {moment(h.createdAt).fromNow()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              {historyPendanaan.map((h, i) => (
                <motion.div
                  key={i}
                  className="p-4 m-2 shadow-lg rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.7 },
                  }}
                  whileTap={{
                    scale: 1,
                  }}
                >
                  <div>
                    <div className="flex justify-between">
                      <Link
                        to={`pendanaan/${h.id}`}
                        onClick={() => getPendanaanDetail(h)}
                        className="text-green-800 font-bold text-lg"
                      >
                        {h.namaPendanaan}
                      </Link>
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Hapus pendanaan?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteOnePendanaan(h.id);
                              Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        Delete
                      </button>
                    </div>

                    <div className="grid grid-cols-2 mt-2 mb-2">
                      <div>
                        <h1>Dana awal</h1>
                        <h1>{formatRp(h.danaAwal)}</h1>
                      </div>
                      <div>
                        <h1>Dana akhir</h1>
                        <h1>{formatRp(h.danaAkhir)}</h1>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      {moment(h.createdAt).fromNow()}
                    </p>
                  </div>
                </motion.div>
              ))}
              <Link to="/all">
                <div className="text-center font-bold text-green-700 mt-10 mb-4">
                  <h1>Lihat semua</h1>
                </div>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="m-4">
          <h1>Tidak ada sejarah alokasi</h1>
        </div>
      )}
    </div>
  );
};

export default HistoryPendanaan;
