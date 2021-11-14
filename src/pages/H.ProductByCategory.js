import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import AppBarWithBackButton from "components/AppBarWithBackButton";
import { GlobalContext } from "context/GlobalState";
import Dana from "components/danaDetail/D.Dana";
import { categoryHeader } from "utils/categoryClassName";

import { formatRp } from "utils/formatRp";
const ProductByCategory = (props) => {
  const category = props.match.params.category;

  const { totalProduk } = useContext(GlobalContext);
  const filtered = totalProduk.filter((x) => x.category === category);

  const semuaHarga = [];
  filtered.forEach((element) => {
    semuaHarga.push(parseInt(element.harga));
  });

  const totalHarga = semuaHarga.reduce((prev, cur) => prev + cur, 0);

  return (
    <div>
      <Helmet>
        <title>{category}</title>
      </Helmet>
      <AppBarWithBackButton title={category} />
      <div className={categoryHeader(category)}>
        <h1>
          <span className="font-bold text-lg">{formatRp(totalHarga)}</span>{" "}
          telah dialokasikan untuk {category}
        </h1>
        <h1>
          Terdapat
          <span className="font-bold text-lg"> {filtered.length} </span>produk
          dalam kategori
        </h1>
      </div>

      <div className="lg:w-2/4 mx-auto w-full">
        <div className="grid">
          {filtered.map((f, i) => (
            <Dana dana={f} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;
