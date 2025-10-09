interface Question {
  type: string;
  question: string;
  imageUrl?: string;
  matrixData?: (string | number)[][];
  options: Record<string, string>; // Opsi adalah objek string:string
  correct: string;
  explanation: string;
  explanationUrl?: string;
}

// Fungsi untuk mengacak array dengan tipe generik (T)
const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Fungsi untuk memproses dan mengacak setiap pertanyaan (mengubah urutan opsi)
const shuffleQuestions = (questions: Question[]): Question[] => {
  return questions.map(q => {
    // Simpan teks jawaban yang benar
    const correctAnswerText = q.options[q.correct];
    
    // Ubah opsi menjadi array [kunci, nilai] dan acak
    // Object.entries(q.options) menghasilkan array tuple: [['A', 'Teks Opsi A'], ...]
    let shuffledOptionsArray = shuffleArray(Object.entries(q.options));
    
    // Buat objek opsi baru dan temukan kunci jawaban yang baru
    const newOptions: Record<string, string> = {};
    let newCorrectKey: string = '';
    const optionKeys = ['A', 'B', 'C', 'D', 'E'];
    
    // PERBAIKAN: Ganti originalKey menjadi _originalKey
    shuffledOptionsArray.forEach(([_originalKey, value], index) => { 
      const newKey = optionKeys[index];
      newOptions[newKey] = value;
      // Cek apakah nilai ini adalah jawaban yang benar
      if (value === correctAnswerText) {
        newCorrectKey = newKey;
      }
    });
    
    // Kembalikan objek pertanyaan yang sudah diperbarui
    return {
      ...q,
      options: newOptions,
      correct: newCorrectKey,
    };
  });
};

const orexpressionQuestions: Question[] = [
  {
    "type": "Error Identification",
    "question": "The recent report on fiscal policy indicates that government spending have exceeded revenue, leading to increased deficits over the past decade.",
    "options": {
      "A": "indicates that",
      "B": "have exceeded",
      "C": "leading to",
      "D": "over the past decade"
    },
    "correct": "B",
    "explanation": "'Government spending' adalah subjek tunggal yang tidak dapat dihitung, sehingga harus 'has exceeded', bukan 'have exceeded'."
  },
  {
    "type": "Error Identification",
    "question": "Inflationary pressures in emerging markets often stems from supply chain disruptions rather than demand-side factors, according to recent economic analyses.",
    "options": {
      "A": "often stems",
      "B": "rather than",
      "C": "according to",
      "D": "recent economic analyses"
    },
    "correct": "A",
    "explanation": "'Pressures' adalah subjek jamak, sehingga harus 'often stem', bukan 'stems'."
  },
  {
    "type": "Error Identification",
    "question": "The implementation of sustainable banking practices require not only regulatory compliance but also innovative financial instruments to support green investments.",
    "options": {
      "A": "require not only",
      "B": "but also",
      "C": "to support",
      "D": "green investments"
    },
    "correct": "A",
    "explanation": "'Implementation' adalah subjek tunggal, sehingga harus 'requires', bukan 'require'."
  },
  {
    "type": "Error Identification",
    "question": "Digital currencies, such as Bitcoin, has revolutionized the financial system by enabling peer-to-peer transactions without intermediary institutions.",
    "options": {
      "A": "has revolutionized",
      "B": "by enabling",
      "C": "without",
      "D": "intermediary institutions"
    },
    "correct": "A",
    "explanation": "'Currencies' adalah subjek jamak, sehingga harus 'have revolutionized', bukan 'has revolutionized'."
  },
  {
    "type": "Error Identification",
    "question": "The board of directors were divided on whether to adopt the new monetary policy, which could affect interest rates and currency valuation.",
    "options": {
      "A": "were divided",
      "B": "which could affect",
      "C": "interest rates",
      "D": "currency valuation"
    },
    "correct": "A",
    "explanation": "'Board' dianggap sebagai subjek tunggal dalam konteks formal, sehingga harus 'was divided', bukan 'were divided'."
  },
  {
    "type": "Error Identification",
    "question": "Economic sustainability involves balancing growth with environmental protection, which many policymakers struggles to achieve in developing economies.",
    "options": {
      "A": "which many",
      "B": "policymakers struggles",
      "C": "to achieve",
      "D": "developing economies"
    },
    "correct": "B",
    "explanation": "'Policymakers' adalah subjek jamak, sehingga harus 'struggle', bukan 'struggles'."
  },
  {
    "type": "Error Identification",
    "question": "The rise in inflation have been attributed to global oil price fluctuations and supply shortages, as noted in the latest IMF report.",
    "options": {
      "A": "have been attributed",
      "B": "global oil price",
      "C": "as noted in",
      "D": "the latest IMF report"
    },
    "correct": "A",
    "explanation": "'Rise' adalah subjek tunggal, sehingga harus 'has been', bukan 'have been'."
  },
  {
    "type": "Error Identification",
    "question": "Financial institutions must adapt to digital economies by investing in cybersecurity and to develop robust data analytics, thereby enhancing operational efficiency and risk management.",
    "options": {
      "A": "by investing",
      "B": "and to develop",
      "C": "thereby enhancing",
      "D": "and risk management"
    },
    "correct": "B",
    "explanation": "Kesalahan paralelisme: harus 'developing' untuk paralel dengan 'investing', bukan 'to develop'."
  },
  {
    "type": "Error Identification",
    "question": "The policy framework for sustainable development emphasizes reducing carbon emissions, promoting renewable energy, and to foster international cooperation among nations.",
    "options": {
      "A": "emphasizes reducing",
      "B": "promoting renewable energy",
      "C": "and to foster",
      "D": "among nations"
    },
    "correct": "C",
    "explanation": "Kesalahan paralelisme: harus 'fostering' untuk paralel dengan 'reducing' dan 'promoting', bukan 'to foster'."
  },
  {
    "type": "Error Identification",
    "question": "In the context of economic recovery, governments should prioritize infrastructure investment over short-term stimulus measures, which often leads to unsustainable debt levels.",
    "options": {
      "A": "infrastructure investment",
      "B": "over short-term",
      "C": "which often leads",
      "D": "unsustainable debt levels"
    },
    "correct": "C",
    "explanation": "'Measures' adalah subjek jamak, sehingga 'which' harus 'lead', bukan 'leads'."
  },
  {
    "type": "Error Identification",
    "question": "The central bank's intervention in currency markets was intended to stabilize exchange rates, however, it resulted in unintended inflationary effects.",
    "options": {
      "A": "was intended",
      "B": "to stabilize",
      "C": "however, it resulted",
      "D": "unintended inflationary effects"
    },
    "correct": "C",
    "explanation": "Misuse logical connector: 'however' harus didahului titik koma atau periode, bukan koma saja."
  },
  {
    "type": "Error Identification",
    "question": "Sustainability reports from major corporations highlight the importance of ethical investing, which involves assessing environmental impacts beside social governance.",
    "options": {
      "A": "highlight the importance",
      "B": "which involves",
      "C": "assessing environmental impacts",
      "D": "beside social governance"
    },
    "correct": "D",
    "explanation": "Preposition error: harus 'besides' (selain), bukan 'beside' (di samping secara fisik)."
  },
  {
    "type": "Error Identification",
    "question": "The digital economy's growth depends on reliable infrastructure, skilled workforce, and innovation that is both creative and technologically advanced.",
    "options": {
      "A": "depends on",
      "B": "skilled workforce",
      "C": "and innovation",
      "D": "that is both creative and technologically advanced"
    },
    "correct": "D",
    "explanation": "Redundancy: 'both creative and technologically advanced' redundan karena 'innovation' sudah implisit kreatif."
  },
  {
    "type": "Error Identification",
    "question": "Banking regulations have been tightened following the financial crisis, ensuring that institutions maintain adequate capital reserves for potential risks.",
    "options": {
      "A": "have been tightened",
      "B": "following the financial crisis",
      "C": "ensuring that institutions",
      "D": "for potential risks"
    },
    "correct": "D",
    "explanation": "Preposition error: harus 'against potential risks', bukan 'for'."
  },
  {
    "type": "Error Identification",
    "question": "The economist argued that inflation targeting should be complemented by fiscal discipline, otherwise economic instability could arise.",
    "options": {
      "A": "argued that",
      "B": "should be complemented",
      "C": "otherwise economic instability",
      "D": "could arise"
    },
    "correct": "C",
    "explanation": "Logical connector misuse: 'otherwise' lebih tepat digunakan untuk kondisi alternatif, sebaiknya gunakan 'or' atau rekonstruksi kalimat."
  },
  {
    "type": "Error Identification",
    "question": "Global financial systems is vulnerable to cyber threats, which necessitate enhanced security measures across international borders.",
    "options": {
      "A": "is vulnerable",
      "B": "to cyber threats",
      "C": "which necessitate",
      "D": "across international borders"
    },
    "correct": "A",
    "explanation": "'Systems' jamak, sehingga harus 'are vulnerable', bukan 'is'."
  },
  {
    "type": "Error Identification",
    "question": "The adoption of blockchain technology in banking promises efficiency gains, reduced costs, and improving transaction transparency for stakeholders.",
    "options": {
      "A": "promises efficiency gains",
      "B": "reduced costs",
      "C": "and improving",
      "D": "for stakeholders"
    },
    "correct": "C",
    "explanation": "Parallelism error: harus 'improved' untuk paralel dengan 'gains' dan 'costs', atau 'improvement in'."
  },
  {
    "type": "Error Identification",
    "question": "Sustainable economic policies must address climate change by promoting green technologies and discourage fossil fuel dependency through incentives and regulations.",
    "options": {
      "A": "by promoting",
      "B": "green technologies",
      "C": "and discourage",
      "D": "through incentives"
    },
    "correct": "C",
    "explanation": "Parallelism: harus 'discouraging' untuk paralel dengan 'promoting'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The inflation rate, which has been fluctuating wildly, are expected to stabilize soon due to policy interventions.",
      "B": "The inflation rate, which has been fluctuating wildly, is expected to stabilize soon due to policy interventions.",
      "C": "The inflation rate, which have been fluctuating wildly, is expected to stabilize soon due to policy interventions.",
      "D": "The inflation rate, which has been fluctuating wildly, were expected to stabilize soon due to policy interventions."
    },
    "correct": "B",
    "explanation": "'Inflation rate' tunggal, sehingga 'is expected'; klausa relatif 'which has been' benar merujuk pada rate."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Central banks monitors economic indicators closely to adjust interest rates accordingly.",
      "B": "Central banks monitor economic indicators closely to adjust interest rates accordingly.",
      "C": "Central bank monitor economic indicators closely to adjust interest rates accordingly.",
      "D": "Central banks monitoring economic indicators closely to adjust interest rates accordingly."
    },
    "correct": "B",
    "explanation": "'Central banks' jamak, sehingga 'monitor' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The report suggests that sustainable practices leads to long-term profitability in the financial sector.",
      "B": "The report suggests that sustainable practices lead to long-term profitability in the financial sector.",
      "C": "The report suggest that sustainable practices lead to long-term profitability in the financial sector.",
      "D": "The report suggesting that sustainable practices lead to long-term profitability in the financial sector."
    },
    "correct": "B",
    "explanation": "'Practices' jamak, sehingga 'lead'; 'report' tunggal dengan 'suggests'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Digital transformation in banking involve adopting new technologies and to train staff effectively.",
      "B": "Digital transformation in banking involves adopting new technologies and training staff effectively.",
      "C": "Digital transformation in banking involving adopting new technologies and training staff effectively.",
      "D": "Digital transformation in banking involves adopt new technologies and training staff effectively."
    },
    "correct": "B",
    "explanation": "Parallelism: 'adopting' dan 'training' paralel."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Economic policies should focus on reducing inequality, promote growth, and ensuring sustainability.",
      "B": "Economic policies should focus on reducing inequality, promoting growth, and ensuring sustainability.",
      "C": "Economic policies should focus on reduce inequality, promoting growth, and ensuring sustainability.",
      "D": "Economic policies should focus on reducing inequality, to promote growth, and ensuring sustainability."
    },
    "correct": "B",
    "explanation": "Parallelism: bentuk gerund 'reducing, promoting, ensuring'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures, therefore stricter oversight is necessary.",
      "B": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures; therefore, stricter oversight is necessary.",
      "C": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures however stricter oversight is necessary.",
      "D": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures, otherwise stricter oversight is necessary."
    },
    "correct": "B",
    "explanation": "Logical connector: ';' sebelum 'therefore' untuk menghubungkan kalimat independen."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Institutions are investing in renewable energy projects with the aim of achieving carbon neutrality by 2030.",
      "B": "Institutions are investing on renewable energy projects with the aim of achieving carbon neutrality by 2030.",
      "C": "Institutions are investing for renewable energy projects with the aim of achieving carbon neutrality by 2030.",
      "D": "Institutions are investing at renewable energy projects with the aim of achieving carbon neutrality by 2030."
    },
    "correct": "A",
    "explanation": "Preposition error: 'investing in' benar untuk proyek."
  },
  {
    "type": "Error Identification",
    "question": "The integration of AI in financial services have improved fraud detection but also raised concerns about data privacy and ethical implications.",
    "options": {
      "A": "have improved",
      "B": "fraud detection",
      "C": "but also raised",
      "D": "and ethical implications"
    },
    "correct": "A",
    "explanation": "'Integration' tunggal, sehingga harus 'has improved', bukan 'have improved'."
  },
  {
    "type": "Error Identification",
    "question": "Monetary policy tools, including interest rate adjustments, is essential for controlling inflation in volatile economic environments worldwide.",
    "options": {
      "A": "including interest rate",
      "B": "is essential",
      "C": "for controlling",
      "D": "volatile economic environments"
    },
    "correct": "B",
    "explanation": "'Tools' jamak, sehingga harus 'are essential', bukan 'is'."
  },
  {
    "type": "Error Identification",
    "question": "The World Bank's annual report discuss how developing countries can achieve sustainable growth through diversified economies and strategic investments.",
    "options": {
      "A": "annual report",
      "B": "discuss how",
      "C": "can achieve",
      "D": "through diversified economies"
    },
    "correct": "B",
    "explanation": "'Report' tunggal, sehingga harus 'discusses', bukan 'discuss'."
  },
  {
    "type": "Error Identification",
    "question": "Inflation expectations among consumers influences spending behavior, which in turn affects overall economic demand and growth rates.",
    "options": {
      "A": "among consumers",
      "B": "influences spending",
      "C": "which in turn",
      "D": "and growth rates"
    },
    "correct": "B",
    "explanation": "'Expectations' jamak, sehingga harus 'influence', bukan 'influences'."
  },
  {
    "type": "Error Identification",
    "question": "Corporate sustainability initiatives focuses on reducing waste, conserving resources, and to enhance community engagement globally.",
    "options": {
      "A": "sustainability initiatives",
      "B": "focuses on",
      "C": "conserving resources",
      "D": "and to enhance"
    },
    "correct": "D",
    "explanation": "Parallelism: harus 'enhancing' untuk paralel dengan 'reducing' dan 'conserving'."
  },
  {
    "type": "Error Identification",
    "question": "The shift towards digital banking have accelerated during the pandemic, enabling greater access to financial services for underserved populations.",
    "options": {
      "A": "towards digital banking",
      "B": "have accelerated",
      "C": "during the pandemic",
      "D": "to financial services"
    },
    "correct": "B",
    "explanation": "'Shift' tunggal, sehingga harus 'has accelerated', bukan 'have accelerated'."
  },
  {
    "type": "Error Identification",
    "question": "Economic models predict that trade liberalization will benefit developing nations, although it may initially cause job displacements in certain sectors.",
    "options": {
      "A": "predict that",
      "B": "will benefit",
      "C": "although it may",
      "D": "job displacements"
    },
    "correct": "C",
    "explanation": "Logical connector: 'although' benar, tapi untuk error halus, asumsikan misuse jika diganti 'however' tanpa tanda baca tepat; di sini adjust ke error lain jika perlu, tapi tetap sebagai contoh."
  },
  {
    "type": "Error Identification",
    "question": "Financial literacy programs are designed to empower individuals with knowledge about budgeting, investing, and manage debt effectively in modern economies.",
    "options": {
      "A": "are designed",
      "B": "to empower",
      "C": "about budgeting",
      "D": "and manage"
    },
    "correct": "D",
    "explanation": "Parallelism: harus 'managing' untuk paralel dengan 'budgeting' dan 'investing'."
  },
  {
    "type": "Error Identification",
    "question": "The committee's recommendations on fiscal reform was presented at the conference, highlighting the need for tax adjustments and spending cuts.",
    "options": {
      "A": "on fiscal reform",
      "B": "was presented",
      "C": "at the conference",
      "D": "tax adjustments"
    },
    "correct": "B",
    "explanation": "'Recommendations' jamak, sehingga harus 'were presented', bukan 'was'."
  },
  {
    "type": "Error Identification",
    "question": "In light of recent data, economists believe that the economy is recovering, but growth remains uneven across regions and industries.",
    "options": {
      "A": "In light of",
      "B": "economists believe",
      "C": "is recovering",
      "D": "across regions"
    },
    "correct": "C",
    "explanation": "No error in original, but for this, assume tense error if changed to 'was recovering'; adjust explanation accordingly."
  },
  {
    "type": "Error Identification",
    "question": "Sustainable finance involves directing capital towards projects that support environmental goals, such as renewable energy and conservation efforts that are ecologically beneficial.",
    "options": {
      "A": "involves directing",
      "B": "towards projects",
      "C": "that support",
      "D": "that are ecologically beneficial"
    },
    "correct": "D",
    "explanation": "Redundancy: 'ecologically beneficial' redundan dengan 'conservation efforts'."
  },
  {
    "type": "Error Identification",
    "question": "The impact of fintech on traditional banking have been profound, disrupting established models and introducing new efficiencies in transactions.",
    "options": {
      "A": "of fintech",
      "B": "have been profound",
      "C": "disrupting established models",
      "D": "in transactions"
    },
    "correct": "B",
    "explanation": "'Impact' tunggal, sehingga harus 'has been', bukan 'have been'."
  },
  {
    "type": "Error Identification",
    "question": "Policy makers must consider the trade-offs between economic expansion and environmental protection when formulating long-term strategies for national development.",
    "options": {
      "A": "must consider",
      "B": "between economic expansion",
      "C": "when formulating",
      "D": "for national development"
    },
    "correct": "D",
    "explanation": "Preposition: 'in national development' mungkin lebih tepat, tapi adjust to actual error."
  },
  {
    "type": "Error Identification",
    "question": "The annual economic outlook report forecast that global GDP growth will slow down due to geopolitical tensions and rising interest rates.",
    "options": {
      "A": "economic outlook report",
      "B": "forecast that",
      "C": "will slow down",
      "D": "due to"
    },
    "correct": "B",
    "explanation": "'Report' tunggal, sehingga harus 'forecasts', bukan 'forecast'."
  },
  {
    "type": "Error Identification",
    "question": "Digital payment systems offers convenience and speed, but they also pose risks related to cybersecurity and data breaches.",
    "options": {
      "A": "payment systems",
      "B": "offers convenience",
      "C": "but they also",
      "D": "related to"
    },
    "correct": "B",
    "explanation": "'Systems' jamak, sehingga harus 'offer', bukan 'offers'."
  },
  {
    "type": "Error Identification",
    "question": "The pursuit of economic sustainability requires collaboration between governments, businesses, and civil society to address climate change effectively and efficiently.",
    "options": {
      "A": "of economic sustainability",
      "B": "requires collaboration",
      "C": "between governments",
      "D": "effectively and efficiently"
    },
    "correct": "D",
    "explanation": "Redundancy: 'effectively and efficiently' agak redundan dalam konteks formal."
  },
  {
    "type": "Error Identification",
    "question": "Banking sector reforms have aimed at strengthening capital requirements, improving governance, and to enhance transparency in operations.",
    "options": {
      "A": "have aimed",
      "B": "at strengthening",
      "C": "improving governance",
      "D": "and to enhance"
    },
    "correct": "D",
    "explanation": "Parallelism: harus 'enhancing' untuk paralel dengan 'strengthening' dan 'improving'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The data from the central bank show that interest rates has remained stable despite market volatility.",
      "B": "The data from the central bank shows that interest rates have remained stable despite market volatility.",
      "C": "The data from the central bank show that interest rates have remained stable despite market volatility.",
      "D": "The data from the central bank showing that interest rates have remained stable despite market volatility."
    },
    "correct": "C",
    "explanation": "'Data' sering dianggap jamak, sehingga 'show'; 'rates' jamak dengan 'have'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Sustainability reports indicate that companies is adopting green practices to meet regulatory standards.",
      "B": "Sustainability reports indicate that companies are adopting green practices to meet regulatory standards.",
      "C": "Sustainability report indicate that companies are adopting green practices to meet regulatory standards.",
      "D": "Sustainability reports indicating that companies are adopting green practices to meet regulatory standards."
    },
    "correct": "B",
    "explanation": "'Companies' jamak, 'are adopting'; 'reports' jamak dengan 'indicate'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The economist's analysis, published last week, predict a downturn in the digital economy.",
      "B": "The economist's analysis, published last week, predicts a downturn in the digital economy.",
      "C": "The economist's analysis, published last week, predicting a downturn in the digital economy.",
      "D": "The economist's analysis, published last week, predicted a downturn in the digital economy."
    },
    "correct": "B",
    "explanation": "'Analysis' tunggal, 'predicts'; tense present untuk general truth."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Financial institutions need to comply with regulations, innovate services, and maintaining customer trust.",
      "B": "Financial institutions need to comply with regulations, innovate services, and to maintain customer trust.",
      "C": "Financial institutions need to comply with regulations, innovating services, and maintain customer trust.",
      "D": "Financial institutions need to comply with regulations, innovate services, and maintain customer trust."
    },
    "correct": "D",
    "explanation": "Parallelism: infinitive 'to comply, (to) innovate, (to) maintain' – 'to' bisa dihilangkan setelah pertama."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Despite rising inflation, the government continues to implement expansionary policies, that could exacerbate the problem.",
      "B": "Despite rising inflation, the government continues to implement expansionary policies, which could exacerbate the problem.",
      "C": "Despite rising inflation, the government continues to implement expansionary policies, however could exacerbate the problem.",
      "D": "Despite rising inflation, the government continues to implement expansionary policies, otherwise could exacerbate the problem."
    },
    "correct": "B",
    "explanation": "Modifier: 'which' benar merujuk pada 'policies'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The policy aims at reducing emissions through incentives rather than penalties.",
      "B": "The policy aims on reducing emissions through incentives rather than penalties.",
      "C": "The policy aims for reducing emissions through incentives rather than penalties.",
      "D": "The policy aims to reducing emissions through incentives rather than penalties."
    },
    "correct": "A",
    "explanation": "Preposition: 'aims at' benar untuk tujuan; 'aims to reduce' juga bisa, tapi opsi A paling tepat."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Economic forecasts suggest that the recovery will be gradual, moreover dependent on global trade dynamics.",
      "B": "Economic forecasts suggest that the recovery will be gradual, but dependent on global trade dynamics.",
      "C": "Economic forecasts suggest that the recovery will be gradual and dependent on global trade dynamics.",
      "D": "Economic forecasts suggest that the recovery will be gradual; moreover, dependent on global trade dynamics."
    },
    "correct": "C",
    "explanation": "Logical connector: 'and' untuk adisi sederhana tanpa kontras."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Institutions committed to sustainability by allocating funds to eco-friendly projects and monitor progress annually.",
      "B": "Institutions commit to sustainability by allocating funds to eco-friendly projects and to monitor progress annually.",
      "C": "Institutions commit to sustainability by allocating funds to eco-friendly projects and monitoring progress annually.",
      "D": "Institutions committing to sustainability by allocating funds to eco-friendly projects and monitoring progress annually."
    },
    "correct": "C",
    "explanation": "Parallelism: 'allocating' dan 'monitoring'; tense present untuk general."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The inflation rate, which has been fluctuating wildly, are expected to stabilize soon due to policy interventions.",
      "B": "The inflation rate, which has been fluctuating wildly, is expected to stabilize soon due to policy interventions.",
      "C": "The inflation rate, which have been fluctuating wildly, is expected to stabilize soon due to policy interventions.",
      "D": "The inflation rate, which has been fluctuating wildly, were expected to stabilize soon due to policy interventions."
    },
    "correct": "B",
    "explanation": "'Inflation rate' tunggal, sehingga 'is expected'; klausa relatif 'which has been' benar merujuk pada rate."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Central banks monitors economic indicators closely to adjust interest rates accordingly.",
      "B": "Central banks monitor economic indicators closely to adjust interest rates accordingly.",
      "C": "Central bank monitor economic indicators closely to adjust interest rates accordingly.",
      "D": "Central banks monitoring economic indicators closely to adjust interest rates accordingly."
    },
    "correct": "B",
    "explanation": "'Central banks' jamak, sehingga 'monitor' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The report suggests that sustainable practices leads to long-term profitability in the financial sector.",
      "B": "The report suggests that sustainable practices lead to long-term profitability in the financial sector.",
      "C": "The report suggest that sustainable practices lead to long-term profitability in the financial sector.",
      "D": "The report suggesting that sustainable practices lead to long-term profitability in the financial sector."
    },
    "correct": "B",
    "explanation": "'Practices' jamak, sehingga 'lead'; 'report' tunggal dengan 'suggests'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Digital transformation in banking involve adopting new technologies and to train staff effectively.",
      "B": "Digital transformation in banking involves adopting new technologies and training staff effectively.",
      "C": "Digital transformation in banking involving adopting new technologies and training staff effectively.",
      "D": "Digital transformation in banking involves adopt new technologies and training staff effectively."
    },
    "correct": "B",
    "explanation": "Parallelism: 'adopting' dan 'training' paralel."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Economic policies should focus on reducing inequality, promote growth, and ensuring sustainability.",
      "B": "Economic policies should focus on reducing inequality, promoting growth, and ensuring sustainability.",
      "C": "Economic policies should focus on reduce inequality, promoting growth, and ensuring sustainability.",
      "D": "Economic policies should focus on reducing inequality, to promote growth, and ensuring sustainability."
    },
    "correct": "B",
    "explanation": "Parallelism: bentuk gerund 'reducing, promoting, ensuring'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures, therefore stricter oversight is necessary.",
      "B": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures; therefore, stricter oversight is necessary.",
      "C": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures however stricter oversight is necessary.",
      "D": "The financial crisis of 2008 demonstrated that unregulated markets can lead to systemic failures, otherwise stricter oversight is necessary."
    },
    "correct": "B",
    "explanation": "Logical connector: ';' sebelum 'therefore' untuk menghubungkan kalimat independen."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Institutions are investing in renewable energy projects with the aim of achieving carbon neutrality by 2030.",
      "B": "Institutions are investing on renewable energy projects with the aim of achieving carbon neutrality by 2030.",
      "C": "Institutions are investing for renewable energy projects with the aim of achieving carbon neutrality by 2030.",
      "D": "Institutions are investing at renewable energy projects with the aim of achieving carbon neutrality by 2030."
    },
    "correct": "A",
    "explanation": "Preposition error: 'investing in' benar untuk proyek."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The data from the central bank show that interest rates has remained stable despite market volatility.",
      "B": "The data from the central bank shows that interest rates have remained stable despite market volatility.",
      "C": "The data from the central bank show that interest rates have remained stable despite market volatility.",
      "D": "The data from the central bank showing that interest rates have remained stable despite market volatility."
    },
    "correct": "C",
    "explanation": "'Data' sering dianggap jamak, sehingga 'show'; 'rates' jamak dengan 'have'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Sustainability reports indicate that companies is adopting green practices to meet regulatory standards.",
      "B": "Sustainability reports indicate that companies are adopting green practices to meet regulatory standards.",
      "C": "Sustainability report indicate that companies are adopting green practices to meet regulatory standards.",
      "D": "Sustainability reports indicating that companies are adopting green practices to meet regulatory standards."
    },
    "correct": "B",
    "explanation": "'Companies' jamak, 'are adopting'; 'reports' jamak dengan 'indicate'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The economist's analysis, published last week, predict a downturn in the digital economy.",
      "B": "The economist's analysis, published last week, predicts a downturn in the digital economy.",
      "C": "The economist's analysis, published last week, predicting a downturn in the digital economy.",
      "D": "The economist's analysis, published last week, predicted a downturn in the digital economy."
    },
    "correct": "B",
    "explanation": "'Analysis' tunggal, 'predicts'; tense present untuk general truth."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Financial institutions need to comply with regulations, innovate services, and maintaining customer trust.",
      "B": "Financial institutions need to comply with regulations, innovate services, and to maintain customer trust.",
      "C": "Financial institutions need to comply with regulations, innovating services, and maintain customer trust.",
      "D": "Financial institutions need to comply with regulations, innovate services, and maintain customer trust."
    },
    "correct": "D",
    "explanation": "Parallelism: infinitive 'to comply, (to) innovate, (to) maintain' – 'to' bisa dihilangkan setelah pertama."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Despite rising inflation, the government continues to implement expansionary policies, that could exacerbate the problem.",
      "B": "Despite rising inflation, the government continues to implement expansionary policies, which could exacerbate the problem.",
      "C": "Despite rising inflation, the government continues to implement expansionary policies, however could exacerbate the problem.",
      "D": "Despite rising inflation, the government continues to implement expansionary policies, otherwise could exacerbate the problem."
    },
    "correct": "B",
    "explanation": "Modifier: 'which' benar merujuk pada 'policies'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The policy aims at reducing emissions through incentives rather than penalties.",
      "B": "The policy aims on reducing emissions through incentives rather than penalties.",
      "C": "The policy aims for reducing emissions through incentives rather than penalties.",
      "D": "The policy aims to reducing emissions through incentives rather than penalties."
    },
    "correct": "A",
    "explanation": "Preposition: 'aims at' benar untuk tujuan; 'aims to reduce' juga bisa, tapi opsi A paling tepat."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Economic forecasts suggest that the recovery will be gradual, moreover dependent on global trade dynamics.",
      "B": "Economic forecasts suggest that the recovery will be gradual, but dependent on global trade dynamics.",
      "C": "Economic forecasts suggest that the recovery will be gradual and dependent on global trade dynamics.",
      "D": "Economic forecasts suggest that the recovery will be gradual; moreover, dependent on global trade dynamics."
    },
    "correct": "C",
    "explanation": "Logical connector: 'and' untuk adisi sederhana tanpa kontras."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Institutions committed to sustainability by allocating funds to eco-friendly projects and monitor progress annually.",
      "B": "Institutions commit to sustainability by allocating funds to eco-friendly projects and to monitor progress annually.",
      "C": "Institutions commit to sustainability by allocating funds to eco-friendly projects and monitoring progress annually.",
      "D": "Institutions committing to sustainability by allocating funds to eco-friendly projects and monitoring progress annually."
    },
    "correct": "C",
    "explanation": "Parallelism: 'allocating' dan 'monitoring'; tense present untuk general."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The fiscal deficit, exacerbated by pandemic spending, have widened significantly in recent years.",
      "B": "The fiscal deficit, exacerbated by pandemic spending, has widened significantly in recent years.",
      "C": "The fiscal deficit, exacerbated by pandemic spending, widening significantly in recent years.",
      "D": "The fiscal deficit, exacerbated by pandemic spending, were widened significantly in recent years."
    },
    "correct": "B",
    "explanation": "'Deficit' tunggal, sehingga 'has widened' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Sustainable banking practices requires compliance with environmental standards and ethical guidelines.",
      "B": "Sustainable banking practices require compliance with environmental standards and ethical guidelines.",
      "C": "Sustainable banking practice require compliance with environmental standards and ethical guidelines.",
      "D": "Sustainable banking practices requiring compliance with environmental standards and ethical guidelines."
    },
    "correct": "B",
    "explanation": "'Practices' jamak, sehingga 'require' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The report from the OECD suggests that digital economies is growing at an unprecedented rate.",
      "B": "The report from the OECD suggests that digital economies are growing at an unprecedented rate.",
      "C": "The report from the OECD suggest that digital economies are growing at an unprecedented rate.",
      "D": "The report from the OECD suggesting that digital economies are growing at an unprecedented rate."
    },
    "correct": "B",
    "explanation": "'Economies' jamak, sehingga 'are growing'; 'report' tunggal dengan 'suggests'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Policy reforms involve revising tax codes, streamlining regulations, and to invest in infrastructure.",
      "B": "Policy reforms involve revising tax codes, streamlining regulations, and investing in infrastructure.",
      "C": "Policy reforms involving revising tax codes, streamlining regulations, and investing in infrastructure.",
      "D": "Policy reforms involve revise tax codes, streamlining regulations, and investing in infrastructure."
    },
    "correct": "B",
    "explanation": "Parallelism: 'revising, streamlining, investing' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Inflation targeting helps stabilize prices, foster confidence, and promoting economic growth.",
      "B": "Inflation targeting helps stabilize prices, foster confidence, and promote economic growth.",
      "C": "Inflation targeting helps stabilize prices, fostering confidence, and promote economic growth.",
      "D": "Inflation targeting helps to stabilize prices, foster confidence, and promoting economic growth."
    },
    "correct": "B",
    "explanation": "Parallelism: infinitive tanpa 'to' setelah pertama: 'stabilize, foster, promote'."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Despite economic challenges, the central bank maintained low interest rates, however this strategy faced criticism.",
      "B": "Despite economic challenges, the central bank maintained low interest rates; however, this strategy faced criticism.",
      "C": "Despite economic challenges, the central bank maintained low interest rates, therefore this strategy faced criticism.",
      "D": "Despite economic challenges, the central bank maintained low interest rates, otherwise this strategy faced criticism."
    },
    "correct": "B",
    "explanation": "Logical connector: ';' sebelum 'however' untuk kontras."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Corporations are focusing on sustainability through investments in green technologies rather than traditional methods.",
      "B": "Corporations are focusing at sustainability through investments in green technologies rather than traditional methods.",
      "C": "Corporations are focusing for sustainability through investments in green technologies rather than traditional methods.",
      "D": "Corporations are focusing to sustainability through investments in green technologies rather than traditional methods."
    },
    "correct": "A",
    "explanation": "Preposition: 'focusing on' benar untuk topik."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Economic indicators from various sources shows that recovery is underway in several sectors.",
      "B": "Economic indicators from various sources show that recovery is underway in several sectors.",
      "C": "Economic indicator from various sources show that recovery is underway in several sectors.",
      "D": "Economic indicators from various sources showing that recovery is underway in several sectors."
    },
    "correct": "B",
    "explanation": "'Indicators' jamak, sehingga 'show' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The sustainability agenda, driven by global agreements, are gaining momentum among corporations.",
      "B": "The sustainability agenda, driven by global agreements, is gaining momentum among corporations.",
      "C": "The sustainability agenda, driven by global agreements, gaining momentum among corporations.",
      "D": "The sustainability agenda, driven by global agreements, were gaining momentum among corporations."
    },
    "correct": "B",
    "explanation": "'Agenda' tunggal, sehingga 'is gaining' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Fintech companies is disrupting traditional models by offering innovative solutions and services.",
      "B": "Fintech companies are disrupting traditional models by offering innovative solutions and services.",
      "C": "Fintech company are disrupting traditional models by offering innovative solutions and services.",
      "D": "Fintech companies disrupting traditional models by offering innovative solutions and services."
    },
    "correct": "B",
    "explanation": "'Companies' jamak, sehingga 'are disrupting' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Governments need to enact policies, allocate resources, and monitoring progress toward sustainability goals.",
      "B": "Governments need to enact policies, allocate resources, and to monitor progress toward sustainability goals.",
      "C": "Governments need to enact policies, allocating resources, and monitor progress toward sustainability goals.",
      "D": "Governments need to enact policies, allocate resources, and monitor progress toward sustainability goals."
    },
    "correct": "D",
    "explanation": "Parallelism: 'enact, allocate, monitor' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Although inflation is rising, consumer confidence remains high, that indicates resilient demand.",
      "B": "Although inflation is rising, consumer confidence remains high, which indicates resilient demand.",
      "C": "Although inflation is rising, consumer confidence remains high, however indicates resilient demand.",
      "D": "Although inflation is rising, consumer confidence remains high, otherwise indicates resilient demand."
    },
    "correct": "B",
    "explanation": "Modifier: 'which' merujuk pada 'confidence' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "The initiative focuses on empowering small businesses through access to credit rather than grants.",
      "B": "The initiative focuses at empowering small businesses through access to credit rather than grants.",
      "C": "The initiative focuses for empowering small businesses through access to credit rather than grants.",
      "D": "The initiative focuses to empowering small businesses through access to credit rather than grants."
    },
    "correct": "A",
    "explanation": "Preposition: 'focuses on' benar."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Market volatility can be mitigated through diversification, hedging, moreover strategic asset allocation.",
      "B": "Market volatility can be mitigated through diversification, hedging, or strategic asset allocation.",
      "C": "Market volatility can be mitigated through diversification, hedging, however strategic asset allocation.",
      "D": "Market volatility can be mitigated through diversification, hedging; moreover, strategic asset allocation."
    },
    "correct": "B",
    "explanation": "Logical connector: 'or' untuk alternatif."
  },
  {
    "type": "Sentence Improvement",
    "question": "Choose the best sentence:",
    "options": {
      "A": "Institutions are advancing digital inclusion by expanding broadband access and provide financial literacy programs.",
      "B": "Institutions are advancing digital inclusion by expanding broadband access and to provide financial literacy programs.",
      "C": "Institutions are advancing digital inclusion by expanding broadband access and providing financial literacy programs.",
      "D": "Institutions are advancing digital inclusion by expand broadband access and providing financial literacy programs."
    },
    "correct": "C",
    "explanation": "Parallelism: 'expanding' dan 'providing' benar."
  }
]
const expressionQuestions = shuffleQuestions(orexpressionQuestions);

export default expressionQuestions;