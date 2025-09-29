import React from "react";

const QuizCard = ({ title, imageUrl, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative w-64 h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300
        ${isActive ? "scale-105" : "hover:scale-105"}
      `}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`
        absolute inset-0 flex items-end justify-start p-6
        ${isActive ? "bg-black bg-opacity-50" : "bg-black bg-opacity-30"}
      `}
      >
        <span className="text-white font-bold text-3xl text-left drop-shadow-lg">
          {title}
        </span>
      </div>
    </div>
  );
};

export default QuizCard;
