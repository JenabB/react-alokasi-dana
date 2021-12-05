import React from "react";
import Navigation from "Navigation";
import BottomNavigation from "BottomNavigation";
//context
import { GlobalProvider } from "context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <BottomNavigation />
    </GlobalProvider>
  );
};

export default App;
