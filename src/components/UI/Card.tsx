// src/components/UI/Card.tsx

import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
  imageUrl: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ children, title, imageUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-64 h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-6">
        <span className="text-white font-bold text-3xl text-left drop-shadow-lg">
          {title}
        </span>
      </div>
      {children}
    </button>
  );
};

export default Card;