import React, { useState, useEffect } from "react";

import "./Cards.scss";

const Cards = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    setNumbers(multiplyNumbers());
  }, []);

  const multiplyNumbers = () => {
    let myArr = Array(10)
      .fill()
      .map((a, i) => (a = i))
      .sort(() => Math.floor(Math.random() * 50));

    return myArr.map(x => (x + 6) * 9 + Math.floor(Math.random()));
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      [array[i], array[x]] = [array[x], array[i]];
    }
    return array;
  };

  const display = shuffleArray(numbers).map((num, index) => {
    return (
      <div key={index} className="card__item">
        <p>{num}</p>
      </div>
    );
  });

  const displayRepeat = shuffleArray(numbers).map((num, index) => {
    return (
      <div key={index} className="card__item">
        <p>{num}</p>
      </div>
    );
  });

  return (
    <div className="card__container">
      {display}
      {displayRepeat}
    </div>
  );
};

export default Cards;
