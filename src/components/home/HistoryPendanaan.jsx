import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//context
import { GlobalContext } from "context/GlobalState";
import { searchInput } from "theme/inputTheme";

//component
import Pendanaan from "components/common/Pendanaan";

const HistoryPendanaan = () => {
  const { historyPendanaan } = useContext(GlobalContext);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    const arrayBaru = historyPendanaan.filter((x, y) => y < 5);
    setGroup(arrayBaru);
  }, [historyPendanaan]);

  return (
    <div className="my-2 rounded-xl p-4 w-full mx-auto">
      <h1>Sejarah</h1>
      <hr />

      {historyPendanaan.length > 0 ? (
        <div>
          <div className="text-center my-6">
            <Link to="/dana">
              <input
                type="search"
                className={searchInput}
                placeholder="cari pendanaan"
              />
            </Link>
          </div>
          <div>
            {/* 6 pendanaan terbaru */}
            {group.map((h, i) => (
              <Pendanaan h={h} i={i} key={i} />
            ))}
          </div>
          {group.length < 5 ? (
            ""
          ) : (
            <div className="text-center my-10">
              <Link to="/dana">
                <h1 className="font-bold text-primary">Lihat Semua</h1>
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
