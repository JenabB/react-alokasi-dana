import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { useNavigate } from "react-router-dom";
import { AppBar } from "components/common";

const TemplateDetail = () => {
  const { selectedTemplateDetail, getSemuaProduk } = useContext(GlobalContext);

  const navigate = useNavigate();

  const item = selectedTemplateDetail;

  const categoryColor = (category) => {
    if (category === "pribadi") return "bg-pribadi";
    if (category === "umum") return "bg-umum";
    if (category === "keluarga") return "bg-keluarga";
    if (category === "tabungan") return "bg-tabungan";
    if (category === "hiburan") return "bg-hiburan";
    if (category === "asmara") return "bg-asmara";
    if (category === "pendidikan") return "bg-pendidikan";
    if (category === "kesehatan") return "bg-kesehatan";
    if (category === "pembangunan") return "bg-pembangunan";
    if (category === "makanan") return "bg-makanan";
    if (category === "ibadah") return "bg-ibadah";
    if (category === "estetika") return "bg-estetika";
    if (category === "cicilan") return "bg-cicilan";
    if (category === "tagihan") return "bg-tagihan";

    return "bg-primary";
  };

  const handleClick = (item) => {
    getSemuaProduk(item.items);
    navigate("/create");
  };

  return (
    <div>
      <AppBar title="template detail" isBack={true} />
      <div className="pb-40 mx-2 mt-4">
        <h1 className="text-center font-bold">{item.name}</h1>
        <div className="grid lg:grid-cols-4">
          {item.items.map((el) => (
            <div className=" bg-white px-4 py-2 m-3">
              <h1>{el.nama}</h1>
              <h2
                className={`inline-block px-3 py-1 rounded-lg text-white my-2 ${categoryColor(
                  el.category
                )} text-xs`}
              >
                {el.category}
              </h2>
              <p>{el.harga}</p>
            </div>
          ))}
        </div>
        <div className="my-8 text-center">
          <button
            className="bg-primary px-2 py-1 text-white rounded-md"
            onClick={() => handleClick(item)}
          >
            Select this template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail;
