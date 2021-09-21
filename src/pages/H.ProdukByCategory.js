import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import Dana from "../components/danaDetail/D.Dana";
const ProdukByCategory = (props) => {
  const kategori = props.match.params.kategori;

  const { semuaProduk } = useContext(GlobalContext);

  console.log("semua", semuaProduk);
  const filtered = semuaProduk.filter((x) => x.kategori === kategori);
  console.log("ya", filtered);
  return (
    <div>
      <Helmet>
        <title>{kategori}</title>
      </Helmet>
      <AppBarWithBackButton title={kategori} />
      <h1>Semua produk dalam {kategori}</h1>
      <div>
        {filtered.map((f, i) => (
          <Dana dana={f} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProdukByCategory;
