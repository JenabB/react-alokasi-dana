import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";
import Dana from "../components/danaDetail/D.Dana";

const ProductByCategory = (props) => {
  const category = props.match.params.category;

  const { totalProduk } = useContext(GlobalContext);
  const filtered = totalProduk.filter((x) => x.category === category);

  return (
    <div>
      <Helmet>
        <title>{category}</title>
      </Helmet>
      <AppBarWithBackButton title={category} />
      <div className="mt-10">
        <h1 className="text-center">
          {filtered.length} produk dalam kategori {category}
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
