import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//context
import { GlobalContext } from "../../context/GlobalState";

//component
import Pendanaan from "../Pendanaan";

const HistoryPendanaan = () => {
  const { historyPendanaan } = useContext(GlobalContext);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    const arrayBaru = historyPendanaan.filter((x, y) => y < 5);
    setGroup(arrayBaru);
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
            <Link to="/all">
              <input
                type="search"
                className="bg-gray-200 w-3/4 rounded-lg px-2 py-1"
                placeholder="cari pendanaan"
              />
            </Link>
          </div>
          <div>
            {/* 6 pendanaan terbaru */}
            {group.map((h, i) => (
              <Pendanaan h={h} i={i} />
            ))}
          </div>
          {group.length < 5 ? (
            ""
          ) : (
            <div className="text-center my-10">
              <Link to="/all">
                <h1 className="font-bold text-green-700">Lihat Semua</h1>
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
