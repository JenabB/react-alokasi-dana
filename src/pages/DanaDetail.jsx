import React, { useState, useContext } from "react";
import Helmet from "react-helmet";

//context
import { GlobalContext } from "context/GlobalState";

//components
import { AppBar } from "components/common";
import Dana from "components/common/Dana";
import Header from "components/danaDetail/D1.Header";
import DanaChart from "components/common/DanaChart";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const DanaDetail = () => {
  const { id } = useParams();

  const { historyPendanaan } = useContext(GlobalContext);

  const detail = historyPendanaan.find((el) => el.id === id);

  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const items = detail?.semuaProduk?.filter((data) => {
    return data.nama.toLowerCase().includes(query.toLowerCase());
  });

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
        <title>Pendanaan Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AppBar title="Pendanaan Detail" isBack={true} />

      <div className=" mx-auto w-full pb-20">
        <div className="grid md:grid-cols-2">
          <Header detail={detail} />

          <DanaChart />
        </div>

        <div>
          <h1 className="text-center mt-10">Alokasi Dana</h1>
          <div className="text-center my-4">
            <input
              type="search"
              className="bg-gray-200 md:w-3/4 rounded-md px-3 py-2"
              placeholder="cari pendanaan"
              value={query}
              onChange={handleQueryChange}
            />
          </div>
          {query !== "" ? (
            <div>
              {items.map((dana, i) => (
                <Dana dana={dana} key={i} />
              ))}
            </div>
          ) : (
            <div className="px-2 py-3">
              <div className="grid md:grid-cols-3">
                {detail?.semuaProduk.map((dana, i) => (
                  <Dana dana={dana} key={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DanaDetail;
