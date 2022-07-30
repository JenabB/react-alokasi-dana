import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "context/GlobalState";

const TemplateItem = ({ item }) => {
  const { setToSelectedTemplateDetail } = useContext(GlobalContext);

  const handleToDetail = (item) => {
    setToSelectedTemplateDetail(item);
  };

  return (
    <div>
      <Link to={`${item.templateId}`} onClick={() => handleToDetail(item)}>
        <div className="bg-white shadow-sm block p-4">
          <h1>{item.name}</h1>
          <p>{item.items.length} Pendanaan</p>
        </div>
      </Link>
      <button>Use this template</button>
    </div>
  );
};

export default TemplateItem;
