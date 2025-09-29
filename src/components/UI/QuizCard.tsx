import { FC } from 'react';

interface QuizCardProps {
  title: string;
  gradient?: string;
  desc: string;
  onClick: () => void;
}

const QuizCard: FC<QuizCardProps> = ({ title, gradient, desc, onClick }) => (
  <button
    onClick={onClick}
    className="transition-transform hover:scale-105 w-36 sm:w-46 xl:w-56 flex-shrink-0"
  >
    <div
      className="w-full h-auto aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl flex flex-col justify-end p-3 sm:p-5"
      style={{
        background: gradient || "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-10"
        style={{ backdropFilter: "blur(5px)" }}
      ></div>
      <div className="relative z-10 text-left">
        <h3 className="text-base sm:text-xl font-semibold mb-0.5 leading-tight text-white">
          {title}
        </h3>
        <p className="text-xs sm:text-sm font-light opacity-90 leading-tight text-white">
          {desc}
        </p>
      </div>
    </div>
  </button>
);

export default QuizCard;