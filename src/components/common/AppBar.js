import React from "react";

//app bar
const AppBar = ({ title }) => {
  return (
    <nav className="bg-primary p-4 text-center text-white">
      <h1>{title}</h1>
    </nav>
  );
};

export default AppBar;
