import React from "react";
import { formatRp } from "utils/formatRp";
import PropTypes from "prop-types";

const Summary = ({ totalPrice, length }) => {
  return (
    <div>
      <div className="bg-white shadow-sm rounded p-4 my-2">
        <h1 className="text-primaryLight">total: {formatRp(totalPrice)}</h1>
        <h2>{length} hal telah direncanakan</h2>
      </div>
    </div>
  );
};

Summary.propTypes = {
  totalPrice: PropTypes.number,
  length: PropTypes.number,
};

export default Summary;
