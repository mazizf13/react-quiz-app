import React from "react";

const Start = ({ setDisplay }) => {
  return (
    <div className="flex flex-col gap-5 font-urbanist items-center h-full justify-center p-4">
      <div className="font-urbanist text-primary text-[8vw] sm:text-[10vw] md:text-[120px] text-center">
        REACT QUIZ APP
      </div>
      <div
        onClick={() => setDisplay("question")}
        className="bg-dark border-primary border-[6px] text-[6vw] sm:text-[6vw] md:text-[48px] px-5 text-primary rounded-xl hover:scale-110 hover:text-white hover:border-white cursor-pointer"
      >
        START
      </div>
      <div className="text-primary text-[4vw] sm:text-[3vw] md:text-[24px] text-center">
        Knowledge is power, <br /> test yours with our quiz!
      </div>
    </div>
  );
};

export default Start;
