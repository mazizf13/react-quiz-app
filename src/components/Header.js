const Header = ({ display }) => {
  return (
    <div className="bg-dark w-full flex justify-between items-center px-4 py-2 sm:px-8 sm:py-4 text-primary font-urbanist h-[60px] sm:h-[80px]">
      {display !== "start" && (
        <div className="text-lg sm:text-2xl md:text-4xl">QUIZ APP</div>
      )}
    </div>
  );
};

export default Header;
