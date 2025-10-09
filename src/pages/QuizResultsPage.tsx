import { FC } from 'react';
import { Mode, Question } from '../App'; 
// Import ikon yang dibutuhkan
import { Trophy, Clock, Home, RefreshCw, Loader2 } from 'lucide-react'; 

// Interface untuk data ringkasan per kategori
interface SummaryItem {
    type: string;
    correct: number;
    total: number;
}

// Interface untuk Props komponen ini
interface QuizResultsPageProps {
    questions: Question[];
    userAnswers: Record<number, string>; // {index: "A" | "B" | "C" | "D" | "E"}
    currentQuizType: string;
    timeLimit: number | null;
    timeRemaining: number | null;
    startTime: number | null;
    calculateScore: () => number;
    getScoreCategory: (score: number, total: number) => { category: string, icon: string };
    startQuiz: (questionCount: number, quizType: string, timeLimit: number | null) => void;
    setMode: (mode: Mode) => void;
    setActiveMenu: (menu: Mode) => void;
}

const QuizResultsPage: FC<QuizResultsPageProps> = ({
    questions,
    userAnswers,
    currentQuizType,
    timeLimit,
    timeRemaining,
    startTime,
    calculateScore,
    getScoreCategory,
    startQuiz,
    setMode,
    setActiveMenu,
}) => {

    const score = calculateScore();
    const { category, icon } = getScoreCategory(score, questions.length);
    // Hitung total waktu yang digunakan (dalam ms), atau 0 jika belum ada startTime
    const totalTimeMs = startTime ? Date.now() - startTime : 0;
    
    // Helper untuk memformat waktu (diambil dari QuizInProgressPage)
    const formatTime = (seconds: number | null) => {
        if (seconds === null) return <Loader2 className="animate-spin w-4 h-4 inline" />;
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // --- LOGIKA PERHITUNGAN PER KATEGORI (Seperti yang Anda berikan) ---
    const calculateTypeScore = (typeFilter: (type: string) => boolean) => {
        let correct = 0;
        let total = 0;

        questions.forEach((q, questionIndex) => {
            if (typeFilter(q.type.toLowerCase())) {
                total++;
                // Periksa apakah jawaban pengguna (dari userAnswers) sama dengan jawaban benar (q.correct)
                if (userAnswers[questionIndex] === q.correct) {
                    correct++;
                }
            }
        });
        return { correct, total };
    };

    const verbalScore = calculateTypeScore((type) => type.includes("verbal"));
    const numerikScore = calculateTypeScore((type) => type.includes("numerik") || type.includes("angka")); // Tambahkan "angka" untuk numerik
    const logikaScore = calculateTypeScore(
        (type) =>
            type.includes("logika") ||
            type.includes("logic") ||
            type.includes("analitis")
    );
    const figuralScore = calculateTypeScore((type) => type.includes("figural") || type.includes("gambar")); // Tambahkan "gambar" untuk figural
    const grammarScore = calculateTypeScore((type) => type.includes("grammar"));
    const readingScore = calculateTypeScore((type) => type.includes("reading"));
    const vocabScore = calculateTypeScore((type) => type.includes("vocab"));
    const ekonomiScore = calculateTypeScore((type) => type.includes("ekonomi"));
    const bankScore = calculateTypeScore((type) => type.includes("bank"));
    const akuntansiScore = calculateTypeScore((type) => type.includes("akuntansi"));

    let summaryData: SummaryItem[] = [];

    // Logika penentuan Summary Data berdasarkan tipe kuis
    if (currentQuizType === "tpd_simulasi" || currentQuizType === "campuran") {
        summaryData = [
            { type: "Verbal", ...verbalScore },
            { type: "Numerik", ...numerikScore },
            { type: "Logika", ...logikaScore },
            { type: "Figural", ...figuralScore },
        ].filter((item) => item.total > 0);
    } else if (currentQuizType === "english_simulasi") {
        summaryData = [
            { type: "Grammar", ...grammarScore },
            { type: "Reading", ...readingScore },
            { type: "Vocabulary", ...vocabScore },
        ].filter((item) => item.total > 0);
    } else if (currentQuizType === "ekonomi_simulasi" || currentQuizType === "ekonomi") {
        summaryData = [{ type: "Ekonomi", ...ekonomiScore }].filter(
            (item) => item.total > 0
        );
    } else if (currentQuizType === "akuntansi_simulasi" || currentQuizType === "akuntansi") {
        summaryData = [{ type: "Akuntansi", ...akuntansiScore }].filter(
            (item) => item.total > 0
        );
    } else if (currentQuizType === "bank_simulasi" || currentQuizType === "bank") {
        summaryData = [{ type: "Bank", ...bankScore }].filter(
            (item) => item.total > 0
        );
    }

    // Tampilkan nama kuis untuk display
    const getQuizTypeDisplay = () => {
        const typeMap: Record<string, string> = {
            logika: "Fundamental - Logic",
            verbal: "Fundamental - Verbal",
            figural: "Fundamental - Figural",
            numerik: "Fundamental - Numeric",
            grammar: "English - Grammar",
            reading: "English - Reading",
            vocab: "English - Vocabulary",
            ekonomi: "Ekonomi - General",
            bank: "Perbankan",
            akuntansi: "Akuntansi",
            campuran: "TPD - Latihan Campuran",
            tpd_simulasi: "TPD - Simulasi",
            english_simulasi: "English - Simulasi",
            ekonomi_simulasi: "Ekonomi - Simulasi",
            akuntansi_simulasi: "Akuntansi - Simulasi",
            bank_simulasi: "Bank - Simulasi",
        };
        return typeMap[currentQuizType] || "Quiz";
    };
    
    // Tentukan waktu yang digunakan
    const timeUsedSeconds = timeLimit
        ? timeLimit - (timeRemaining || 0) // Jika timeLimit, hitung selisih
        : Math.floor(totalTimeMs / 1000); // Jika tidak, hitung waktu elapsed

    return (
        <div
            className="relative min-h-screen bg-cover bg-center text-white flex flex-col items-center py-4 sm:py-8"
            style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
        >
            {/* Header / Navigasi Simpel: Tombol Kembali ke Home */}
            <div className="w-full max-w-4xl px-4 sm:px-6 mb-4 flex justify-end">
                <button
                    onClick={() => {
                        setMode("home");
                        setActiveMenu("home");
                    }}
                    className="px-4 py-2 rounded-xl text-white font-regular transition-all duration-200 flex items-center justify-center gap-1 text-sm hover:bg-white/10"
                    style={{
                        background: "rgba(0, 0, 0, 0.2)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                >
                    <Home className="w-4 h-4" />
                    Home
                </button>
            </div>
            
            {/* Konten Utama Hasil Quiz */}
            <div className="max-w-4xl mx-auto p-4 sm:p-6 w-full">
                <div
                    className="p-4 sm:p-8 rounded-2xl border border-white border-opacity-30 shadow-lg"
                    style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    {/* Hasil dan Nama Quiz */}
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="text-4xl sm:text-6xl mb-4 text-yellow-400">🎉</div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                            Quiz Selesai!
                        </h2>
                        <p className="text-md sm:text-lg text-white opacity-80 mb-4 sm:mb-6">
                            {getQuizTypeDisplay()}
                        </p>
                    </div>

                    {/* Ringkasan Utama (Skor, Waktu, Kategori) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {/* 1. Skor Akhir */}
                        <div
                            className="p-4 sm:p-6 rounded-xl border border-white border-opacity-30 text-center"
                            style={{
                                background: "#903749",
                                backdropFilter: "blur(15px)",
                            }}
                        >
                            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-yellow-400" />
                            <p className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                                Skor Akhir
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                {score}/{questions.length}
                            </p>
                            <p className="text-xs sm:text-sm text-white opacity-80">
                                {Math.round((score / questions.length) * 100)}% benar
                            </p>
                        </div>

                        {/* 2. Total Waktu */}
                        <div
                            className="p-4 sm:p-6 rounded-xl border border-white border-opacity-30 text-center"
                            style={{
                                background: "#903749",
                                backdropFilter: "blur(15px)",
                            }}
                        >
                            <Clock className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-blue-400" />
                            <p className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                                Total Waktu
                            </p>
                            <p className="text-xl sm:text-2xl font-bold text-white mb-1">
                                {formatTime(timeUsedSeconds)}
                            </p>
                            <p className="text-xs sm:text-sm text-white opacity-80">
                                {timeLimit
                                    ? "Waktu tersisa: " + formatTime(timeRemaining || 0)
                                    : "Waktu bebas"}
                            </p>
                        </div>

                        {/* 3. Kategori */}
                        <div
                            className="p-4 sm:p-6 rounded-xl border border-white border-opacity-30 text-center"
                            style={{
                                background: "#903749",
                                backdropFilter: "blur(15px)",
                            }}
                        >
                            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
                            <p className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                                Kategori
                            </p>
                            <p className="text-lg sm:text-xl font-bold text-white mb-1">
                                {category}
                            </p>
                            <p className="text-xs sm:text-sm text-white opacity-80">
                                Tingkat pencapaian
                            </p>
                        </div>
                    </div>

                    {/* Hasil per Kategori Soal (Hanya tampil jika ada lebih dari 1 kategori) */}
                    {summaryData.length > 1 && (
                        <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white text-center">
                                Hasil per Kategori Soal
                            </h3>
                            <div
                                className={`grid gap-4 ${
                                    summaryData.length === 3
                                        ? "grid-cols-3"
                                        : summaryData.length === 4
                                            ? "grid-cols-2 sm:grid-cols-4" // Sesuaikan layout untuk 4 item
                                            : "grid-cols-2" // Default untuk 2 item (atau lainnya)
                                }`}
                            >
                                {summaryData.map(({ type, total, correct }) => {
                                    const percentage =
                                        total > 0 ? Math.round((correct / total) * 100) : 0;
                                    return (
                                        <div
                                            key={type}
                                            className="p-3 sm:p-4 rounded-xl border border-white border-opacity-20 text-center"
                                            style={{
                                                background: "rgba(0, 0, 0, 0.3)",
                                                backdropFilter: "blur(10px)",
                                            }}
                                        >
                                            <p className="font-semibold text-white text-xs sm:text-sm mb-1 sm:mb-2">
                                                {type}
                                            </p>
                                            <p className="text-xl sm:text-2xl font-bold text-white mb-1">
                                                {correct}/{total}
                                            </p>
                                            <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5 sm:h-2 mb-1.5 sm:mb-2">
                                                <div
                                                    className="bg-green-400 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-xs text-white opacity-80">
                                                {percentage}% benar
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Tombol Aksi */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => {
                                setMode("home");
                                setActiveMenu("home");
                            }}
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
                            style={{
                                background: "rgba(0, 0, 0, 0.4)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <Home className="w-5 h-5" />
                            Kembali ke Menu
                        </button>

                        <button
                            onClick={() => {
                                // Logika untuk menentukan kuis baru (diambil dari App.tsx Anda)
                                let quizTypes = ["verbal", "logika", "figural", "numerik"];
                                if (
                                    [
                                        "grammar",
                                        "reading",
                                        "vocab",
                                        "english_simulasi",
                                    ].includes(currentQuizType)
                                ) {
                                    quizTypes = ["grammar", "reading", "vocab"];
                                } else if (
                                    ["ekonomi", "ekonomi_simulasi"].includes(currentQuizType)
                                ) {
                                    quizTypes = ["ekonomi"];
                                } else if (
                                    ["bank", "bank_simulasi"].includes(currentQuizType)
                                ) {
                                    quizTypes = ["bank"];
                                } else if (
                                    ["akuntansi", "akuntansi_simulasi"].includes(currentQuizType)
                                ) {
                                    quizTypes = ["akuntansi"];
                                }
                                
                                // Pilih tipe kuis acak dari grup yang sama
                                const randomType =
                                    quizTypes[Math.floor(Math.random() * quizTypes.length)];
                                    
                                // Start quiz: 15 soal, tipe acak, waktu non-limit (null)
                                startQuiz(15, randomType, null); 
                            }}
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
                            style={{
                                background: "#903749",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <RefreshCw className="w-5 h-5" />
                            Soal Baru
                        </button>
                        
                        {/* Tombol Simulasi (Hanya tampil jika bukan simulasi dan sesuai grup) */}
                        {!["tpd_simulasi", "english_simulasi", "ekonomi_simulasi", "akuntansi_simulasi", "bank_simulasi"].includes(currentQuizType) && (
                            <>
                                {/* Simulasi Fundamental (Tampil jika quiz saat ini bukan English, Ekonomi, Akuntansi, atau Bank) */}
                                {!["grammar", "reading", "vocab", "ekonomi", "akuntansi", "bank"].includes(currentQuizType) && (
                                    <button
                                        onClick={() => startQuiz(50, "tpd_simulasi", 30 * 60)}
                                        className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
                                        style={{
                                            background: "#903749",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <Trophy className="w-5 h-5" />
                                        Simulasi Fundamental
                                    </button>
                                )}
                                {/* Simulasi English (Tampil jika quiz saat ini adalah English) */}
                                {["grammar", "reading", "vocab"].includes(currentQuizType) && (
                                    <button
                                        onClick={() => startQuiz(40, "english_simulasi", 30 * 60)}
                                        className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
                                        style={{
                                            background: "#903749",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <Trophy className="w-5 h-5" />
                                        Simulasi English
                                    </button>
                                )}
                                {/* Simulasi Ekonomi (Tampil jika quiz saat ini adalah Ekonomi) */}
                                {["ekonomi"].includes(currentQuizType) && (
                                    <button
                                        onClick={() => startQuiz(30, "ekonomi_simulasi", 25 * 60)}
                                        className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
                                        style={{
                                            background: "#903749",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <Trophy className="w-5 h-5" />
                                        Simulasi Ekonomi
                                    </button>
                                )}
                                {/* Simulasi Perbankan (Tampil jika quiz saat ini adalah Bank) */}
                                {["bank"].includes(currentQuizType) && (
                                    <button
                                        onClick={() => startQuiz(50, "bank_simulasi", 25 * 60)}
                                        className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
                                        style={{
                                            background: "#903749",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <Trophy className="w-5 h-5" />
                                        Simulasi Perbankan
                                    </button>
                                )}
                                {/* Simulasi Akuntansi (Tampil jika quiz saat ini adalah Akuntansi) */}
                                {["akuntansi"].includes(currentQuizType) && (
                                    <button
                                        onClick={() => startQuiz(50, "akuntansi_simulasi", 25 * 60)}
                                        className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
                                        style={{
                                            background: "#903749",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                        }}
                                    >
                                        <Trophy className="w-5 h-5" />
                                        Simulasi Akuntansi
                                    </button>
                                )}
                            </>
                        )}
                    </div>

                    {/* Insight Performa */}
                    <div
                        className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl border border-white border-opacity-20"
                        style={{
                            background: "rgba(0, 0, 0, 0.2)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <h4 className="font-semibold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                            Insight Performa:
                        </h4>
                        <div className="text-white opacity-90 space-y-2 text-sm sm:text-base">
                            {score === questions.length && (
                                <p>
                                    Sempurna! Anda berhasil menjawab semua soal dengan benar!
                                </p>
                            )}
                            {score >= questions.length * 0.8 &&
                                score < questions.length && (
                                    <p>
                                        Performa sangat baik! Terus pertahankan latihan rutin.
                                    </p>
                                )}
                            {score >= questions.length * 0.65 &&
                                score < questions.length * 0.8 && (
                                    <p>
                                        Performa baik. Fokus pada area yang masih perlu diperbaiki.
                                    </p>
                                )}
                            {score >= questions.length * 0.5 &&
                                score < questions.length * 0.65 && (
                                    <p>
                                        Performa cukup. Perbanyak latihan untuk hasil yang lebih optimal.
                                    </p>
                                )}
                            {score < questions.length * 0.5 && (
                                <p>
                                    Perlu latihan lebih intensif. Jangan menyerah, terus berlatih!
                                </p>
                            )}
                            {timeLimit && timeRemaining !== null && timeRemaining > 0 && (
                                <p>
                                    Bagus! Anda menyelesaikan quiz dengan waktu tersisa{" "}
                                    {formatTime(timeRemaining)}.
                                </p>
                            )}
                            {timeLimit && timeRemaining === 0 && (
                                <p>
                                    Quiz selesai tepat waktu. Latih kecepatan untuk hasil yang lebih optimal.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizResultsPage;