import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Start from "./pages/Start";
import Question from "./pages/Question";
import Score from "./pages/Score";
import Review from "./pages/Review";

function App() {
  const [display, setDisplay] = useState("start");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState({});
  const handlePrev = () => {
    setIndex((index) => index - 1);
  };

  const handleNext = () => {
    setIndex((index) => index + 1);
  };

  const handleStart = () => {
    setIndex(0);
    setAnswer({});
    setDisplay("start");
    setScore({});
  };

  return (
    <div className="h-screen flex flex-col">
      <Header display={display} />
      <div className="w-full bg-secondary flex-1">
        {display === "start" && <Start setDisplay={setDisplay} />}
        {display === "question" && (
          <Question
            index={index}
            handlePrev={handlePrev}
            handleNext={handleNext}
            answer={answer}
            setAnswer={setAnswer}
            setScore={setScore}
            setDisplay={setDisplay}
          />
        )}
        {display === "score" && (
          <Score score={score} setDisplay={setDisplay} setIndex={setIndex} />
        )}
        {display === "review" && (
          <Review
            index={index}
            answer={answer}
            setDisplay={setDisplay}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        )}
      </div>
      <Footer handleStart={handleStart} />
    </div>
  );
}

export default App;
