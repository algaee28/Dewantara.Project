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

const orstructureQuestions: Question[] = [
  {
    "type": "Structure",
    "question": "Despite the fact that the negotiations had been ongoing for months, neither side ______ any significant concessions.",
    "options": {
      "A": "has made",
      "B": "have made",
      "C": "was making",
      "D": "were making"
    },
    "correct": "A",
    "explanation": "Subjek 'neither side' dianggap tunggal dalam konteks ini, sehingga menggunakan 'has made' untuk present perfect tense."
  },
  {
    "type": "Structure",
    "question": "The committee, along with its advisors, ______ to review the proposal before the deadline.",
    "options": {
      "A": "intends",
      "B": "intend",
      "C": "intending",
      "D": "is intending"
    },
    "correct": "A",
    "explanation": "Subjek utama 'committee' adalah tunggal, meskipun ada tambahan 'along with its advisors', sehingga verbanya 'intends'."
  },
  {
    "type": "Structure",
    "question": "Had the economist predicted the recession accurately, investors ______ their portfolios accordingly.",
    "options": {
      "A": "would adjust",
      "B": "would have adjusted",
      "C": "will adjust",
      "D": "adjusted"
    },
    "correct": "B",
    "explanation": "Ini conditional type 3 (past unreal), sehingga menggunakan 'would have adjusted' untuk kondisi hipotetis di masa lalu."
  },
  {
    "type": "Structure",
    "question": "The research team prefers ______ the data manually rather than relying on automated software.",
    "options": {
      "A": "analyzing",
      "B": "to analyze",
      "C": "analyze",
      "D": "analyzed"
    },
    "correct": "B",
    "explanation": "Verb 'prefers' diikuti oleh infinitive 'to analyze' untuk menyatakan preferensi terhadap tindakan."
  },
  {
    "type": "Structure",
    "question": "Although the theory was groundbreaking, it required further evidence ______ its validity.",
    "options": {
      "A": "confirming",
      "B": "to confirm",
      "C": "confirmed",
      "D": "confirms"
    },
    "correct": "B",
    "explanation": "Struktur 'require + infinitive' digunakan untuk menyatakan kebutuhan tindakan, sehingga 'to confirm'."
  },
  {
    "type": "Structure",
    "question": "The architect designed the building with sustainability in mind, incorporating features such as solar panels and ______ systems.",
    "options": {
      "A": "rainwater harvesting",
      "B": "harvesting rainwater",
      "C": "to harvest rainwater",
      "D": "rainwater to harvest"
    },
    "correct": "A",
    "explanation": "Parallel structure: 'solar panels and rainwater harvesting systems' menjaga bentuk noun phrase yang sejajar."
  },
  {
    "type": "Structure",
    "question": "As soon as the merger is approved, the companies ______ their operations to maximize efficiency.",
    "options": {
      "A": "will integrate",
      "B": "integrate",
      "C": "integrated",
      "D": "integrating"
    },
    "correct": "A",
    "explanation": "Clause 'as soon as' menunjukkan future time, sehingga menggunakan future tense 'will integrate'."
  },
  {
    "type": "Structure",
    "question": "The professor, known for his rigorous standards, expects students ______ the assigned readings thoroughly.",
    "options": {
      "A": "analyzing",
      "B": "to analyze",
      "C": "analyze",
      "D": "analyzed"
    },
    "correct": "B",
    "explanation": "Verb 'expects' diikuti oleh object + infinitive: 'students to analyze'."
  },
  {
    "type": "Structure",
    "question": "Neither the data nor the analyses ______ sufficient to support the hypothesis.",
    "options": {
      "A": "is",
      "B": "are",
      "C": "was",
      "D": "were"
    },
    "correct": "B",
    "explanation": "Dalam 'neither...nor', verb mengikuti subjek terakhir 'analyses' yang jamak, sehingga 'are'."
  },
  {
    "type": "Structure",
    "question": "Having completed the experiment, the scientists proceeded ______ the results in a peer-reviewed journal.",
    "options": {
      "A": "publishing",
      "B": "to publish",
      "C": "publish",
      "D": "published"
    },
    "correct": "B",
    "explanation": "Struktur 'proceeded + infinitive' untuk menyatakan tindakan selanjutnya: 'to publish'."
  },
  {
    "type": "Structure",
    "question": "If the policy had been implemented earlier, the economic downturn ______ avoided.",
    "options": {
      "A": "might be",
      "B": "might have been",
      "C": "will be",
      "D": "was"
    },
    "correct": "B",
    "explanation": "Conditional type 3: 'might have been' untuk kemungkinan hipotetis di masa lalu."
  },
  {
    "type": "Structure",
    "question": "The board members debated not only the budget but also ______ for the upcoming fiscal year.",
    "options": {
      "A": "strategic priorities",
      "B": "prioritizing strategies",
      "C": "to prioritize strategies",
      "D": "strategies prioritizing"
    },
    "correct": "A",
    "explanation": "Parallel structure dengan 'not only...but also': 'the budget' sejajar dengan 'strategic priorities' sebagai noun phrase."
  },
  {
    "type": "Structure",
    "question": "Because the market conditions were volatile, investors avoided ______ high-risk assets.",
    "options": {
      "A": "purchasing",
      "B": "to purchase",
      "C": "purchase",
      "D": "purchased"
    },
    "correct": "A",
    "explanation": "Verb 'avoided' diikuti oleh gerund: 'avoided purchasing'."
  },
  {
    "type": "Structure",
    "question": "The symposium featured experts discussing topics ranging from quantum computing to ______ intelligence.",
    "options": {
      "A": "artificial",
      "B": "artificially",
      "C": "artificiality",
      "D": "artifice"
    },
    "correct": "A",
    "explanation": "Parallel structure dalam 'ranging from...to': 'quantum computing' sejajar dengan 'artificial intelligence' sebagai noun phrase."
  },
  {
    "type": "Structure",
    "question": "Were the CEO to resign unexpectedly, the company ______ a leadership vacuum.",
    "options": {
      "A": "would face",
      "B": "will face",
      "C": "faced",
      "D": "faces"
    },
    "correct": "A",
    "explanation": "Inverted conditional untuk hipotetis: 'Were...to' diikuti oleh 'would face'."
  },
  {
    "type": "Structure",
    "question": "The algorithm, once optimized, enables users ______ complex simulations in real time.",
    "options": {
      "A": "running",
      "B": "to run",
      "C": "run",
      "D": "ran"
    },
    "correct": "B",
    "explanation": "Verb 'enables' diikuti oleh object + infinitive: 'users to run'."
  },
  {
    "type": "Structure",
    "question": "Although reluctant at first, the team eventually agreed ______ the new methodology.",
    "options": {
      "A": "adopting",
      "B": "to adopt",
      "C": "adopt",
      "D": "adopted"
    },
    "correct": "B",
    "explanation": "Verb 'agreed' diikuti oleh infinitive: 'agreed to adopt'."
  },
  {
    "type": "Structure",
    "question": "A number of proposals ______ submitted, but only a few were deemed viable.",
    "options": {
      "A": "was",
      "B": "were",
      "C": "has been",
      "D": "is"
    },
    "correct": "B",
    "explanation": "Subjek 'a number of proposals' dianggap jamak, sehingga verbanya 'were'."
  },
  {
    "type": "Structure",
    "question": "The consultant recommended ______ the workflow to enhance productivity.",
    "options": {
      "A": "streamlining",
      "B": "to streamline",
      "C": "streamline",
      "D": "streamlined"
    },
    "correct": "A",
    "explanation": "Verb 'recommended' diikuti oleh gerund ketika tanpa object: 'recommended streamlining'."
  },
  {
    "type": "Structure",
    "question": "By the time the conference concludes, the delegates ______ several key agreements.",
    "options": {
      "A": "will reach",
      "B": "will have reached",
      "C": "reached",
      "D": "reaching"
    },
    "correct": "B",
    "explanation": "Future perfect tense: 'will have reached' untuk aksi yang selesai sebelum waktu masa depan."
  },
  {
    "type": "Structure",
    "question": "The findings suggest that climate change, if unchecked, ______ irreversible damage to ecosystems.",
    "options": {
      "A": "causes",
      "B": "will cause",
      "C": "caused",
      "D": "causing"
    },
    "correct": "B",
    "explanation": "Conditional real future: 'if unchecked' diikuti oleh 'will cause'."
  },
  {
    "type": "Structure",
    "question": "Engineers must ensure that the bridge, ______ high winds, remains structurally sound.",
    "options": {
      "A": "withstanding",
      "B": "to withstand",
      "C": "withstand",
      "D": "withstood"
    },
    "correct": "A",
    "explanation": "Reduced clause: 'withstanding' sebagai present participle untuk menggantikan relative clause."
  },
  {
    "type": "Structure",
    "question": "The policy aims at both reducing emissions and ______ renewable energy sources.",
    "options": {
      "A": "promoting",
      "B": "to promote",
      "C": "promote",
      "D": "promoted"
    },
    "correct": "A",
    "explanation": "Parallel structure: 'reducing' (gerund) sejajar dengan 'promoting'."
  },
  {
    "type": "Structure",
    "question": "Should interest rates rise sharply, borrowers ______ increased financial pressure.",
    "options": {
      "A": "face",
      "B": "will face",
      "C": "faced",
      "D": "facing"
    },
    "correct": "B",
    "explanation": "Inverted conditional untuk future: 'Should...rise' diikuti oleh 'will face'."
  },
  {
    "type": "Structure",
    "question": "The manuscript, submitted anonymously, was praised for its originality and ______.",
    "options": {
      "A": "insightful analysis",
      "B": "analyzing insightfully",
      "C": "to analyze insightfully",
      "D": "insightful to analyze"
    },
    "correct": "A",
    "explanation": "Parallel structure: 'originality' sejajar dengan 'insightful analysis' sebagai noun phrase."
  },
  {
    "type": "Structure",
    "question": "The delegation avoided ______ controversial topics during the diplomatic talks.",
    "options": {
      "A": "discussing",
      "B": "to discuss",
      "C": "discuss",
      "D": "discussed"
    },
    "correct": "A",
    "explanation": "Verb 'avoided' diikuti oleh gerund: 'avoided discussing'."
  },
  {
    "type": "Structure",
    "question": "If the hypothesis were proven false, scientists ______ alternative explanations.",
    "options": {
      "A": "seek",
      "B": "would seek",
      "C": "sought",
      "D": "will seek"
    },
    "correct": "B",
    "explanation": "Conditional type 2: 'if...were' diikuti oleh 'would seek' untuk hipotetis saat ini."
  },
  {
    "type": "Structure",
    "question": "The curriculum emphasizes critical thinking, problem-solving, and ______ skills.",
    "options": {
      "A": "communicating effectively",
      "B": "effective communication",
      "C": "to communicate effectively",
      "D": "effectively communicating"
    },
    "correct": "B",
    "explanation": "Parallel structure: noun phrases seperti 'critical thinking' sejajar dengan 'effective communication'."
  },
  {
    "type": "Structure",
    "question": "As long as the regulations remain in place, companies ______ comply with environmental standards.",
    "options": {
      "A": "must",
      "B": "must have",
      "C": "must to",
      "D": "musting"
    },
    "correct": "A",
    "explanation": "Clause 'as long as' diikuti oleh modal verb 'must' untuk kewajiban."
  },
  {
    "type": "Structure",
    "question": "The investors regretted ______ the opportunity to fund the startup earlier.",
    "options": {
      "A": "missing",
      "B": "to miss",
      "C": "miss",
      "D": "missed"
    },
    "correct": "A",
    "explanation": "Verb 'regretted' diikuti oleh gerund untuk penyesalan atas tindakan masa lalu: 'regretted missing'."
  },
  {
    "type": "Structure",
    "question": "None of the participants ______ aware of the changes until the announcement was made.",
    "options": {
      "A": "was",
      "B": "were",
      "C": "is",
      "D": "are"
    },
    "correct": "B",
    "explanation": "Subjek 'none of the participants' dianggap jamak, sehingga 'were' untuk past tense."
  },
  {
    "type": "Structure",
    "question": "Developed over decades, the technology allows for ______ data processing.",
    "options": {
      "A": "efficient",
      "B": "efficiency",
      "C": "efficiently",
      "D": "to efficient"
    },
    "correct": "A",
    "explanation": "Reduced clause: 'Developed over decades' memerlukan adjective 'efficient' untuk menggambarkan 'data processing'."
  },
  {
    "type": "Structure",
    "question": "The analyst anticipated the market shift, thereby ______ potential losses for clients.",
    "options": {
      "A": "preventing",
      "B": "to prevent",
      "C": "prevent",
      "D": "prevented"
    },
    "correct": "A",
    "explanation": "Participle phrase: 'thereby preventing' untuk menunjukkan hasil."
  },
  {
    "type": "Structure",
    "question": "Unless addressed promptly, the issue ______ escalate into a major crisis.",
    "options": {
      "A": "could",
      "B": "could have",
      "C": "could to",
      "D": "coulding"
    },
    "correct": "A",
    "explanation": "Clause 'unless' diikuti oleh modal 'could' untuk kemungkinan."
  },
  {
    "type": "Structure",
    "question": "The framework involves assessing risks, mitigating threats, and ______ strategies.",
    "options": {
      "A": "implementing recovery",
      "B": "recovery implementing",
      "C": "to implement recovery",
      "D": "implement recovery"
    },
    "correct": "A",
    "explanation": "Parallel structure: gerunds seperti 'assessing' sejajar dengan 'implementing recovery'."
  },
  {
    "type": "Structure",
    "question": "By implementing these measures, the government hopes ______ economic stability.",
    "options": {
      "A": "achieving",
      "B": "to achieve",
      "C": "achieve",
      "D": "achieved"
    },
    "correct": "B",
    "explanation": "Verb 'hopes' diikuti oleh infinitive: 'hopes to achieve'."
  },
  {
    "type": "Structure",
    "question": "The statistics indicate that unemployment rates ______ steadily over the past year.",
    "options": {
      "A": "has declined",
      "B": "have declined",
      "C": "declined",
      "D": "declining"
    },
    "correct": "B",
    "explanation": "Subjek 'rates' jamak, sehingga 'have declined' untuk present perfect."
  },
  {
    "type": "Structure",
    "question": "Provided that all criteria are met, the application ______ approved.",
    "options": {
      "A": "will be",
      "B": "would be",
      "C": "was",
      "D": "being"
    },
    "correct": "A",
    "explanation": "Clause 'provided that' untuk kondisi future: 'will be approved'."
  },
  {
    "type": "Structure",
    "question": "The novel, acclaimed for its intricate plot and ______ characters, won several awards.",
    "options": {
      "A": "well-developed",
      "B": "developing well",
      "C": "to develop well",
      "D": "well to develop"
    },
    "correct": "A",
    "explanation": "Parallel structure: adjective phrases 'intricate plot' sejajar dengan 'well-developed characters'."
  },
  {
    "type": "Structure",
    "question": "Scientists have long debated whether artificial intelligence ______ surpass human cognition.",
    "options": {
      "A": "can",
      "B": "could",
      "C": "will can",
      "D": "cans"
    },
    "correct": "A",
    "explanation": "Present tense dengan modal 'can' untuk kemampuan umum."
  },
  {
    "type": "Structure",
    "question": "The project manager insisted on ______ the timeline despite unforeseen delays.",
    "options": {
      "A": "adhering to",
      "B": "to adhere to",
      "C": "adhere to",
      "D": "adhered to"
    },
    "correct": "A",
    "explanation": "Verb 'insisted on' diikuti oleh gerund: 'insisted on adhering to'."
  },
  {
    "type": "Structure",
    "question": "If only the team ______ more resources, they could have completed the task on time.",
    "options": {
      "A": "has",
      "B": "had",
      "C": "have",
      "D": "having"
    },
    "correct": "B",
    "explanation": "Wish clause untuk past: 'if only...had' untuk hipotetis masa lalu."
  },
  {
    "type": "Structure",
    "question": "The report highlights the need for innovation, collaboration, and ______ investment.",
    "options": {
      "A": "strategic",
      "B": "strategically",
      "C": "strategy",
      "D": "to strategic"
    },
    "correct": "A",
    "explanation": "Parallel structure: nouns seperti 'innovation' sejajar dengan 'strategic investment'."
  },
  {
    "type": "Structure",
    "question": "Once the data is analyzed, the findings ______ disseminated to stakeholders.",
    "options": {
      "A": "will be",
      "B": "would be",
      "C": "was",
      "D": "being"
    },
    "correct": "A",
    "explanation": "Clause 'once' untuk future sequence: 'will be disseminated'."
  },
  {
    "type": "Structure",
    "question": "The committee members were divided on whether ______ the proposal as it stood.",
    "options": {
      "A": "approving",
      "B": "to approve",
      "C": "approve",
      "D": "approved"
    },
    "correct": "B",
    "explanation": "Struktur 'whether + infinitive': 'whether to approve'."
  },
  {
    "type": "Structure",
    "question": "Economics, as well as politics, ______ a significant role in shaping global policies.",
    "options": {
      "A": "plays",
      "B": "play",
      "C": "playing",
      "D": "played"
    },
    "correct": "A",
    "explanation": "Subjek utama 'economics' tunggal, 'as well as politics' adalah tambahan, sehingga 'plays'."
  },
  {
    "type": "Structure",
    "question": "Confronted with mounting evidence, the defendant admitted ______ the allegations.",
    "options": {
      "A": "fabricating",
      "B": "to fabricate",
      "C": "fabricate",
      "D": "fabricated"
    },
    "correct": "A",
    "explanation": "Verb 'admitted' diikuti oleh gerund: 'admitted fabricating'."
  },
  {
    "type": "Structure",
    "question": "The initiative focuses on empowering communities through education and ______ support.",
    "options": {
      "A": "economic",
      "B": "economically",
      "C": "economy",
      "D": "to economic"
    },
    "correct": "A",
    "explanation": "Parallel structure: 'education' sejajar dengan 'economic support' sebagai noun phrase."
  },
  {
    "type": "Structure",
    "question": "No sooner had the bell rung than the students ______ their seats.",
    "options": {
      "A": "took",
      "B": "take",
      "C": "taken",
      "D": "taking"
    },
    "correct": "A",
    "explanation": "Struktur 'no sooner...than' menggunakan past perfect dan past simple: 'had rung...took'."
  },
  {
    "type": "Structure",
    "question": "The research necessitates ______ advanced computational models for accurate predictions.",
    "options": {
      "A": "employing",
      "B": "to employ",
      "C": "employ",
      "D": "employed"
    },
    "correct": "A",
    "explanation": "Verb 'necessitates' diikuti oleh gerund: 'necessitates employing'."
  },
  {
    "type": "Structure",
    "question": "If the experiment yields positive results, the researchers ______ their findings at the international conference next year.",
    "options": {
      "A": "present",
      "B": "will present",
      "C": "would present",
      "D": "presented"
    },
    "correct": "B",
    "explanation": "Conditional type 1: 'if' clause dalam present simple diikuti oleh 'will + infinitive' untuk kemungkinan nyata di masa depan."
  },
  {
    "type": "Structure",
    "question": "Were the government to implement stricter regulations, companies ______ adapt their practices accordingly.",
    "options": {
      "A": "will have to",
      "B": "would have to",
      "C": "had to",
      "D": "have to"
    },
    "correct": "B",
    "explanation": "Inverted conditional type 2: 'Were...to' untuk hipotetis saat ini, diikuti oleh 'would have to' menunjukkan kewajiban hipotetis."
  },
  {
    "type": "Structure",
    "question": "Had the team anticipated the setback, they ______ alternative strategies in advance.",
    "options": {
      "A": "will prepare",
      "B": "would prepare",
      "C": "would have prepared",
      "D": "prepare"
    },
    "correct": "C",
    "explanation": "Inverted conditional type 3: 'Had...anticipated' untuk kondisi hipotetis masa lalu, diikuti oleh 'would have prepared'."
  },
  {
    "type": "Structure",
    "question": "Unless the negotiations succeed, the trade agreement ______ collapse entirely.",
    "options": {
      "A": "could",
      "B": "could have",
      "C": "would",
      "D": "will"
    },
    "correct": "D",
    "explanation": "Conditional type 1 dengan 'unless': setara dengan 'if not', diikuti oleh 'will' untuk hasil masa depan yang mungkin."
  },
  {
    "type": "Structure",
    "question": "If only the economist ______ the market crash, investors could have mitigated their losses.",
    "options": {
      "A": "predicts",
      "B": "predicted",
      "C": "had predicted",
      "D": "would predict"
    },
    "correct": "C",
    "explanation": "'If only' untuk penyesalan masa lalu: menggunakan past perfect 'had predicted' seperti conditional type 3."
  },
  {
    "type": "Structure",
    "question": "Should the data prove inconclusive, the scientists ______ further experiments.",
    "options": {
      "A": "conduct",
      "B": "will conduct",
      "C": "would conduct",
      "D": "conducted"
    },
    "correct": "B",
    "explanation": "Inverted conditional type 1: 'Should...prove' diikuti oleh 'will conduct' untuk kemungkinan masa depan."
  },
  {
    "type": "Structure",
    "question": "If the policy were more flexible, businesses ______ thrive in the current economic climate.",
    "options": {
      "A": "can",
      "B": "could",
      "C": "will",
      "D": "would have"
    },
    "correct": "B",
    "explanation": "Conditional type 2: 'if...were' untuk hipotetis saat ini, diikuti oleh 'could' menunjukkan kemungkinan."
  },
  {
    "type": "Structure",
    "question": "Provided that all safety protocols are followed, the procedure ______ without complications.",
    "options": {
      "A": "proceeds",
      "B": "will proceed",
      "C": "would proceed",
      "D": "proceeded"
    },
    "correct": "B",
    "explanation": "'Provided that' setara dengan 'if': conditional type 1, diikuti oleh 'will proceed' untuk kondisi masa depan."
  },
  {
    "type": "Structure",
    "question": "If the invention had been patented earlier, the company ______ significant royalties by now.",
    "options": {
      "A": "earns",
      "B": "would earn",
      "C": "would have earned",
      "D": "earned"
    },
    "correct": "C",
    "explanation": "Mixed conditional (type 3 + type 2): 'if...had been' (masa lalu) memengaruhi situasi sekarang 'would have earned by now'."
  },
  {
    "type": "Structure",
    "question": "As long as the conditions remain stable, the reaction ______ predictable outcomes.",
    "options": {
      "A": "produces",
      "B": "will produce",
      "C": "produced",
      "D": "would produce"
    },
    "correct": "B",
    "explanation": "'As long as' untuk conditional type 1: diikuti oleh 'will produce' untuk hasil masa depan yang bergantung."
  },
  {
    "type": "Structure",
    "question": "Were it not for the intervention, the crisis ______ escalated further.",
    "options": {
      "A": "will have",
      "B": "would have",
      "C": "had",
      "D": "has"
    },
    "correct": "B",
    "explanation": "Inverted conditional type 3: 'Were it not for' untuk kontrafaktual masa lalu, diikuti oleh 'would have escalated'."
  },
  {
    "type": "Structure",
    "question": "If the hypothesis holds true, the implications ______ profound for the field.",
    "options": {
      "A": "are",
      "B": "will be",
      "C": "would be",
      "D": "were"
    },
    "correct": "B",
    "explanation": "Conditional type 1: 'if...holds' (present) diikuti oleh 'will be' untuk konsekuensi masa depan."
  },
  {
    "type": "Structure",
    "question": "Had the architect foreseen the structural issues, the building ______ redesigned accordingly.",
    "options": {
      "A": "will be",
      "B": "would be",
      "C": "would have been",
      "D": "was"
    },
    "correct": "C",
    "explanation": "Inverted conditional type 3: 'Had...foreseen' diikuti oleh 'would have been redesigned' untuk hipotetis masa lalu."
  },
  {
    "type": "Structure",
    "question": "Suppose the merger fails, what ______ the consequences for the employees?",
    "options": {
      "A": "are",
      "B": "will be",
      "C": "would be",
      "D": "were"
    },
    "correct": "C",
    "explanation": "'Suppose' untuk conditional type 2: hipotetis saat ini, diikuti oleh 'would be' untuk konsekuensi hipotetis."
  },
  {
    "type": "Structure",
    "question": "If water boils at 100 degrees Celsius under normal pressure, it ______ at higher altitudes due to lower pressure.",
    "options": {
      "A": "boils",
      "B": "will boil",
      "C": "would boil",
      "D": "boiled"
    },
    "correct": "A",
    "explanation": "Conditional type 0: fakta umum, kedua clause menggunakan present simple 'boils'."
  },
  {
    "type": "Structure",
    "question": "Even if the evidence were compelling, skeptics ______ unconvinced.",
    "options": {
      "A": "remain",
      "B": "will remain",
      "C": "would remain",
      "D": "remained"
    },
    "correct": "C",
    "explanation": "Conditional type 2 dengan 'even if': hipotetis, 'if...were' diikuti oleh 'would remain'."
  },
  {
    "type": "Structure",
    "question": "If the committee approves the budget, funding ______ available by the end of the quarter.",
    "options": {
      "A": "is",
      "B": "will be",
      "C": "would be",
      "D": "was"
    },
    "correct": "B",
    "explanation": "Conditional type 1: 'if...approves' diikuti oleh 'will be' untuk hasil masa depan."
  },
  {
    "type": "Structure",
    "question": "Should you encounter any difficulties, the support team ______ assist you immediately.",
    "options": {
      "A": "assists",
      "B": "will assist",
      "C": "would assist",
      "D": "assisted"
    },
    "correct": "B",
    "explanation": "Inverted conditional type 1: 'Should you encounter' diikuti oleh 'will assist'."
  },
  {
    "type": "Structure",
    "question": "If the theory had been validated sooner, it ______ influenced policy decisions years ago.",
    "options": {
      "A": "will have",
      "B": "would have",
      "C": "has",
      "D": "had"
    },
    "correct": "B",
    "explanation": "Conditional type 3: 'if...had been' diikuti oleh 'would have influenced' untuk kontrafaktual masa lalu."
  },
  {
    "type": "Structure",
    "question": "In case of emergency, the system ______ shut down automatically.",
    "options": {
      "A": "shuts",
      "B": "will shut",
      "C": "would shut",
      "D": "shut"
    },
    "correct": "B",
    "explanation": "'In case of' untuk conditional type 1: diikuti oleh 'will shut down' untuk persiapan masa depan."
  },
  {
    "type": "Structure",
    "question": "Were the resources unlimited, the project ______ completed ahead of schedule.",
    "options": {
      "A": "can be",
      "B": "could be",
      "C": "will be",
      "D": "is"
    },
    "correct": "B",
    "explanation": "Inverted conditional type 2: 'Were...unlimited' diikuti oleh 'could be' untuk kemungkinan hipotetis."
  },
  {
    "type": "Structure",
    "question": "If global temperatures continue to rise, ecosystems ______ irreversible changes.",
    "options": {
      "A": "undergo",
      "B": "will undergo",
      "C": "would undergo",
      "D": "underwent"
    },
    "correct": "B",
    "explanation": "Conditional type 1: 'if...continue' diikuti oleh 'will undergo' untuk prediksi masa depan."
  },
  {
    "type": "Structure",
    "question": "Had the warning been heeded, the disaster ______ averted.",
    "options": {
      "A": "might be",
      "B": "might have been",
      "C": "will be",
      "D": "is"
    },
    "correct": "B",
    "explanation": "Inverted conditional type 3: 'Had...been' diikuti oleh 'might have been' untuk kemungkinan kontrafaktual."
  },
  {
    "type": "Structure",
    "question": "Even though the odds are against it, if the venture succeeds, it ______ revolutionary.",
    "options": {
      "A": "is",
      "B": "will be",
      "C": "would be",
      "D": "was"
    },
    "correct": "B",
    "explanation": "Conditional type 1 dengan 'even though...if': fokus pada 'if succeeds' diikuti oleh 'will be'."
  },
  {
    "type": "Structure",
    "question": "Suppose we invested more in research, breakthroughs ______ more frequent.",
    "options": {
      "A": "are",
      "B": "will be",
      "C": "would be",
      "D": "were"
    },
    "correct": "C",
    "explanation": "'Suppose' untuk conditional type 2: 'invested' (past) hipotetis, diikuti oleh 'would be'."
  }
]

const structureQuestions = shuffleQuestions(orstructureQuestions);

export default structureQuestions;