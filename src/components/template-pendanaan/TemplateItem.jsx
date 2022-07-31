import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "context/GlobalState";

const TemplateItem = ({ item }) => {
  const { setToSelectedTemplateDetail } = useContext(GlobalContext);

  const handleToDetail = (item) => {
    setToSelectedTemplateDetail(item);
  };

  return (
    <div className="m-4">
      <Link to={`${item.templateId}`} onClick={() => handleToDetail(item)}>
        <div className="bg-white shadow-sm block p-4">
          <h1 className="font-bold">{item.name}</h1>
          <p>{item.items.length} Pendanaan</p>
        </div>
      </Link>
      <div className="bg-primary text-white rounded-md text-center shadow-sm block p-4 mt-4">
        <button className="">Use this template</button>
      </div>
    </div>
  );
};

export default TemplateItem;
