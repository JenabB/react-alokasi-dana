import React from "react";
import Navigation from "./Navigation";
import { GlobalProvider } from "./context/GlobalState";
const App = () => {
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
};

export default App;
