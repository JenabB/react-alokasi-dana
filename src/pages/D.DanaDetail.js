import React, { useState, useContext } from "react";
import Helmet from "react-helmet";

//context
import { GlobalContext } from "../context/GlobalState";

//components
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import Dana from "../components/danaDetail/D.Dana";
import Header from "../components/danaDetail/D1.Header";

const DanaDetail = () => {
  const { pendanaanDetail } = useContext(GlobalContext);
  const detail = pendanaanDetail;
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const items = detail?.semuaProduk?.filter((data) => {
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
        <Header detail={detail} />

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
              {items.map((dana, i) => (
                <Dana dana={dana} key={i} />
              ))}
            </div>
          ) : (
            <div className="px-2 py-3">
              <div>
                {detail.semuaProduk.map((dana, i) => (
                  <Dana dana={dana} key={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DanaDetail;
