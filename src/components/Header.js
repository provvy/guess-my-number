import React from "react";
import Button from "./UI/Button";

const Header = ({ randomNumber, isCorrect, resetHandler }) => {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <Button onClick={resetHandler} version="again">
        Again!
      </Button>
      <div className="number">{!isCorrect ? "?" : randomNumber}</div>
    </header>
  );
};

export default Header;
