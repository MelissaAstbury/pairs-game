import React from "react";

import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="game__container">
        <p>game screen</p>
      </div>
    </React.Fragment>
  );
};

export default App;
