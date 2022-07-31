import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { useNavigate } from "react-router-dom";
import { AppBar } from "components/common";

const TemplateDetail = () => {
  const { selectedTemplateDetail, getSemuaProduk } = useContext(GlobalContext);

  const navigate = useNavigate();

  const item = selectedTemplateDetail;

  const handleClick = (item) => {
    getSemuaProduk(item.items);
    navigate("/create");
  };

  return (
    <div>
      <AppBar title="template detail" isBack={true} />
      <div className="pb-40 m-2">
        <h1>{item.name}</h1>
        {item.items.map((el) => (
          <div className="shadow-lg px-4 py-2">
            <h1>{el.nama}</h1>
            <h2>{el.category}</h2>
            <p>{el.harga}</p>
          </div>
        ))}
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
