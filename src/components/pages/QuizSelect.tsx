import React from "react";
import QuizSubNav from "../QuizSubNav";
import QuizCards from "../QuizCard";

const QuizSelect = ({
  activeSubMenu,
  setActiveSubMenu,
  startQuiz,
  setShowAlert,
}) => {
  return (
    <div
      className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-6xl mx-auto my-6 max-h-10x1 flex flex-col items-center"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <QuizSubNav activeTest={activeSubMenu} setActiveTest={setActiveSubMenu} />
      <QuizCards
        activeTest={activeSubMenu}
        startQuiz={startQuiz}
        setShowAlert={setShowAlert}
      />
    </div>
  );
};

export default QuizSelect;
