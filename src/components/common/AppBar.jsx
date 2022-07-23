import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const AppBar = ({ title, isBack }) => {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-primary flex justify-between p-4 text-center text-white">
      {isBack ? (
        <button className="material-icons md-24" onClick={goBack}>
          arrow_back
        </button>
      ) : (
        <div></div>
      )}
      <div>{title}</div>
      <div></div>
    </nav>
  );
};

AppBar.propTypes = {
  title: PropTypes.string,
  isBack: PropTypes.bool,
};

export default AppBar;
