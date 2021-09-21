import React, { useState, useEffect, useContext } from "react";
import Helmet from "react-helmet";

//context
import { GlobalContext } from "../context/GlobalState";

//component
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import Pendanaan from "../components/Pendanaan";

const ViewAllPendanaan = () => {
  const [groupss, setGroupss] = useState([]);
  const [query, setQuery] = useState("");
  console.log(groupss);
  const { historyPendanaan } = useContext(GlobalContext);

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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Semua Pendanaan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AppBarWithBackButton title="Semua Pendanaan" />
      <div className="text-center my-7">
        <input
          type="search"
          className="bg-gray-200 w-2/4 rounded-lg px-2 py-1"
          placeholder="cari pendanaan"
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      {query !== "" ? (
        <div className="lg:w-2/4 mx-auto w-full">
          {items.map((h, i) => (
            <Pendanaan h={h} i={i} />
          ))}
        </div>
      ) : (
        <div className="lg:w-2/4 mx-auto w-full">
          {historyPendanaan.map((h, i) => (
            <Pendanaan h={h} i={i} />
          ))}
        </div>
      )}

      <div className="lg:w-2/4 mx-auto w-full">
        {groupss.length > 0 ? (
          groupss.map((g, i) => (
            <div key={i}>
              <h1 className="text-center my-4 font-bold text-green-700">
                {g.date}
              </h1>
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
  );
};

export default ViewAllPendanaan;
