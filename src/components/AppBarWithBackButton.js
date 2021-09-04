import React from "react";
import { useHistory } from "react-router-dom";

const AppBarWithBackButton = () => {
  let history = useHistory();

  //kembali ke page sebelumnya
  const goBack = () => {
    history.goBack();
  };

  return (
    <nav className="bg-green-800 flex justify-between p-4 text-center text-white">
      <button className="material-icons md-24" onClick={goBack}>
        arrow_back
      </button>
      <div></div>
      <div></div>
    </nav>
  );
};

export default AppBarWithBackButton;
