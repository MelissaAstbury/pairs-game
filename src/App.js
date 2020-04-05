import React from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="game__container">
        <Cards />
      </div>
    </React.Fragment>
  );
};

export default App;
