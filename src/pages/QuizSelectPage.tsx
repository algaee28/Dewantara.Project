// src/pages/QuizSelectPage.tsx
import { FC, useState } from 'react'; // IMPORT 'useState' telah ditambahkan
import { Info } from 'lucide-react';
import NavMenu from '../components/UI/NavMenu';
import QuizCard from '../components/UI/QuizCard';
import { Mode, ActiveTest } from '../App'; 

// Definisikan komponen yang relevan di sini jika belum diimpor
const ComingSoonAlert: FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
    <div className="bg-white bg-opacity-10 p-8 rounded-2xl text-center text-white" onClick={(e) => e.stopPropagation()}>
      <Info className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2">Segera Hadir!</h3>
      <p>Fitur ini sedang dalam pengembangan.</p>
    </div>
  </div>
);

const QuizSubNav: FC<{ activeTest: ActiveTest, setActiveTest: (test: ActiveTest) => void }> = ({ activeTest, setActiveTest }) => (
    <div className="px-2 py-2 rounded-2xl border border-white border-opacity-30 shadow-lg text-white mb-8 flex flex-wrap justify-center gap-2" style={{ background: "rgba(0, 0, 0, 0.2)", backdropFilter: "blur(10px)" }}>
        {/* DITAMBAHKAN 'perbankan' */}
        {(["fundamental", "ekonomi", "english", "perbankan"] as const).map((test) => (
            <button key={test} onClick={() => setActiveTest(test)} className={`px-4 py-2 text-sm sm:px-6 sm:py-3 mx-1 rounded-xl sm:text-lg transition-all duration-300 ${activeTest === test ? "font-bold" : "font-normal hover:bg-white hover:bg-opacity-5"}`}>
                {test.charAt(0).toUpperCase() + test.slice(1)}
            </button>
        ))}
    </div>
);

interface QuizSelectPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  activeSubMenu: ActiveTest;
  setActiveSubMenu: (submenu: ActiveTest) => void;
  startQuiz: (count: number, type: string, time: number | null) => void;
  showAlert: boolean;
  setShowAlert: (show: boolean) => void;
}

const QuizSelectPage: FC<QuizSelectPageProps> = ({ activeMenu, setMode, setActiveMenu, activeSubMenu, setActiveSubMenu, startQuiz, showAlert, setShowAlert }) => {
    
    // STATE BARU: Untuk menyimpan pilihan user
    const [selectedCount, setSelectedCount] = useState(20);
    const [selectedTime, setSelectedTime] = useState(15); // dalam menit (0 = Tanpa Batas)

    // OPSI PILIHAN
    const questionOptions = [10, 20, 30, 50, 100];
    const timeOptions = [0, 10, 15, 30, 45, 60]; // 0 untuk Tanpa Batas Waktu

    // Gradient yang digunakan (contoh)
    const deepBlueGradient = "radial-gradient(circle at 70% 50%, rgba(29, 78, 216, 0.6), transparent 70%), linear-gradient(135deg, #0a0a1a, #201c2e)";
    const lightBlueGradient = "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.7), transparent 60%), linear-gradient(135deg, #0f0a0a, #1a2333)";
    const lightEnglishGradient = "radial-gradient(circle at 70% 40%, rgba(255,218,185,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2b1f1a)";
    const deepEnglishGradient = "radial-gradient(circle at 60% 30%, rgba(107,176,255,0.6), transparent 70%), linear-gradient(135deg, #0a0a1a, #1a2333)";


    const allCards: Record<ActiveTest, { type: string; title: string; desc: string; gradient: string }[]> = {
        fundamental: [
          { type: "logika", title: "Logic", desc: "Analitis & Silogisme", gradient: "radial-gradient(circle at 30% 30%, rgba(255,150,100,0.7), transparent 70%), linear-gradient(135deg, #0d0d0f, #2b0a0a)" },
          { type: "verbal", title: "Verbal", desc: "Sinonim & Antonim", gradient: "radial-gradient(circle at 70% 40%, rgba(255,220,180,0.6), transparent 70%), linear-gradient(135deg, #0a0f0f, #1a1f2e)" },
          { type: "figural", title: "Figural", desc: "Pola Gambar & Rotasi", gradient: "radial-gradient(circle at 40% 60%, rgba(134,239,172,0.6), transparent 65%), linear-gradient(135deg, #0a0f0d, #1a3325)" },
          { type: "numerik", title: "Numeric", desc: "Matriks", gradient: "radial-gradient(circle at 60% 30%, rgba(248,232,166,0.6), transparent 70%), linear-gradient(135deg, #0d0a0a, #2e291a)" },
          { type: "digitsymbol", title: "Digit Symbol", desc: "Coding Cepat Simbol-Angka", gradient: "radial-gradient(circle at 40% 70%, rgba(180,240,230,0.5), transparent 70%), linear-gradient(135deg, #0f0a0a, #1a1f2e)" },
        ],
        ekonomi: [
          { type: "ekonomi", title: "Economy", desc: "Teori & Kebijakan Umum", gradient: "radial-gradient(circle at 40% 30%, rgba(196,181,253,0.6), transparent 70%), linear-gradient(135deg, #0a0a1a, #201c2e)" },
          { type: "bank", title: "Banking", desc: "Prinsip Dasar Perbankan", gradient: "radial-gradient(circle at 70% 50%, rgba(255,107,107,0.6), transparent 70%), linear-gradient(135deg, #0a0a0a, #1f1c2b)" },
          { type: "akuntansi", title: "Accounting", desc: "Basic - advance accounting", gradient: "radial-gradient(circle at 50% 60%, rgba(255,200,200,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2a1f1f)" },
        ],
        english: [
          { type: "grammar", title: "Grammar", desc: "Tenses & Struktur Kalimat", gradient: deepEnglishGradient },
          { type: "structure", title: "Structure", desc: "Struktur Kalimat & Frasa", gradient: deepEnglishGradient }, // KUIS BARU
          { type: "expression", title: "Expression", desc: "Idiom & Penggunaan Bahasa", gradient: lightEnglishGradient }, // KUIS BARU
          { type: "reading", title: "Reading", desc: "Pemahaman Teks & Inferensi", gradient: lightEnglishGradient }, 
          { type: "vocab", title: "Vocabulary", desc: "Kosakata & Idiom", gradient: lightEnglishGradient },
        ],
        // KATEGORI PERBANKAN BARU
        perbankan: [
            { type: "Modul1", title: "Modul 1", desc: "Dasar & Kerangka Hukum BI", gradient: deepBlueGradient },
            { type: "Modul2", title: "Modul 2", desc: "Kebijakan Moneter, Inflasi, & Nilai Tukar", gradient: deepBlueGradient },
            { type: "Modul3", title: "Modul 3", desc: "Stabilitas Sistem Keuangan & Makroprudensial", gradient: deepBlueGradient },
            { type: "Modul4", title: "Modul 4", desc: "Sistem Pembayaran & Pengelolaan Uang Rupiah", gradient: deepBlueGradient },
            { type: "Modul5", title: "Modul 5", desc: "Blueprint & Program Strategis BI", gradient: lightBlueGradient },
            { type: "Modul6", title: "Modul 6", desc: "Hubungan Internasional & Isu Global", gradient: lightBlueGradient },
            { type: "Modul7", title: "Modul 7", desc: "Studi Kasus & Aplikasi Strategis BI", gradient: lightBlueGradient },
        ]
    };
    const cardsToRender = allCards[activeSubMenu] || [];

    return (
        <div className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/background1.jpeg')" }}>
            <div className="w-full flex justify-center py-4 sm:py-8">
                <NavMenu activeMenu={activeMenu} setMode={setMode} setActiveMenu={setActiveMenu} />
            </div>
            <div className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-6xl mx-auto my-6 flex flex-col items-center" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)" }}>
                
                <QuizSubNav activeTest={activeSubMenu} setActiveTest={setActiveSubMenu} />
                
                {/* INPUT PILIHAN SOAL DAN WAKTU (INI ADALAH FITUR YANG DICARI) */}
                <div className="flex flex-wrap justify-center gap-4 text-white w-full max-w-lg mx-auto mb-8">
                    <div className="flex flex-col">
                        <label className="text-sm mb-1 text-gray-300 font-semibold">Jumlah Soal</label>
                        <select 
                            value={selectedCount} 
                            onChange={(e) => setSelectedCount(Number(e.target.value))}
                            className="px-4 py-2 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 text-base appearance-none"
                            style={{ minWidth: '150px' }}
                        >
                            {questionOptions.map(count => (
                                <option key={count} value={count} className="bg-[#100c28] text-white">{count} Soal</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1 text-gray-300 font-semibold">Batas Waktu</label>
                        <select 
                            value={selectedTime} 
                            onChange={(e) => setSelectedTime(Number(e.target.value))}
                            className="px-4 py-2 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 text-base appearance-none"
                            style={{ minWidth: '150px' }}
                        >
                            {timeOptions.map(time => (
                                <option key={time} value={time} className="bg-[#100c28] text-white">
                                    {time === 0 ? 'Tanpa Batas' : `${time} Menit`}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* AKHIR INPUT PILIHAN */}

                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
                    {cardsToRender.map((card) => (
                        <QuizCard 
                            key={card.type} 
                            title={card.title} 
                            gradient={card.gradient} 
                            desc={card.desc} 
                            // LOGIKA BARU: Menggunakan state yang dipilih
                            onClick={() => startQuiz(
                                selectedCount, 
                                card.type, 
                                selectedTime > 0 ? selectedTime * 60 : null // Konversi menit ke detik, atau null
                            )} 
                        />
                    ))}
                </div>
            </div>
            {showAlert && <ComingSoonAlert onClose={() => setShowAlert(false)} />}
        </div>
    );
};

export default QuizSelectPage;