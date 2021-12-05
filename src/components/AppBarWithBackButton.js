import React from "react";
import { useNavigate } from "react-router-dom";

const AppBarWithBackButton = ({ title }) => {
  let navigate = useNavigate();

  //kembali ke page sebelumnya
  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-primary flex justify-between p-4 text-center text-white">
      <button className="material-icons md-24" onClick={goBack}>
        arrow_back
      </button>
      <div>{title}</div>
      <div></div>
    </nav>
  );
};

export default AppBarWithBackButton;
