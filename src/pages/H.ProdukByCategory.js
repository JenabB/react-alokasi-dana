import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import Dana from "../components/danaDetail/D.Dana";

const ProdukByCategory = (props) => {
  const kategori = props.match.params.kategori;

  const { semuaProduk } = useContext(GlobalContext);
  const filtered = semuaProduk.filter((x) => x.kategori === kategori);

  return (
    <div>
      <Helmet>
        <title>{kategori}</title>
      </Helmet>
      <AppBarWithBackButton title={kategori} />
      <div className="mt-10">
        <h1 className="text-center">
          {filtered.length} produk dalam kategori {kategori}
        </h1>
      </div>
      <div className="lg:w-2/4 mx-auto w-full">
        <div className="grid grid-cols-2">
          {filtered.map((f, i) => (
            <Dana dana={f} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProdukByCategory;
