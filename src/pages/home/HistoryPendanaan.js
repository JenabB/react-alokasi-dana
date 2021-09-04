import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Pendanaan from "./Pendanaan";

const HistoryPendanaan = () => {
  const [query, setQuery] = useState("");

  const { historyPendanaan } = useContext(GlobalContext);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const items = historyPendanaan.filter((data) => {
    return data.namaPendanaan.toLowerCase().includes(query.toLowerCase());
  });

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
                <Pendanaan h={h} i={i} />
              ))}
            </div>
          ) : (
            <div>
              {historyPendanaan.map((h, i) => (
                <Pendanaan h={h} i={i} />
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
