import React from "react";
import propTypes from "prop-types";

const SortItem = ({ sortBy, handleSelectChange }) => {
  return (
    <div>
      <select value={sortBy} onChange={handleSelectChange}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="terdekat">Terdekat</option>
        <option value="terjauh">Terjauh</option>
        <option value="termahal">Termahal</option>
        <option value="termurah">Termurah</option>
      </select>
    </div>
  );
};

SortItem.propTypes = {
  sortBy: propTypes.string,
  handleSelectChange: propTypes.func,
};

export default SortItem;
