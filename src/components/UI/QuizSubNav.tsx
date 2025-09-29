import React from 'react';

// Menentukan tipe data untuk props
interface QuizSubNavProps {
  activeTest: string;
  setActiveTest: (test: string) => void;
}

const QuizSubNav: React.FC<QuizSubNavProps> = ({ activeTest, setActiveTest }) => (
  <div
    className="px-2 py-2 rounded-2xl border border-white border-opacity-30 shadow-lg text-white mb-8 flex flex-wrap justify-center gap-2"
    style={{
      background: "rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(10px)",
    }}
  >
    {["fundamental", "ekonomi", "english"].map((test) => (
      <button
        key={test}
        onClick={() => setActiveTest(test)}
        className={`px-4 py-2 text-sm sm:px-6 sm:py-3 mx-1 rounded-xl sm:text-lg transition-all duration-300 ${
          activeTest === test
            ? "font-bold"
            : "font-normal hover:bg-white hover:bg-opacity-5"
        }`}
      >
        {test.charAt(0).toUpperCase() + test.slice(1)}
      </button>
    ))}
  </div>
);

export default QuizSubNav;