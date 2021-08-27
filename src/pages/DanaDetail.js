import React, { useContext } from "react";

import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { GlobalContext } from "../context/GlobalState";

const DanaDetail = (props) => {
  return (
    <div>
      <AppBarWithBackButton />
      <h1>ini detail</h1>
    </div>
  );
};

export default DanaDetail;
