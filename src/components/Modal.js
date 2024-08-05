import React from "react";
import { X } from "lucide-react";

const Modal = ({ showModal, handleClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-primary p-4 sm:p-6 rounded-lg shadow-lg relative border-2 sm:border-4 border-white max-w-xs sm:max-w-md w-full">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
          Information
        </h2>
        <p className="mb-2 sm:mb-4">
          Welcome to the React Quiz App! This application allows you to test
          your knowledge with a variety of quiz questions. Challenge yourself
          and see how much you can score. Remember to review your answers after
          each quiz to learn and improve. Have fun!
        </p>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
