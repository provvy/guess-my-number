import React from "react";
import Message from "./UI/Message";
import Span from "./UI/Span";

const RightSection = ({ score, highScore, message }) => {
  return (
    <section className="right">
      <Message className="message">
        {score === 0 ? "You lost, click 'Again' to start a new game!" : message}
      </Message>
      <p className="label-score">
        💯 Score: <Span className="score">{score}</Span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <Span className="highscore">{highScore}</Span>
      </p>
    </section>
  );
};

export default RightSection;
