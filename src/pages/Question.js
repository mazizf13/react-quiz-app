import React from "react";
import questions from "../data/questions";

const Question = ({
  answer,
  index,
  setAnswer,
  setDisplay,
  setScore,
  handleNext,
  handlePrev,
}) => {
  const handleAnswer = (key, num) => {
    setAnswer({ ...answer, [num]: key });
  };

  const handleSubmit = () => {
    let result = 0;
    questions.forEach((q, i) => {
      if (q.answer === answer[i + 1]) {
        result += 1;
      }
    });

    setScore({
      score: (result / questions.length) * 100,
      true: result,
      false: questions.length - result,
    });

    setDisplay("score");
  };

  return (
    <div className="h-full relative p-4 sm:p-8 lg:p-[54px] font-urbanist flex flex-col gap-4 sm:gap-8 lg:gap-[54px]">
      <div className="flex text-primary text-xl sm:text-2xl lg:text-[32px] justify-center text-center">
        Question {index + 1} : {questions[index].question}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 lg:gap-x-[142px] sm:gap-y-6 lg:gap-y-[42px] mx-4 sm:mx-6 lg:mx-[20px]">
        {Object.entries(questions[index].options).map(([key, val]) => (
          <div
            key={key}
            onClick={() => handleAnswer(key, index + 1)}
            className={`text-md sm:text-lg lg:text-[20px] flex items-center p-4 cursor-pointer border-solid border-4 rounded-lg lg:rounded-[20px] ${
              answer[index + 1] === key
                ? "bg-primary text-dark border-dark"
                : "bg-dark text-primary hover:bg-primary hover:text-dark hover:border-white"
            }`}
          >
            {key}. {val}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 lg:bottom-[60px] right-4 lg:right-[54px] cursor-pointer flex justify-end mx-4 sm:mx-6 lg:mx-[20px] gap-3 sm:gap-4 lg:gap-5">
        {index !== 0 && (
          <svg
            onClick={handlePrev}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 72 73"
            className="bg-dark rounded-full border-solid border-4 lg:border-[6px] border-primary fill-primary hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white"
            fill="#EAB2A0"
          >
            <path d="M58.5 32.75H22.5L31.1625 24.0875C31.9013 23.3488 32.25 22.4675 32.25 21.5C32.25 19.655 30.7256 17.75 28.5 17.75C27.5044 17.75 26.6362 18.1119 25.9125 18.8375L10.9912 33.7588C10.3762 34.3738 9.75 35.1331 9.75 36.5C9.75 37.8669 10.2731 38.525 10.9612 39.2131L25.9125 54.1625C26.6362 54.8881 27.5044 55.25 28.5 55.25C30.7275 55.25 32.25 53.345 32.25 51.5C32.25 50.5325 31.9013 49.6513 31.1625 48.9125L22.5 40.25H58.5C60.57 40.25 62.25 38.57 62.25 36.5C62.25 34.43 60.57 32.75 58.5 32.75Z" />
          </svg>
        )}
        {index + 1 !== questions.length && (
          <svg
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 72 73"
            className="bg-dark rounded-full border-solid border-4 lg:border-[6px] border-primary fill-primary hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white"
            fill="#EAB2A0"
          >
            <path d="M13.5 40.25H49.5L40.8375 48.9125C40.0987 49.6512 39.75 50.5325 39.75 51.5C39.75 53.345 41.2744 55.25 43.5 55.25C44.4956 55.25 45.3638 54.8881 46.0875 54.1625L61.0088 39.2412C61.6238 38.6262 62.25 37.8669 62.25 36.5C62.25 35.1331 61.7269 34.475 61.0388 33.7869L46.0875 18.8375C45.3638 18.1119 44.4956 17.75 43.5 17.75C41.2725 17.75 39.75 19.655 39.75 21.5C39.75 22.4675 40.0987 23.3487 40.8375 24.0875L49.5 32.75H13.5C11.43 32.75 9.75 34.43 9.75 36.5C9.75 38.57 11.43 40.25 13.5 40.25Z" />
          </svg>
        )}
        {index + 1 === questions.length && (
          <div
            onClick={handleSubmit}
            className="text-xl sm:text-2xl lg:text-[36px] bg-dark flex items-center p-2 sm:p-3 lg:p-4 text-primary px-4 border-4 lg:border-[6px] border-primary hover:scale-110 hover:text-white hover:border-white"
          >
            Finish
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
