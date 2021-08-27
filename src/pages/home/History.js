import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { GlobalContext } from "../../context/GlobalState";

const History = () => {
  const { history } = useContext(GlobalContext);
  console.log(history);
  return (
    <div className="m-4 rounded-xl p-4 w-full mx-auto">
      <h1>History</h1>
      <hr />
      {history.length > 0 ? (
        <div>
          {history.map((h, i) => (
            <div key={i} className="p-4 m-4 shadow-lg rounded-lg">
              <Link to={`pendanaan/${h.id}`}>
                <h1 className="text-green-800 font-bold text-lg">
                  {h.namaPendanaan}
                </h1>

                <div className="grid grid-cols-2 mt-2 mb-2">
                  <div>
                    <h1>Dana awal</h1>
                    <h1>{h.danaAwal}</h1>
                  </div>
                  <div>
                    <h1>Dana akhir</h1>
                    <h1>{h.danaAkhir}</h1>
                  </div>
                </div>
                <p className="text-gray-400">{moment(h.createdAt).fromNow()}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="m-4">
          <h1>Tidak ada sejarah alokasi</h1>
        </div>
      )}
    </div>
  );
};

export default History;
