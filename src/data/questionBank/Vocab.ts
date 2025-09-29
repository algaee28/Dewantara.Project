const vocabQuestions = [
  // --- SOAL 1-10 ---
  {
    type: "Vocabulary – Synonym",
    question:
      "The word “rapid” in the sentence “The patient showed rapid improvement after the surgery” is closest in meaning to:",
    options: {
      A: "Slow",
      B: "Quick",
      C: "Difficult",
      D: "Careful",
      E: "Gradual",
    },
    correct: "B",
    explanation:
      "Kata rapid artinya cepat atau berlangsung dengan kecepatan tinggi. Sinonim terdekat = quick." +
      "\n\n" +
      "👉 Tips: Ingat asosiasi: raptor (burung pemangsa) bergerak cepat → rapid = quick.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “scarce” is:",
    options: {
      A: "Abundant",
      B: "Rare",
      C: "Insufficient",
      D: "Limited",
      E: "Short",
    },
    correct: "A",
    explanation:
      "Scarce berarti langka atau terbatas. Antonimnya adalah abundant (berlimpah)." +
      "\n\n" +
      "👉 Tips: Ingat scar = bekas luka → sesuatu yang meninggalkan tanda karena jarang ada; sedangkan abundant mengandung bund → terikat penuh, melimpah.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "What does the idiom “once in a blue moon” mean?",
    options: {
      A: "Something that happens often",
      B: "Something that never happens",
      C: "Something that happens very rarely",
      D: "Something that happens every month",
      E: "Something that happens daily",
    },
    correct: "C",
    explanation:
      "Once in a blue moon artinya sesuatu yang sangat jarang terjadi." +
      "\n\n" +
      "👉 Tips: Ingat: bulan biru adalah fenomena langka → idiom = kejadian jarang.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question:
      "Choose the closest meaning of the phrasal verb “carry out” in the sentence:“The scientist carried out an important experiment.",
    options: {
      A: "Cancel",
      B: "Conduct",
      C: "Delay",
      D: "Stop",
      E: "Forget",
    },
    correct: "B",
    explanation:
      "Carry out berarti melaksanakan atau melakukan (eksperimen, penelitian, tugas). Sinonimnya conduct." +
      "\n\n" +
      "👉 Tips: Visualisasi: membawa (carry) sesuatu keluar (out) → artinya mengeksekusi sampai selesai.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “significant” is closest in meaning to:",
    options: {
      A: "Unimportant",
      B: "Meaningful",
      C: "Small",
      D: "Careful",
      E: "Trivial",
    },
    correct: "B",
    explanation:
      "Significant = penting, bermakna, cukup besar untuk diperhatikan. Sinonimnya meaningful atau important." +
      "\n\n" +
      "👉 Tips: Hubungkan dengan sign = tanda → sesuatu yang punya tanda khusus berarti penting.",
  },
  {
    type: "Vocabulary – Synonym",
    question: "The word “ancient” is closest in meaning to:",
    options: {
      A: "Modern",
      B: "Old",
      C: "Recent",
      D: "Future",
      E: "Present",
    },
    correct: "B",
    explanation:
      "Ancient berarti kuno, sangat tua, biasanya ribuan tahun lalu. Sinonim sederhana = old." +
      "\n\n" +
      "👉 Tips: Ingat ancient civilization (Mesir, Yunani) → jelas berarti tua.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “expand” is:",
    options: {
      A: "Increase",
      B: "Spread",
      C: "Contract",
      D: "Enlarge",
      E: "Extend",
    },
    correct: "C",
    explanation:
      "Expand = memperluas, memperbesar. Antonimnya = contract (menyusut, mengecil)." +
      "\n\n" +
      "👉 Tips: Kontrak badan otot saat olahraga → mengecil, bukan membesar.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “break the ice” means:",
    options: {
      A: "To start a conversation in a friendly way",
      B: "To destroy something frozen",
      C: "To feel very cold",
      D: "To get angry",
      E: "To end a friendship",
    },
    correct: "A",
    explanation:
      "Break the ice = memulai interaksi agar suasana tidak kaku." +
      "\n\n" +
      "👉 Tips: Bayangkan memecah es agar air mengalir → komunikasi mengalir.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The meaning of “give up” is:",
    options: {
      A: "Continue",
      B: "Surrender",
      C: "Begin",
      D: "Encourage",
      E: "Fight",
    },
    correct: "B",
    explanation:
      "Give up = menyerah, berhenti mencoba." +
      "\n\n" +
      "👉 Tips: Bayangkan memberikan (give) usaha kita ke atas (up) → artinya berhenti.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “evaluate” is closest in meaning to:",
    options: {
      A: "Guess",
      B: "Judge",
      C: "Ignore",
      D: "Create",
      E: "Hide",
    },
    correct: "B",
    explanation:
      "Evaluate = menilai berdasarkan kriteria tertentu. Sinonimnya assess/judge." +
      "\n\n" +
      "👉 Tips: Ingat value → berhubungan dengan memberi nilai.",
  },

  // --- SOAL 11-20 ---
  {
    type: "Vocabulary – Synonym",
    question: "The word “fragile” is closest in meaning to:",
    options: {
      A: "Strong",
      B: "Weak",
      C: "Delicate",
      D: "Heavy",
      E: "Stable",
    },
    correct: "C",
    explanation:
      "Fragile = rapuh, mudah pecah. Sinonimnya delicate." +
      "\n\n" +
      "👉 Tips: Ingat tulisan di kardus ekspedisi: fragile – handle with care.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “generous” is:",
    options: {
      A: "Kind",
      B: "Stingy",
      C: "Friendly",
      D: "Helpful",
      E: "Charitable",
    },
    correct: "B",
    explanation:
      "Generous = murah hati. Antonimnya stingy = pelit." +
      "\n\n" +
      "👉 Tips: Ingat bunyi sting (menusuk, menyakitkan) → orang pelit menyakitkan hati.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “hit the sack” means:",
    options: {
      A: "To start working",
      B: "To go to bed",
      C: "To eat quickly",
      D: "To get angry",
      E: "To exercise",
    },
    correct: "B",
    explanation:
      "Hit the sack = tidur, karena sack dulunya berarti karung isi jerami tempat tidur." +
      "\n\n" +
      "👉 Tips: Bayangkan karung besar sebagai kasur → hit the sack = tidur.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “look after” means:",
    options: {
      A: "Search for",
      B: "Take care of",
      C: "Look at",
      D: "Look up",
      E: "Look away",
    },
    correct: "B",
    explanation:
      "Look after = merawat, menjaga." +
      "\n\n" +
      "👉 Tips: Bayangkan seorang ibu selalu look after anaknya.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “approximate” is closest in meaning to:",
    options: {
      A: "Exact",
      B: "Roughly estimated",
      C: "Perfect",
      D: "Fixed",
      E: "Complete",
    },
    correct: "B",
    explanation:
      "Approximate = perkiraan, tidak persis tapi mendekati." +
      "\n\n" +
      "👉 Tips: Ingat approximately yang sering muncul di teks akademik = sekitar.",
  },
  {
    type: "Vocabulary – Synonym",
    question: "The word “vital” is closest in meaning to:",
    options: {
      A: "Unnecessary",
      B: "Important",
      C: "Minor",
      D: "Secondary",
      E: "Optional",
    },
    correct: "B",
    explanation:
      "Vital = sangat penting, esensial. Sinonim: essential/important." +
      "\n\n" +
      "👉 Tips: Vital signs (tanda vital: denyut nadi, napas) → hal yang menentukan hidup.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “complex” is:",
    options: {
      A: "Complicated",
      B: "Difficult",
      C: "Simple",
      D: "Hard",
      E: "Advanced",
    },
    correct: "C",
    explanation:
      "Complex = rumit. Antonimnya = simple." +
      "\n\n" +
      "👉 Tips: Ingat complex problem vs simple solution.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “under the weather” means:",
    options: {
      A: "Feeling sick",
      B: "Feeling happy",
      C: "Feeling rich",
      D: "Feeling sleepy",
      E: "Feeling energetic",
    },
    correct: "A",
    explanation:
      "Under the weather = merasa kurang sehat." +
      "\n\n" +
      "👉 Tips: Bayangkan hujan deras → badan jadi sakit → under the weather.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “run into” means:",
    options: {
      A: "Escape from",
      B: "Meet by chance",
      C: "Enter quickly",
      D: "Hit something",
      E: "Avoid",
    },
    correct: "B",
    explanation:
      "Run into = bertemu seseorang secara kebetulan." +
      "\n\n" +
      "👉 Tips: Bayangkan berlari (run) dan tiba-tiba bertabrakan → ketemu tidak sengaja.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “hypothesis” is closest in meaning to:",
    options: {
      A: "Proof",
      B: "Guess",
      C: "Theory",
      D: "Evidence",
      E: "Fact",
    },
    correct: "C",
    explanation:
      "Hypothesis = dugaan sementara yang perlu diuji, mirip theory tapi masih awal." +
      "\n\n" +
      "👉 Tips: Ingat langkah ilmiah: hypothesis → test → theory.",
  },

  // --- SOAL 21-30 ---
  {
    type: "Vocabulary – Synonym",
    question: "The word “enormous” is closest in meaning to:",
    options: {
      A: "Tiny",
      B: "Huge",
      C: "Small",
      D: "Weak",
      E: "Narrow",
    },
    correct: "B",
    explanation:
      "Enormous = sangat besar. Sinonim: huge, massive." +
      "\n\n" +
      "👉 Tips: Ingat enormous elephant → gajah besar.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “permanent” is:",
    options: {
      A: "Temporary",
      B: "Stable",
      C: "Fixed",
      D: "Constant",
      E: "Steady",
    },
    correct: "A",
    explanation:
      "Permanent = tetap, selamanya. Antonimnya temporary = sementara." +
      "\n\n" +
      "👉 Tips: Ingat permanent marker → tinta tidak hilang; lawannya tinta sementara.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “cost an arm and a leg” means:",
    options: {
      A: "Very cheap",
      B: "Very expensive",
      C: "Very dangerous",
      D: "Very rare",
      E: "Very easy",
    },
    correct: "B",
    explanation:
      "Cost an arm and a leg = sangat mahal, seolah-olah harus membayar dengan anggota tubuh." +
      "\n\n" +
      "👉 Tips: Bayangkan membeli sesuatu sampai kehilangan tangan & kaki → mahal sekali.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “turn down” means:",
    options: {
      A: "Accept",
      B: "Reject",
      C: "Increase",
      D: "Invite",
      E: "Open",
    },
    correct: "B",
    explanation:
      "Turn down = menolak (undangan, tawaran, lamaran)." +
      "\n\n" +
      "👉 Tips: Bayangkan memutar volume down → menolak atau mengecilkan.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “contribute” is closest in meaning to:",
    options: {
      A: "Receive",
      B: "Donate",
      C: "Hide",
      D: "Steal",
      E: "Prevent",
    },
    correct: "B",
    explanation:
      "Contribute = memberi sumbangan, menyumbang ide atau materi. Sinonim: donate." +
      "\n\n" +
      "👉 Tips: Ingat kata tribute = penghormatan, jadi contribute = memberi bersama.",
  },

  // --- SOAL 26-35 ---
  {
    type: "Vocabulary – Synonym",
    question: "The word “cease” is closest in meaning to:",
    options: {
      A: "Continue",
      B: "Stop",
      C: "Begin",
      D: "Increase",
      E: "Repeat",
    },
    correct: "B",
    explanation:
      "Cease = berhenti, mengakhiri. Sinonim terdekat = stop." +
      "\n\n" +
      "👉 Tips: Ingat ceasefire dalam berita perang = penghentian tembakan.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “artificial” is:",
    options: {
      A: "Fake",
      B: "Genuine",
      C: "Plastic",
      D: "False",
      E: "Unreal",
    },
    correct: "B",
    explanation:
      "Artificial = buatan, tidak alami. Antonimnya genuine = asli, autentik." +
      "\n\n" +
      "👉 Tips: Ingat artificial intelligence (kecerdasan buatan), lawannya kecerdasan manusia asli.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “beat around the bush” means:",
    options: {
      A: "To avoid talking directly about something",
      B: "To hit a tree",
      C: "To work very hard",
      D: "To feel confused",
      E: "To waste time sleeping",
    },
    correct: "A",
    explanation:
      "Beat around the bush = berbicara berputar-putar, tidak langsung ke inti masalah." +
      "\n\n" +
      "👉 Tips: Bayangkan orang memukul semak di sekelilingnya, bukan target di tengah.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “bring up” means:",
    options: {
      A: "To raise a topic",
      B: "To carry something",
      C: "To build a house",
      D: "To take away",
      E: "To increase height",
    },
    correct: "A",
    explanation:
      "Bring up = mengangkat topik dalam percakapan, juga bisa berarti membesarkan anak." +
      "\n\n" +
      "👉 Tips: Bayangkan mengangkat (bring up) sesuatu ke atas meja diskusi.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “maintain” is closest in meaning to:",
    options: {
      A: "Repair",
      B: "Keep",
      C: "Destroy",
      D: "Forget",
      E: "Lose",
    },
    correct: "B",
    explanation:
      "Maintain = menjaga, mempertahankan agar tetap ada. Sinonim = keep, preserve." +
      "\n\n" +
      "👉 Tips: Ingat maintenance → menjaga mesin agar tetap berfungsi.",
  },
  {
    type: "Vocabulary – Synonym",
    question: "The word “attempt” is closest in meaning to:",
    options: {
      A: "Try",
      B: "Fail",
      C: "Refuse",
      D: "Ignore",
      E: "Prevent",
    },
    correct: "A",
    explanation:
      "Attempt = usaha, percobaan. Sinonimnya try." +
      "\n\n" +
      "👉 Tips: Ingat frasa “suicide attempt” = percobaan bunuh diri → artinya mencoba.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “public” is:",
    options: {
      A: "Common",
      B: "Open",
      C: "Private",
      D: "Free",
      E: "Shared",
    },
    correct: "C",
    explanation:
      "Public = terbuka untuk umum. Antonimnya private = pribadi, tertutup." +
      "\n\n" +
      "👉 Tips: Public school vs private school → terbuka vs milik individu.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “burn the midnight oil” means:",
    options: {
      A: "To waste time",
      B: "To work late into the night",
      C: "To save electricity",
      D: "To cook dinner",
      E: "To feel sleepy",
    },
    correct: "B",
    explanation:
      "Dulu orang belajar malam menggunakan lampu minyak → makna idiom: belajar/kerja lembur." +
      "\n\n" +
      "👉 Tips: Bayangkan menyalakan lampu minyak hingga larut malam.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “put off” means:",
    options: {
      A: "Postpone",
      B: "Continue",
      C: "Finish",
      D: "Approve",
      E: "Decide",
    },
    correct: "A",
    explanation:
      "Put off = menunda sesuatu." +
      "\n\n" +
      "👉 Tips: Bayangkan meletakkan sesuatu “off” ke samping → tidak dikerjakan sekarang.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “sufficient” is closest in meaning to:",
    options: {
      A: "Lacking",
      B: "Enough",
      C: "Small",
      D: "Rare",
      E: "Extra",
    },
    correct: "B",
    explanation:
      "Sufficient = cukup, memadai. Sinonim: enough, adequate." +
      "\n\n" +
      "👉 Tips: Ingat lawannya insufficient (tidak cukup).",
  },

  // --- SOAL 36-45 ---
  {
    type: "Vocabulary – Synonym",
    question: "The word “purchase” is closest in meaning to:",
    options: {
      A: "Sell",
      B: "Buy",
      C: "Borrow",
      D: "Exchange",
      E: "Take",
    },
    correct: "B",
    explanation:
      "Purchase = membeli. Sinonimnya = buy." +
      "\n\n" +
      "👉 Tips: Ingat struk toko sering tertulis purchased items.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “accept” is:",
    options: {
      A: "Approve",
      B: "Agree",
      C: "Reject",
      D: "Support",
      E: "Welcome",
    },
    correct: "C",
    explanation:
      "Accept = menerima. Antonimnya reject = menolak." +
      "\n\n" +
      "👉 Tips: Bayangkan lamaran kerja: accepted = diterima, rejected = ditolak.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “hit the nail on the head” means:",
    options: {
      A: "To do something wrong",
      B: "To be exactly correct",
      C: "To injure yourself",
      D: "To speak slowly",
      E: "To fix something",
    },
    correct: "B",
    explanation:
      "Artinya tepat sekali, sama seperti memukul kepala paku langsung." +
      "\n\n" +
      "👉 Tips: Bayangkan palu memukul tepat di kepala paku → hasil sempurna.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “look into” means:",
    options: {
      A: "Investigate",
      B: "Look at",
      C: "Look up",
      D: "Look for",
      E: "Look away",
    },
    correct: "A",
    explanation:
      "Look into = menyelidiki." +
      "\n\n" +
      "👉 Tips: Bayangkan polisi benar-benar “melihat ke dalam” kasus.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “demonstrate” is closest in meaning to:",
    options: {
      A: "Show",
      B: "Hide",
      C: "Break",
      D: "Forget",
      E: "Deny",
    },
    correct: "A",
    explanation:
      "Demonstrate = menunjukkan, memperlihatkan dengan contoh." +
      "\n\n" +
      "👉 Tips: Ingat demonstrasi mahasiswa → mereka “menunjukkan” tuntutannya.",
  },

  {
    type: "Vocabulary – Synonym",
    question: "The word “obtain” is closest in meaning to:",
    options: {
      A: "Lose",
      B: "Get",
      C: "Refuse",
      D: "Miss",
      E: "Hide",
    },
    correct: "B",
    explanation:
      "Obtain = memperoleh, sinonim get/acquire." +
      "\n\n" +
      "👉 Tips: Ingat frasa “obtain permission” = mendapatkan izin.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “advance” is:",
    options: {
      A: "Progress",
      B: "Improve",
      C: "Retreat",
      D: "Develop",
      E: "Promote",
    },
    correct: "C",
    explanation:
      "Advance = maju, antonimnya retreat = mundur." +
      "\n\n" +
      "👉 Tips: Bayangkan pasukan perang: advance (maju menyerang) vs retreat (mundur).",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “hit the books” means:",
    options: {
      A: "To start studying",
      B: "To throw books",
      C: "To stop learning",
      D: "To sell books",
      E: "To write books",
    },
    correct: "A",
    explanation:
      "Hit the books = belajar serius." +
      "\n\n" +
      "👉 Tips: Bayangkan memukul buku ke meja lalu belajar keras.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “hand in” means:",
    options: {
      A: "Submit",
      B: "Reject",
      C: "Take",
      D: "Hide",
      E: "Steal",
    },
    correct: "A",
    explanation:
      "Hand in = menyerahkan tugas/pekerjaan." +
      "\n\n" +
      "👉 Tips: Bayangkan guru berkata: “Please hand in your homework.”",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “assume” is closest in meaning to:",
    options: {
      A: "Guess",
      B: "Forget",
      C: "Refuse",
      D: "Lose",
      E: "Hide",
    },
    correct: "A",
    explanation:
      "Assume = menganggap, berasumsi tanpa bukti lengkap. Sinonim dekat = suppose/guess." +
      "\n\n" +
      "👉 Tips: Ingat assumption dalam riset = hal yang dianggap benar sementara.",
  },
  {
    type: "Vocabulary – Synonym",
    question: "The word “convey” is closest in meaning to:",
    options: {
      A: "Hide",
      B: "Communicate",
      C: "Ignore",
      D: "Prevent",
      E: "Remove",
    },
    correct: "B",
    explanation:
      "Convey = menyampaikan pesan, ide, atau emosi. Sinonimnya communicate, express." +
      "\n\n" +
      "👉 Tips: Ingat conveyor belt = menyampaikan barang.",
  },

  // --- SOAL 56-65 ---
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “diminish” is:",
    options: {
      A: "Increase",
      B: "Reduce",
      C: "Expand",
      D: "Maximize",
      E: "Grow",
    },
    correct: "A",
    explanation:
      "Diminish = berkurang, mengurangi. Antonimnya adalah increase, expand, maximize, grow." +
      "\n\n" +
      "Jawaban yang paling umum adalah Increase. " +
      "\n\n" +
      "👉 Tips: Ingat “diminishing returns” dalam ekonomi → hasil makin berkurang.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “optimistic” is:",
    options: {
      A: "Pessimistic",
      B: "Realistic",
      C: "Positive",
      D: "Confident",
      E: "Hopeful",
    },
    correct: "A",
    explanation:
      "Optimistic = berpandangan positif. Lawannya pessimistic = berpandangan negatif." +
      "\n\n" +
      "👉 Tips: Optimist melihat gelas setengah penuh, pessimist setengah kosong.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “spill the beans” means:",
    options: {
      A: "To cook food",
      B: "To reveal a secret",
      C: "To make a mess",
      D: "To argue",
      E: "To waste time",
    },
    correct: "B",
    explanation:
      "Artinya membocorkan rahasia." +
      "\n\n" +
      "👉 Tips: Bayangkan kantong kacang tumpah → semua orang bisa melihat isinya.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “turn down” means:",
    options: {
      A: "Accept",
      B: "Reject",
      C: "Increase",
      D: "Build",
      E: "Support",
    },
    correct: "B",
    explanation:
      "Turn down = menolak tawaran, juga bisa berarti mengecilkan volume." +
      "\n\n" +
      "👉 Tips: Bayangkan menolak lamaran → “I’m sorry, I must turn down your proposal.”",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “generate” is closest in meaning to:",
    options: {
      A: "Destroy",
      B: "Produce",
      C: "Hide",
      D: "Prevent",
      E: "Lose",
    },
    correct: "B",
    explanation:
      "Generate = menghasilkan (energi, ide, pendapatan)." +
      "\n\n" +
      "👉 Tips: Generator listrik menghasilkan energi.",
  },
  {
    type: "Vocabulary – Synonym",
    question: "The word “enhance” is closest in meaning to:",
    options: {
      A: "Improve",
      B: "Reduce",
      C: "Cancel",
      D: "Hide",
      E: "Forget",
    },
    correct: "A",
    explanation:
      "Enhance = meningkatkan kualitas, memperbaiki." +
      "\n\n" +
      "👉 Tips: Ingat photo enhancement di aplikasi edit foto.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “expand” is:",
    options: {
      A: "Enlarge",
      B: "Contract",
      C: "Increase",
      D: "Grow",
      E: "Extend",
    },
    correct: "B",
    explanation:
      "Expand = membesar, lawannya contract = menyusut." +
      "\n\n" +
      "👉 Tips: Balon expand ketika ditiup, contract ketika kempes.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “break the ice” means:",
    options: {
      A: "To start a conversation",
      B: "To fight someone",
      C: "To cause trouble",
      D: "To fail",
      E: "To escape",
    },
    correct: "A",
    explanation:
      "Break the ice = membuka percakapan dalam situasi kaku." +
      "\n\n" +
      "👉 Tips: Bayangkan es yang pecah → suasana jadi cair.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “give up” means:",
    options: {
      A: "To quit",
      B: "To continue",
      C: "To try",
      D: "To succeed",
      E: "To improve",
    },
    correct: "A",
    explanation:
      "Give up = menyerah, berhenti berusaha." +
      "\n\n" +
      "👉 Tips: Ingat kalimat motivasi: “Never give up!”",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “illustrate” is closest in meaning to:",
    options: {
      A: "Hide",
      B: "Explain with examples",
      C: "Refuse",
      D: "Reduce",
      E: "Destroy",
    },
    correct: "B",
    explanation:
      "Illustrate = menjelaskan dengan contoh/gambar." +
      "\n\n" +
      "👉 Tips: Buku anak penuh ilustrasi → membantu pemahaman.",
  },

  // --- SOAL 66-75 ---
  {
    type: "Vocabulary – Synonym",
    question: "The word “consume” is closest in meaning to:",
    options: {
      A: "Eat",
      B: "Build",
      C: "Produce",
      D: "Create",
      E: "Prevent",
    },
    correct: "A",
    explanation:
      "Consume = mengonsumsi (makan, minum, memakai energi)." +
      "\n\n" +
      "👉 Tips: Ingat consumer = orang yang mengonsumsi barang.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “include” is:",
    options: {
      A: "Add",
      B: "Exclude",
      C: "Insert",
      D: "Join",
      E: "Contain",
    },
    correct: "B",
    explanation:
      "Include = memasukkan. Lawannya exclude = mengeluarkan, tidak menyertakan." +
      "\n\n" +
      "👉 Tips: Ingat kalimat: “Price excludes tax” → pajak tidak termasuk.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “cost an arm and a leg” means:",
    options: {
      A: "Very cheap",
      B: "Very expensive",
      C: "Very fast",
      D: "Very dangerous",
      E: "Very rare",
    },
    correct: "B",
    explanation:
      "Artinya sangat mahal, seolah-olah harus membayar dengan anggota tubuh." +
      "\n\n" +
      "👉 Tips: Bayangkan beli barang sampai harus “menukar tangan dan kaki”.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “run into” means:",
    options: {
      A: "To meet by chance",
      B: "To escape",
      C: "To chase",
      D: "To hide",
      E: "To plan",
    },
    correct: "A",
    explanation:
      "Run into = bertemu tidak sengaja." +
      "\n\n" +
      "👉 Tips: Bayangkan “bertabrakan” dengan orang di jalan lalu jadi ngobrol.",
  },
  {
    type: "Vocabulary – Academic Word",
    question: "The word “contrast” is closest in meaning to:",
    options: {
      A: "Difference",
      B: "Similarity",
      C: "Support",
      D: "Agreement",
      E: "Connection",
    },
    correct: "A",
    explanation:
      "Contrast = perbedaan yang jelas antara dua hal." +
      "\n\n" +
      "👉 Tips: Ingat “high contrast” di foto → perbedaan warna yang mencolok.",
  },
  {
    type: "Vocabulary – Synonym",
    question: "The word “acquire” is closest in meaning to:",
    options: {
      A: "Get",
      B: "Lose",
      C: "Refuse",
      D: "Hide",
      E: "Avoid",
    },
    correct: "A",
    explanation:
      "Acquire = mendapatkan, memperoleh." +
      "\n\n" +
      "👉 Tips: Ingat acquisition = perusahaan membeli/akuisisi.",
  },
  {
    type: "Vocabulary – Antonym",
    question: "The opposite of “majority” is:",
    options: {
      A: "Minority",
      B: "Total",
      C: "Group",
      D: "Half",
      E: "Number",
    },
    correct: "A",
    explanation:
      "Majority = sebagian besar. Lawannya minority = sebagian kecil." +
      "\n\n" +
      "👉 Tips: Politik: “minority group” = kelompok kecil yang berbeda.",
  },
  {
    type: "Vocabulary – Idiom",
    question: "The idiom “under the weather” means:",
    options: {
      A: "Feeling sick",
      B: "Feeling happy",
      C: "Feeling energetic",
      D: "Feeling angry",
      E: "Feeling calm",
    },
    correct: "A",
    explanation:
      "Artinya merasa tidak enak badan." +
      "\n\n" +
      "👉 Tips: Bayangkan orang kehujanan → jatuh sakit.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question: "The phrasal verb “work out” means:",
    options: {
      A: "To fail",
      B: "To exercise / find a solution",
      C: "To quit",
      D: "To break",
      E: "To sleep",
    },
    correct: "B",
    explanation:
      "Work out bisa berarti olahraga atau menemukan solusi." +
      "\n\n" +
      "👉 Tips: “Everything will work out” = semua akan terselesaikan.",
  },
  {
    type: "Vocabulary – Academic Word",
    question:
      "The word “significant” is closest in meaning to:",
    options: {
      A: "Important",
      B: "Small",
      C: "Unclear",
      D: "Rare",
      E: "Weak",
    },
    correct: "A",
    explanation:
      "Significant = penting, berarti, memiliki makna besar." +
      "\n\n" +
      "👉 Tips: Ingat istilah statistically significant dalam penelitian.",
  },

  // --- SOAL 76-85 ---
  {
    type: "Vocabulary – Synonym",
    question:
      "The word “viable” is closest in meaning to:",
    options: {
      A: "Impossible",
      B: "Practical",
      C: "Weak",
      D: "Hopeless",
      E: "Rare",
    },
    correct: "B",
    explanation:
      "Viable = dapat dijalankan, praktis, mampu bertahan. Misal: a viable solution." +
      "\n\n" +
      "👉 Tips: Ingat kata survival → terkait kemampuan hidup/berjalan.",
  },
  {
    type: "Vocabulary – Antonym",
    question:
      "The opposite of “expand” is:",
    options: {
      A: "Increase",
      B: "Shrink",
      C: "Spread",
      D: "Enlarge",
      E: "Prolong",
    },
    correct: "B",
    explanation:
      "Expand = meluas, berkembang. Lawannya shrink = menyusut, mengecil." +
      "\n\n" +
      "👉 Tips: Pikirkan baju yang menyusut setelah dicuci → shrink.",
  },
  {
    type: "Vocabulary – Idiom",
    question:
      "The idiom “hit the sack” means:",
    options: {
      A: "To go to sleep",
      B: "To get angry",
      C: "To quit a job",
      D: "To work hard",
      E: "To eat quickly",
    },
    correct: "A",
    explanation:
      "Secara literal = memukul karung, tapi idiomatik = pergi tidur." +
      "\n\n" +
      "👉 Tips: Bayangkan karung = kasur → saatnya istirahat.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question:
      "The phrasal verb “bring up” means:",
    options: {
      A: "To mention a topic",
      B: "To reject",
      C: "To hide",
      D: "To build",
      E: "To stop",
    },
    correct: "A",
    explanation:
      "Bring up = mengangkat topik pembicaraan. Bisa juga artinya membesarkan anak." +
      "\n\n" +
      "👉 Tips: Bayangkan seseorang “mengangkat” sesuatu ke percakapan.",
  },
  {
    type: "Vocabulary – Academic Word",
    question:
      "The word “allocate” is closest in meaning to:",
    options: {
      A: "Divide",
      B: "Hide",
      C: "Collect",
      D: "Reject",
      E: "Spend",
    },
    correct: "A",
    explanation:
      "Allocate = membagi sumber daya (uang, waktu, tenaga) untuk tujuan tertentu." +
      "\n\n" +
      "👉 Tips: Ingat allocation of budget dalam laporan keuangan.",
  },
  {
    type: "Vocabulary – Synonym",
    question:
      "The word “resilient” is closest in meaning to:",
    options: {
      A: "Weak",
      B: "Flexible and strong",
      C: "Fragile",
      D: "Vulnerable",
      E: "Lazy",
    },
    correct: "B",
    explanation:
      "Resilient = tangguh, cepat pulih dari kesulitan." +
      "\n\n" +
      "👉 Tips: Bayangkan bola karet → dipukul tapi cepat kembali.",
  },
  {
    type: "Vocabulary – Antonym",
    question:
      "The opposite of “temporary” is:",
    options: {
      A: "Short",
      B: "Permanent",
      C: "Instant",
      D: "Rare",
      E: "Fragile",
    },
    correct: "B",
    explanation:
      "Temporary = sementara. Lawannya permanent = tetap." +
      "\n\n" +
      "👉 Tips: Ingat tato sementara vs tato permanen.",
  },
  {
    type: "Vocabulary – Idiom",
    question:
      "The idiom “on the same page” means:",
    options: {
      A: "Agreeing or having the same understanding",
      B: "Reading together",
      C: "Competing",
      D: "Arguing",
      E: "Forgetting something",
    },
    correct: "A",
    explanation:
      "Artinya sejalan pemikiran, sepakat." +
      "\n\n" +
      "👉 Tips: Bayangkan dua orang membaca halaman yang sama → paham isi yang sama.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question:
      "The phrasal verb “look after” means:",
    options: {
      A: "To care for",
      B: "To search for",
      C: "To admire",
      D: "To avoid",
      E: "To check",
    },
    correct: "A",
    explanation:
      "Look after = merawat, menjaga." +
      "\n\n" +
      "👉 Tips: “Look” (melihat) + “after” (setelahnya) → memastikan seseorang baik-baik saja.",
  },
  {
    type: "Vocabulary – Academic Word",
    question:
      "The word “hypothesis” is closest in meaning to:",
    options: {
      A: "Fact",
      B: "Assumption",
      C: "Experiment",
      D: "Result",
      E: "Evidence",
    },
    correct: "B",
    explanation:
      "Hypothesis = dugaan/anggapan awal sebelum diuji." +
      "\n\n" +
      "👉 Tips: Ingat scientific method: observe → hypothesis → test.",
  },

  // --- SOAL 86-95 ---
  {
    type: "Vocabulary – Synonym",
    question:
      "The word “inevitable” is closest in meaning to:",
    options: {
      A: "Avoidable",
      B: "Unavoidable",
      C: "Unnecessary",
      D: "Rare",
      E: "Optional",
    },
    correct: "B",
    explanation:
      "Inevitable = pasti terjadi, tidak bisa dihindari." +
      "\n\n" +
      "👉 Tips: Ingat kata avoid → kebalikannya = tidak bisa dihindari.",
  },
  {
    type: "Vocabulary – Antonym",
    question:
      "The opposite of “complex” is:",
    options: {
      A: "Complicated",
      B: "Simple",
      C: "Detailed",
      D: "Confusing",
      E: "Abstract",
    },
    correct: "B",
    explanation:
      "Complex = rumit. Lawannya simple = sederhana." +
      "\n\n" +
      "👉 Tips: Ingat matematika: bilangan kompleks vs bilangan sederhana.",
  },
  {
    type: "Vocabulary – Idiom",
    question:
      "The idiom “piece of cake” means:",
    options: {
      A: "Very difficult",
      B: "Very easy",
      C: "Very tasty",
      D: "Very rare",
      E: "Very messy",
    },
    correct: "B",
    explanation:
      "Artinya sesuatu yang sangat mudah dilakukan." +
      "\n\n" +
      "👉 Tips: Bayangkan makan sepotong kue → gampang sekali.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question:
      "The phrasal verb “come across” means:",
    options: {
      A: "To find by chance",
      B: "To travel",
      C: "To argue",
      D: "To explain",
      E: "To plan",
    },
    correct: "A",
    explanation:
      "Come across = menemukan sesuatu tanpa sengaja." +
      "\n\n" +
      "👉 Tips: Bayangkan berjalan lalu tiba-tiba come across dompet di jalan.",
  },
  {
    type: "Vocabulary – Academic Word",
    question:
      "The word “justify” is closest in meaning to:",
    options: {
      A: "Argue against",
      B: "Prove or explain",
      C: "Reject",
      D: "Refuse",
      E: "Destroy",
    },
    correct: "B",
    explanation:
      "Justify = membuktikan alasan yang benar/valid." +
      "\n\n" +
      "👉 Tips: Ingat “justify your answer” di soal ujian.",
  },
  {
    type: "Vocabulary – Synonym",
    question:
      "The word “adequate” is closest in meaning to:",
    options: {
      A: "Insufficient",
      B: "Sufficient",
      C: "Poor",
      D: "Rare",
      E: "Weak",
    },
    correct: "B",
    explanation:
      "Adequate = cukup, memadai. Sinonim: sufficient." +
      "\n\n" +
      "👉 Tips: Ingat kalimat “adequate resources” = sumber daya yang cukup.",
  },
  {
    type: "Vocabulary – Antonym",
    question:
      "The opposite of “internal” is:",
    options: {
      A: "Inner",
      B: "Inward",
      C: "External",
      D: "Inside",
      E: "Personal",
    },
    correct: "C",
    explanation:
      "Internal = dalam, external = luar." +
      "\n\n" +
      "👉 Tips: Ingat “internal organs” (organ dalam) vs “external environment”.",
  },
  {
    type: "Vocabulary – Idiom",
    question:
      "The idiom “burn the midnight oil” means:",
    options: {
      A: "To waste time",
      B: "To study or work late into the night",
      C: "To sleep early",
      D: "To give up",
      E: "To relax",
    },
    correct: "B",
    explanation:
      "Artinya lembur sampai larut malam." +
      "\n\n" +
      "👉 Tips: Bayangkan zaman dulu orang belajar dengan lampu minyak sampai tengah malam.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question:
      "The phrasal verb “put off” means:",
    options: {
      A: "To postpone",
      B: "To cancel",
      C: "To accept",
      D: "To remove",
      E: "To support",
    },
    correct: "A",
    explanation:
      "Put off = menunda." +
      "\n\n" +
      "👉 Tips: Ingat kalimat: “Don’t put off your homework.”",
  },
  {
    type: "Vocabulary – Academic Word",
    question:
      "The word “contradict” is closest in meaning to:",
    options: {
      A: "Support",
      B: "Oppose",
      C: "Agree",
      D: "Confirm",
      E: "Prove",
    },
    correct: "B",
    explanation:
      "Contradict = bertentangan, menentang pernyataan lain." +
      "\n\n" +
      "👉 Tips: Ingat “contradiction” = perbedaan pendapat.",
  },

  // --- SOAL 96-100 ---
  {
    type: "Vocabulary – Synonym",
    question:
      "The word “plentiful” is closest in meaning to:",
    options: {
      A: "Scarce",
      B: "Abundant",
      C: "Rare",
      D: "Minimal",
      E: "Empty",
    },
    correct: "B",
    explanation:
      "Plentiful = melimpah, sinonim abundant." +
      "\n\n" +
      "👉 Tips: Ingat kata “plenty” = banyak.",
  },
  {
    type: "Vocabulary – Antonym",
    question:
      "The opposite of “ancient” is:",
    options: {
      A: "Modern",
      B: "Old",
      C: "Historic",
      D: "Classic",
      E: "Antique",
    },
    correct: "A",
    explanation:
      "Ancient = kuno, lawannya modern = masa kini." +
      "\n\n" +
      "👉 Tips: Ancient Egypt vs Modern Egypt.",
  },
  {
    type: "Vocabulary – Idiom",
    question:
      "The idiom “hit the nail on the head” means:",
    options: {
      A: "To be exactly correct",
      B: "To make a mistake",
      C: "To hurt someone",
      D: "To miss the point",
      E: "To fix something",
    },
    correct: "A",
    explanation:
      "Artinya tepat sekali dalam menjelaskan sesuatu." +
      "\n\n" +
      "👉 Tips: Bayangkan memukul paku tepat di kepala → sempurna.",
  },
  {
    type: "Vocabulary – Phrasal Verb",
    question:
      "The phrasal verb “set up” means:",
    options: {
      A: "To establish",
      B: "To destroy",
      C: "To hide",
      D: "To stop",
      E: "To break",
    },
    correct: "A",
    explanation:
      "Set up = mendirikan, memulai (bisnis, sistem)." +
      "\n\n" +
      "👉 Tips: Ingat “set up a company”.",
  },
  {
    type: "Vocabulary – Academic Word",
    question:
      "The word “innovative” is closest in meaning to:",
    options: {
      A: "Traditional",
      B: "Creative",
      C: "Ordinary",
      D: "Boring",
      E: "Common",
    },
    correct: "B",
    explanation:
      "Innovative = penuh ide baru, kreatif, berbeda dari tradisi." +
      "\n\n" +
      "👉 Tips: Kata dasarnya innovation = pembaruan.",
  },
];

export default vocabQuestions;
