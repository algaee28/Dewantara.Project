import { FC } from "react";
import QuizSubNav from "../../App"; // Mengarah ke App.tsx untuk komponennya
import QuizCard from "../../App";   // Mengarah ke App.tsx untuk komponennya

type ActiveTest = "fundamental" | "ekonomi" | "english";

interface QuizSelectProps {
  activeSubMenu: ActiveTest;
  setActiveSubMenu: (submenu: ActiveTest) => void;
  startQuiz: (count: number, type: string, time: number | null) => void;
  setShowAlert: (show: boolean) => void;
}

const QuizSelect: FC<QuizSelectProps> = ({
  activeSubMenu,
  setActiveSubMenu,
  startQuiz,
  setShowAlert,
}) => {
  // Logika untuk menampilkan kartu kuis bisa dipindahkan ke sini jika diperlukan
  // Untuk saat ini, kita biarkan kosong karena logika utama sudah ada di App.tsx
  
  return (
    <div
      className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-6xl mx-auto my-6 flex flex-col items-center"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      {/* Komponen QuizSubNav dan QuizCards sudah dirender di dalam QuizSelectPage di App.tsx */}
      {/* Jadi, file ini mungkin tidak perlu merender apa pun jika dipanggil di dalam struktur App.tsx */}
    </div>
  );
};

export default QuizSelect;