import React from "react";
import Button from "./UI/Button";

const LeftSection = ({
  userNumber,
  inputChangeHandler,
  score,
  checkHandler,
}) => {
  return (
    <section className="left">
      <input
        value={userNumber}
        onChange={(e) => inputChangeHandler(e.target.value)}
        min="1"
        max="20"
        type="number"
        className="guess"
        required
      />
      <Button onClick={checkHandler} disabled={score === 0} version="check">
        Check!
      </Button>
    </section>
  );
};

export default LeftSection;
