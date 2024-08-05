import React from "react";

const Score = ({ score, setDisplay, setIndex }) => {
  const handleClick = () => {
    setDisplay("review");
    setIndex(0);
  };

  return (
    <div className="h-full p-4 flex flex-col gap-4 items-center justify-center">
      <div className="text-primary text-center font-urbanist text-[5vw] sm:text-[8vw] md:text-[100px]">
        YOUR SCORE
      </div>
      <div className="rounded-full w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[280px] md:h-[280px] border-[6px] border-primary font-urbanist text-[8vw] sm:text-[10vw] md:text-[120px] flex justify-center items-center text-primary">
        {Math.floor(score.score)}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-[100px] font-urbanist text-primary text-[5vw] sm:text-[28px]">
        <div>True: {score.true}</div>
        <div>False: {score.false}</div>
      </div>
      <div
        onClick={handleClick}
        className="flex mt-4 font-urbanist text-[5vw] sm:text-[32px] bg-dark cursor-pointer px-4 text-primary border-pastelpink border-[6px] hover:scale-110 hover:text-white hover:border-white"
      >
        Review Answer
      </div>
    </div>
  );
};

export default Score;
