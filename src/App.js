import React, { useState } from "react";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Main from "./components/UI/Main";

function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );
  const [userNumber, setUserNumber] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState("20");
  const [highScore, setHighScore] = useState("0");
  const [message, setMessage] = useState("Start guessing...");
  const inputChangeHandler = (num) => {
    setUserNumber(num);
  };
  const checkHandler = () => {
    if (userNumber && userNumber >= 1 && userNumber <= 20) {
      if (userNumber < randomNumber) {
        setIsCorrect(false);
        setScore((score) => score - 1);
        setMessage("Too low... Try again!");
      } else if (userNumber > randomNumber) {
        setIsCorrect(false);
        setScore((score) => score - 1);
        setMessage("Too high... Try again!");
      } else {
        setIsCorrect(true);
        setMessage("Yaaaass! That's it!");
        if (score > highScore) {
          setHighScore(score);
        }
      }
    } else {
      setMessage("Please insert a value between 1 and 20!");
    }
  };
  const resetHandler = () => {
    setRandomNumber(Math.floor(Math.random() * 20) + 1);
    setUserNumber("");
    setIsCorrect(false);
    setScore("20");
    setMessage("Start guessing...");
  };
  return (
    <div
      className={`wrapper ${isCorrect && "success"} ${score === 0 && "fail"}`}
    >
      <Header
        resetHandler={resetHandler}
        isCorrect={isCorrect}
        randomNumber={randomNumber}
      />
      <Main>
        <LeftSection
          userNumber={userNumber}
          inputChangeHandler={inputChangeHandler}
          score={score}
          checkHandler={checkHandler}
        />
        <RightSection score={score} highScore={highScore} message={message} />
      </Main>
    </div>
  );
}

export default App;
