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
      <h1>{item.name}</h1>
      {item.items.map((el) => (
        <div className="shadow-lg">
          <h1>{el.nama}</h1>
          <h2>{el.category}</h2>
          <p>{el.harga}</p>
        </div>
      ))}
      <button onClick={() => handleClick(item)}>Select this template</button>
    </div>
  );
};

export default TemplateDetail;
