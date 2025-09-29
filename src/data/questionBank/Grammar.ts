const grammarQuestions = [
  // --- SOAL 1-10 ---
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Choose the correct sentence:\n\na) The list of items are on the table.\nb) The list of items is on the table.\nc) The lists of item is on the table.\nd) The lists of item are on the table.\ne) The list of items be on the table.",
    options: {
      A: "The list of items are on the table.",
      B: "The list of items is on the table.",
      C: "The lists of item is on the table.",
      D: "The lists of item are on the table.",
      E: "The list of items be on the table.",
    },
    correct: "B",
    explanation:
      "Kata benda utama adalah list (tunggal), bukan items. Subjek tunggal membutuhkan kata kerja tunggal, yaitu is. Banyak pelajar terkecoh karena melihat items (jamak).",
  },
  {
    type: "Grammar – Verb Tense",
    question:
      "Which sentence is correct?\n\na) She go to school every day.\nb) She goes to school every day.\nc) She going to school every day.\nd) She gone to school every day.\ne) She is go to school every day.",
    options: {
      A: "She go to school every day.",
      B: "She goes to school every day.",
      C: "She going to school every day.",
      D: "She gone to school every day.",
      E: "She is go to school every day.",
    },
    correct: "B",
    explanation:
      "Simple Present Tense dengan subjek orang ketiga tunggal (she/he/it) membutuhkan akhiran -s, jadi goes. Hal ini menunjukkan kebiasaan atau rutinitas.",
  },
  {
    type: "Grammar – Pronoun Reference",
    question:
      "Choose the correct sentence:\n\na) Everyone should bring their pencil.\nb) Everyone should bring his or her pencil.\nc) Everyone should bring its pencil.\nd) Everyone should bring they pencil.\ne) Everyone should bring them pencil.",
    options: {
      A: "Everyone should bring their pencil.",
      B: "Everyone should bring his or her pencil.",
      C: "Everyone should bring its pencil.",
      D: "Everyone should bring they pencil.",
      E: "Everyone should bring them pencil.",
    },
    correct: "B",
    explanation:
      "Everyone adalah kata benda tunggal (singular), sehingga kata ganti yang mengacu padanya juga harus tunggal, yaitu his or her. Dalam aturan formal, tidak tepat menggunakan their untuk subjek tunggal.",
  },
  {
    type: "Grammar – Parallelism",
    question:
      "Which sentence is correct?\n\na) She likes swimming, to run, and cycling.\nb) She likes swimming, running, and cycling.\nc) She likes to swim, running, and to cycle.\nd) She likes swim, run, and cycling.\ne) She likes to swimming, to running, and to cycling.",
    options: {
      A: "She likes swimming, to run, and cycling.",
      B: "She likes swimming, running, and cycling.",
      C: "She likes to swim, running, and to cycle.",
      D: "She likes swim, run, and cycling.",
      E: "She likes to swimming, to running, and to cycling.",
    },
    correct: "B",
    explanation:
      "Prinsip parallelism menyatakan bahwa semua item dalam daftar harus memiliki bentuk kata yang konsisten. Dalam hal ini, semua kata kerja harus dalam bentuk gerund (-ing).",
  },
  {
    type: "Grammar – Word Order",
    question:
      "Choose the correct sentence:\n\na) Never I have seen such a beautiful sunset.\nb) I never have seen such a beautiful sunset.\nc) Never have I seen such a beautiful sunset.\nd) I have never saw such a beautiful sunset.\ne) I never saw have such a beautiful sunset.",
    options: {
      A: "Never I have seen such a beautiful sunset.",
      B: "I never have seen such a beautiful sunset.",
      C: "Never have I seen such a beautiful sunset.",
      D: "I have never saw such a beautiful sunset.",
      E: "I never saw have such a beautiful sunset.",
    },
    correct: "C",
    explanation:
      "Ketika kalimat dimulai dengan kata negatif seperti Never, urutan kata kerja (verb) dan subjek dibalik. Ini dikenal sebagai inversion.",
  },
  {
    type: "Grammar – Comparison",
    question:
      "Choose the correct sentence:\n\na) This book is more interesting than that one.\nb) This book is interestinger than that one.\nc) This book is most interesting than that one.\nd) This book is more interesting that that one.\ne) This book is interesting more than that one.",
    options: {
      A: "This book is more interesting than that one.",
      B: "This book is interestinger than that one.",
      C: "This book is most interesting than that one.",
      D: "This book is more interesting that that one.",
      E: "This book is interesting more than that one.",
    },
    correct: "A",
    explanation:
      "Kata sifat interesting memiliki lebih dari dua suku kata, sehingga perbandingan menggunakan more… than.",
  },
  {
    type: "Grammar – Passive Voice",
    question:
      "Choose the correct passive form:\n\n“The teacher explains the lesson.”\n\na) The lesson explains by the teacher.\nb) The lesson is explained by the teacher.\nc) The lesson was explain by the teacher.\nd) The lesson explained by the teacher.\ne) The lesson is explaining by the teacher.",
    options: {
      A: "The lesson explains by the teacher.",
      B: "The lesson is explained by the teacher.",
      C: "The lesson was explain by the teacher.",
      D: "The lesson explained by the teacher.",
      E: "The lesson is explaining by the teacher.",
    },
    correct: "B",
    explanation:
      "Dalam Simple Present Tense, rumus passive voice adalah Object + is/am/are + past participle (V3). Objeknya the lesson, sehingga menjadi is explained.",
  },
  {
    type: "Grammar – Conditionals",
    question:
      "Choose the correct conditional sentence:\n\na) If it will rain tomorrow, we cancel the trip.\nb) If it rains tomorrow, we will cancel the trip.\nc) If it rained tomorrow, we will cancel the trip.\nd) If it rains tomorrow, we cancel the trip.\ne) If it rain tomorrow, we cancel the trip.",
    options: {
      A: "If it will rain tomorrow, we cancel the trip.",
      B: "If it rains tomorrow, we will cancel the trip.",
      C: "If it rained tomorrow, we will cancel the trip.",
      D: "If it rains tomorrow, we cancel the trip.",
      E: "If it rain tomorrow, we cancel the trip.",
    },
    correct: "B",
    explanation:
      "Ini adalah First Conditional yang digunakan untuk situasi nyata atau mungkin terjadi di masa depan. Strukturnya: If + Simple Present, Simple Future (will + V1).",
  },
  {
    type: "Grammar – Articles",
    question:
      "Choose the correct sentence:\n\na) She is teacher.\nb) She is a teacher.\nc) She is the teacher.\nd) She is teachers.\ne) She is an teacher.",
    options: {
      A: "She is teacher.",
      B: "She is a teacher.",
      C: "She is the teacher.",
      D: "She is teachers.",
      E: "She is an teacher.",
    },
    correct: "B",
    explanation:
      "Sebelum menyebutkan profesi yang tunggal dan tidak spesifik, kita menggunakan artikel a. Opsi the digunakan jika profesi tersebut sudah spesifik.",
  },
  {
    type: "Grammar – Word Form",
    question:
      "Choose the correct sentence:\n\na) He speaks very fluent.\nb) He speaks fluent.\nc) He speaks fluently.\nd) He fluently speaks very.\ne) He is fluently.",
    options: {
      A: "He speaks very fluent.",
      B: "He speaks fluent.",
      C: "He speaks fluently.",
      D: "He fluently speaks very.",
      E: "He is fluently.",
    },
    correct: "C",
    explanation:
      "Fluently adalah kata keterangan (adverb) yang digunakan untuk menjelaskan kata kerja speaks. Kata sifat (adjective) fluent tidak dapat menerangkan kata kerja.",
  },

  // --- SOAL 11-20 ---
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Which sentence is correct?\n\na) The news are very surprising.\nb) The news is very surprising.\nc) The news very surprising.\nd) The news be very surprising.\ne) The news were very surprising.",
    options: {
      A: "The news are very surprising.",
      B: "The news is very surprising.",
      C: "The news very surprising.",
      D: "The news be very surprising.",
      E: "The news were very surprising.",
    },
    correct: "B",
    explanation:
      "Meskipun berakhiran -s, kata news dianggap sebagai kata benda yang tidak bisa dihitung (uncountable noun) dan selalu tunggal. Jadi, kata kerja yang digunakan adalah is.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Choose the correct sentence:\n\na) Mathematics are an interesting subject.\nb) Mathematics is an interesting subject.\nc) Mathematics an interesting subject.\nd) Mathematics be an interesting subject.\ne) Mathematics were an interesting subject.",
    options: {
      A: "Mathematics are an interesting subject.",
      B: "Mathematics is an interesting subject.",
      C: "Mathematics an interesting subject.",
      D: "Mathematics be an interesting subject.",
      E: "Mathematics were an interesting subject.",
    },
    correct: "B",
    explanation:
      "Sama seperti news, nama-nama bidang ilmu seperti Mathematics, Economics, atau Physics selalu dianggap tunggal.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Choose the correct sentence:\n\na) Ten dollars are enough to buy the book.\nb) Ten dollars is enough to buy the book.\nc) Ten dollars be enough to buy the book.\nd) Ten dollars were enough to buy the book.\ne) Ten dollars enough to buy the book.",
    options: {
      A: "Ten dollars are enough to buy the book.",
      B: "Ten dollars is enough to buy the book.",
      C: "Ten dollars be enough to buy the book.",
      D: "Ten dollars were enough to buy the book.",
      E: "Ten dollars enough to buy the book.",
    },
    correct: "B",
    explanation:
      "Ketika subjek merujuk pada satuan jumlah yang tunggal (seperti uang, waktu, atau jarak), kata kerja yang digunakan adalah tunggal (is).",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Which sentence is correct?\n\na) The committee is divided in their opinion.\nb) The committee are divided in their opinion.\nc) The committee have divided opinion.\nd) The committee divided in their opinion.\ne) The committee dividing in their opinion.",
    options: {
      A: "The committee is divided in their opinion.",
      B: "The committee are divided in their opinion.",
      C: "The committee have divided opinion.",
      D: "The committee divided in their opinion.",
      E: "The committee dividing in their opinion.",
    },
    correct: "B",
    explanation:
      "Committee adalah collective noun. Kata kerja plural (are) digunakan jika anggota kelompok bertindak secara individu atau tidak sepakat.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Choose the correct sentence:\n\na) The number of students are increasing.\nb) The number of students is increasing.\nc) A number of students is increasing.\nd) The number of students were increasing.\ne) The number of students be increasing.",
    options: {
      A: "The number of students are increasing.",
      B: "The number of students is increasing.",
      C: "A number of students is increasing.",
      D: "The number of students were increasing.",
      E: "The number of students be increasing.",
    },
    correct: "B",
    explanation:
      "Frasa the number of… selalu dianggap tunggal, sehingga kata kerja yang digunakan adalah is.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Which sentence is correct?\n\na) A number of students is absent today.\nb) A number of students are absent today.\nc) A number of students be absent today.\nd) A number of students were absent yesterday.\ne) A number of students is being absent today.",
    options: {
      A: "A number of students is absent today.",
      B: "A number of students are absent today.",
      C: "A number of students be absent today.",
      D: "A number of students were absent yesterday.",
      E: "A number of students is being absent today.",
    },
    correct: "B",
    explanation:
      "Berbeda dengan the number of, frasa a number of memiliki arti 'banyak', sehingga dianggap jamak dan menggunakan kata kerja are.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Choose the correct sentence:\n\na) Neither of the answers are correct.\nb) Neither of the answers is correct.\nc) Neither of the answers were correct.\nd) Neither of the answers be correct.\ne) Neither of the answers correct.",
    options: {
      A: "Neither of the answers are correct.",
      B: "Neither of the answers is correct.",
      C: "Neither of the answers were correct.",
      D: "Neither of the answers be correct.",
      E: "Neither of the answers correct.",
    },
    correct: "B",
    explanation:
      "Kata neither selalu tunggal, sehingga kata kerja yang mengikutinya harus tunggal, yaitu is.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Choose the correct sentence:\n\na) Each of the students are responsible.\nb) Each of the students is responsible.\nc) Each of the students were responsible.\nd) Each of the students be responsible.\ne) Each of the students responsible.",
    options: {
      A: "Each of the students are responsible.",
      B: "Each of the students is responsible.",
      C: "Each of the students were responsible.",
      D: "Each of the students be responsible.",
      E: "Each of the students responsible.",
    },
    correct: "B",
    explanation:
      "Kata each selalu dianggap tunggal, terlepas dari kata benda jamak yang mengikutinya. Oleh karena itu, kata kerja yang tepat adalah is.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Which sentence is correct?\n\na) Either of the books are useful.\nb) Either of the books is useful.\nc) Either of the books were useful.\nd) Either of the books be useful.\ne) Either of the books useful.",
    options: {
      A: "Either of the books are useful.",
      B: "Either of the books is useful.",
      C: "Either of the books were useful.",
      D: "Either of the books be useful.",
      E: "Either of the books useful.",
    },
    correct: "B",
    explanation:
      "Sama seperti neither dan each, kata either juga selalu dianggap tunggal.",
  },
  {
    type: "Grammar – Subject-Verb Agreement",
    question:
      "Choose the correct sentence:\n\na) Both of the books is useful.\nb) Both of the books are useful.\nc) Both of the books be useful.\nd) Both of the books useful.\ne) Both of the books was useful.",
    options: {
      A: "Both of the books is useful.",
      B: "Both of the books are useful.",
      C: "Both of the books be useful.",
      D: "Both of the books useful.",
      E: "Both of the books was useful.",
    },
    correct: "B",
    explanation:
      "Kata both memiliki arti 'keduanya' sehingga selalu jamak dan membutuhkan kata kerja jamak (are).",
  },

  // --- SOAL 21-30 ---
  {
    type: "Grammar – Past Tense",
    question:
      "Choose the correct sentence:\n\na) Yesterday, I go to the market.\nb) Yesterday, I goes to the market.\nc) Yesterday, I gone to the market.\nd) Yesterday, I went to the market.\ne) Yesterday, I going to the market.",
    options: {
      A: "Yesterday, I go to the market.",
      B: "Yesterday, I goes to the market.",
      C: "Yesterday, I gone to the market.",
      D: "Yesterday, I went to the market.",
      E: "Yesterday, I going to the market.",
    },
    correct: "D",
    explanation:
      "Kata kunci yesterday menunjukkan bahwa kalimat ini harus menggunakan Simple Past Tense. Kata kerja yang tepat adalah bentuk lampau dari go, yaitu went.",
  },
  {
    type: "Grammar – Present Perfect",
    question:
      "Choose the correct sentence:\n\na) I have visited Paris last year.\nb) I visited Paris last year.\nc) I have ever visited Paris last year.\nd) I was visited Paris last year.\ne) I has visited Paris last year.",
    options: {
      A: "I have visited Paris last year.",
      B: "I visited Paris last year.",
      C: "I have ever visited Paris last year.",
      D: "I was visited Paris last year.",
      E: "I has visited Paris last year.",
    },
    correct: "B",
    explanation:
      "Ketika ada penanda waktu spesifik di masa lalu (seperti last year), gunakan Simple Past Tense (visited), bukan Present Perfect.",
  },
  {
    type: "Grammar – Present Perfect Continuous",
    question:
      "Choose the correct sentence:\n\na) She has studied English for two hours.\nb) She has been studying English for two hours.\nc) She studying English for two hours.\nd) She study English since two hours.\ne) She studied English since two hours.",
    options: {
      A: "She has studied English for two hours.",
      B: "She has been studying English for two hours.",
      C: "She studying English for two hours.",
      D: "She study English since two hours.",
      E: "She studied English since two hours.",
    },
    correct: "B",
    explanation:
      "Kalimat ini menggambarkan suatu tindakan yang dimulai di masa lalu dan masih berlanjut hingga sekarang. Tense yang tepat adalah Present Perfect Continuous dengan pola has been + V-ing.",
  },
  {
    type: "Grammar – Future Tense",
    question:
      "Choose the correct sentence:\n\na) Tomorrow, she will goes to the office.\nb) Tomorrow, she will go to the office.\nc) Tomorrow, she go to the office.\nd) Tomorrow, she will going to the office.\ne) Tomorrow, she goes to the office.",
    options: {
      A: "Tomorrow, she will goes to the office.",
      B: "Tomorrow, she will go to the office.",
      C: "Tomorrow, she go to the office.",
      D: "Tomorrow, she will going to the office.",
      E: "Tomorrow, she goes to the office.",
    },
    correct: "B",
    explanation:
      "Kata kerja setelah modal will harus dalam bentuk dasar (V1), tanpa akhiran -s, -ing, atau -ed.",
  },
  {
    type: "Grammar – Future Continuous",
    question:
      "Choose the correct sentence:\n\na) At this time tomorrow, I will study at the library.\nb) At this time tomorrow, I will be studying at the library.\nc) At this time tomorrow, I studying at the library.\nd) At this time tomorrow, I will studies at the library.\ne) At this time tomorrow, I will have studied at the library.",
    options: {
      A: "At this time tomorrow, I will study at the library.",
      B: "At this time tomorrow, I will be studying at the library.",
      C: "At this time tomorrow, I studying at the library.",
      D: "At this time tomorrow, I will studies at the library.",
      E: "At this time tomorrow, I will have studied at the library.",
    },
    correct: "B",
    explanation:
      "Frasa at this time tomorrow menandakan bahwa suatu tindakan akan sedang berlangsung pada waktu tertentu di masa depan. Tense yang tepat adalah Future Continuous dengan pola will be + V-ing.",
  },
  {
    type: "Grammar – Passive Voice",
    question:
      "Active: “They built this bridge in 1990.”\n\nChoose the correct passive:\n\na) This bridge built in 1990.\nb) This bridge was built in 1990.\nc) This bridge is built in 1990.\nd) This bridge were built in 1990.\ne) This bridge was build in 1990.",
    options: {
      A: "This bridge built in 1990.",
      B: "This bridge was built in 1990.",
      C: "This bridge is built in 1990.",
      D: "This bridge were built in 1990.",
      E: "This bridge was build in 1990.",
    },
    correct: "B",
    explanation:
      "Kalimat aktifnya menggunakan Simple Past Tense. Bentuk pasifnya adalah was/were + V3. Karena subjeknya tunggal (This bridge), digunakan was built.",
  },
  {
    type: "Grammar – Passive Voice",
    question:
      "Active: “The manager is reviewing the report.”\n\nChoose the correct passive:\n\na) The report is reviewed by the manager.\nb) The report is being reviewed by the manager.\nc) The report reviewed by the manager.\nd) The report has reviewed by the manager.\ne) The report being reviewed by the manager.",
    options: {
      A: "The report is reviewed by the manager.",
      B: "The report is being reviewed by the manager.",
      C: "The report reviewed by the manager.",
      D: "The report has reviewed by the manager.",
      E: "The report being reviewed by the manager.",
    },
    correct: "B",
    explanation:
      "Kalimat aktifnya menggunakan Present Continuous Tense. Bentuk pasifnya adalah is/are + being + V3. Karena subjeknya tunggal (The report), digunakan is being reviewed.",
  },
  {
    type: "Grammar – Passive Voice",
    question:
      "Active: “They have completed the project.”\n\nChoose the correct passive:\n\na) The project completed.\nb) The project is completed.\nc) The project has completed.\nd) The project has been completed.\ne) The project is completing.",
    options: {
      A: "The project completed.",
      B: "The project is completed.",
      C: "The project has completed.",
      D: "The project has been completed.",
      E: "The project is completing.",
    },
    correct: "D",
    explanation:
      "Kalimat aktifnya menggunakan Present Perfect Tense. Bentuk pasifnya adalah has/have + been + V3. Karena subjeknya tunggal (The project), digunakan has been completed.",
  },
  {
    type: "Grammar – Passive Voice",
    question:
      "Active: “They will announce the winner tomorrow.”\n\nChoose the correct passive:\n\na) The winner will announce tomorrow.\nb) The winner will be announced tomorrow.\nc) The winner is announced tomorrow.\nd) The winner announced tomorrow.\ne) The winner will being announced tomorrow.",
    options: {
      A: "The winner will announce tomorrow.",
      B: "The winner will be announced tomorrow.",
      C: "The winner is announced tomorrow.",
      D: "The winner announced tomorrow.",
      E: "The winner will being announced tomorrow.",
    },
    correct: "B",
    explanation:
      "Kalimat aktifnya menggunakan Simple Future Tense. Bentuk pasifnya adalah will be + V3.",
  },
  {
    type: "Grammar – Passive Voice",
    question:
      "Active: “They are going to open a new store next month.”\n\nChoose the correct passive:\n\na) A new store is going to opened next month.\nb) A new store is going to open next month.\nc) A new store is going to be opened next month.\nd) A new store going to be opened next month.\ne) A new store is going opening next month.",
    options: {
      A: "A new store is going to opened next month.",
      B: "A new store is going to open next month.",
      C: "A new store is going to be opened next month.",
      D: "A new store going to be opened next month.",
      E: "A new store is going opening next month.",
    },
    correct: "C",
    explanation:
      "Kalimat aktifnya menggunakan frasa be going to. Bentuk pasifnya adalah be going to be + V3.",
  },

  // --- SOAL 31-40 ---
  {
    type: "Grammar – Parallelism",
    question:
      "Choose the correct sentence:\n\na) He enjoys reading, to write, and to travel.\nb) He enjoys reading, writing, and traveling.\nc) He enjoys to read, writing, and to travel.\nd) He enjoys read, write, and travel.\ne) He enjoys to reading, to writing, and to traveling.",
    options: {
      A: "He enjoys reading, to write, and to travel.",
      B: "He enjoys reading, writing, and traveling.",
      C: "He enjoys to read, writing, and to travel.",
      D: "He enjoys read, write, and travel.",
      E: "He enjoys to reading, to writing, and to traveling.",
    },
    correct: "B",
    explanation:
      "Prinsip parallelism mensyaratkan semua elemen dalam daftar harus memiliki bentuk kata yang sama. Dalam hal ini, ketiga kata kerja harus dalam bentuk gerund (-ing).",
  },
  {
    type: "Grammar – Parallelism",
    question:
      "Choose the correct sentence:\n\na) The job requires intelligence, patience, and being responsible.\nb) The job requires to be intelligent, patience, and responsibility.\nc) The job requires intelligence, patience, and responsibility.\nd) The job requires intelligent, patience, and responsible.\ne) The job requires intelligence, patient, and being responsible.",
    options: {
      A: "The job requires intelligence, patience, and being responsible.",
      B: "The job requires to be intelligent, patience, and responsibility.",
      C: "The job requires intelligence, patience, and responsibility.",
      D: "The job requires intelligent, patience, and responsible.",
      E: "The job requires intelligence, patient, and being responsible.",
    },
    correct: "C",
    explanation:
      "Dalam daftar ini, semua elemen harus berbentuk kata benda (noun): intelligence, patience, dan responsibility.",
  },
  {
    type: "Grammar – Word Order",
    question:
      "Choose the correct sentence:\n\na) Rarely she goes to the cinema.\nb) She rarely goes to the cinema.\nc) Rarely goes she to the cinema.\nd) Rarely does she go to the cinema.\ne) She goes rarely to the cinema.",
    options: {
      A: "Rarely she goes to the cinema.",
      B: "She rarely goes to the cinema.",
      C: "Rarely goes she to the cinema.",
      D: "Rarely does she go to the cinema.",
      E: "She goes rarely to the cinema.",
    },
    correct: "D",
    explanation:
      "Ketika kalimat dimulai dengan kata keterangan negatif seperti Rarely, Never, atau Seldom, kata kerja bantu (do/does/did) dibalik dengan subjek.",
  },
  {
    type: "Grammar – Word Order",
    question:
      "Choose the correct sentence:\n\na) Only after the meeting ended, he left the room.\nb) Only after the meeting ended did he leave the room.c) Only after the meeting ended he left the room.\nd) Only after the meeting ended was he leaving the room.e) Only after the meeting ended he was leave the room.",
    options: {
      A: "Only after the meeting ended, he left the room.",
      B: "Only after the meeting ended did he leave the room.",
      C: "Only after the meeting ended he left the room.",
      D: "Only after the meeting ended was he leaving the room.",
      E: "Only after the meeting ended he was leave the room.",
    },
    correct: "B",
    explanation:
      "Frasa yang diawali Only diikuti oleh adverbial (seperti after), juga memicu inversion.",
  },
  {
    type: "Grammar – Modifiers",
    question:
      "Choose the correct sentence:\n\na) Running quickly, the finish line was crossed by John.\nb) Running quickly, John crossed the finish line.\nc) The finish line, running quickly, John crossed.\nd) John, running quickly, the finish line crossed.\ne) The finish line crossed John running quickly.",
    options: {
      A: "Running quickly, the finish line was crossed by John.",
      B: "Running quickly, John crossed the finish line.",
      C: "The finish line, running quickly, John crossed.",
      D: "John, running quickly, the finish line crossed.",
      E: "The finish line crossed John running quickly.",
    },
    correct: "B",
    explanation:
      "Frasa pembuka Running quickly harus menjelaskan subjek yang tepat, yaitu John. Opsi lain disebut dangling modifier karena subjeknya tidak jelas.",
  },
  {
    type: "Grammar – Modifiers",
    question:
      "Choose the correct sentence:\n\na) While driving to work, a car accident was seen.\nb) While driving to work, I saw a car accident.\nc) While driving to work, the car accident saw me.\nd) While driving to work, accident was saw by me.\ne) While driving to work, seen was a car accident.",
    options: {
      A: "While driving to work, a car accident was seen.",
      B: "While driving to work, I saw a car accident.",
      C: "While driving to work, the car accident saw me.",
      D: "While driving to work, accident was saw by me.",
      E: "While driving to work, seen was a car accident.",
    },
    correct: "B",
    explanation:
      "Sama seperti sebelumnya, frasa While driving to work harus diikuti oleh subjek yang melakukan tindakan, yaitu I. Opsi lain memiliki logika yang salah.",
  },
  {
    type: "Grammar – Conditional Type 1",
    question:
      "Choose the correct sentence:\n\na) If she will study, she passes the exam.\nb) If she studies, she will pass the exam.\nc) If she study, she pass the exam.\nd) If she studied, she passes the exam.\ne) If she study, she will passed the exam.",
    options: {
      A: "If she will study, she passes the exam.",
      B: "If she studies, she will pass the exam.",
      C: "If she study, she pass the exam.",
      D: "If she studied, she passes the exam.",
      E: "If she study, she will passed the exam.",
    },
    correct: "B",
    explanation:
      "Struktur Conditional Type 1 adalah If + Simple Present, Simple Future. Pilihan (b) mengikuti pola ini (studies, will pass).",
  },
  {
    type: "Grammar – Conditional Type 2",
    question:
      "Choose the correct sentence:\n\na) If I was rich, I will buy a big house.\nb) If I were rich, I would buy a big house.\nc) If I am rich, I buy a big house.\nd) If I were rich, I will buy a big house.\ne) If I am rich, I would buy a big house.",
    options: {
      A: "If I was rich, I will buy a big house.",
      B: "If I were rich, I would buy a big house.",
      C: "If I am rich, I buy a big house.",
      D: "If I were rich, I will buy a big house.",
      E: "If I am rich, I would buy a big house.",
    },
    correct: "B",
    explanation:
      "Conditional Type 2 digunakan untuk situasi tidak nyata atau hipotetik saat ini. Strukturnya: If + Simple Past, would + V1. Untuk subjek I/he/she/it, gunakan were.",
  },
  {
    type: "Grammar – Conditional Type 3",
    question:
      "Choose the correct sentence:\n\na) If she studied harder, she would have passed the exam.\nb) If she had studied harder, she would have passed the exam.\nc) If she had studied harder, she would pass the exam.\nd) If she studied harder, she will have passed the exam.\ne) If she studies harder, she would have passed the exam.",
    options: {
      A: "If she studied harder, she would have passed the exam.",
      B: "If she had studied harder, she would have passed the exam.",
      C: "If she had studied harder, she would pass the exam.",
      D: "If she studied harder, she will have passed the exam.",
      E: "If she studies harder, she would have passed the exam.",
    },
    correct: "B",
    explanation:
      "Conditional Type 3 digunakan untuk penyesalan masa lalu. Strukturnya: If + Past Perfect, would have + V3. Pilihan (b) mengikuti pola ini (had studied, would have passed).",
  },
  {
    type: "Grammar – Mixed Conditional",
    question:
      "Choose the correct sentence:\n\na) If I had listened to you, I am happy now.\nb) If I listened to you, I would have been happy.\nc) If I had listened to you, I would be happy now.\nd) If I listened to you, I will be happy now.\ne) If I had listened to you, I will be happy now.",
    options: {
      A: "If I had listened to you, I am happy now.",
      B: "If I listened to you, I would have been happy.",
      C: "If I had listened to you, I would be happy now.",
      D: "If I listened to you, I will be happy now.",
      E: "If I had listened to you, I will be happy now.",
    },
    correct: "C",
    explanation:
      "Mixed Conditional ini menghubungkan tindakan di masa lalu (had listened) dengan konsekuensi yang terjadi sekarang (would be).",
  },

  // --- SOAL 41-50 ---
  {
    type: "Grammar – Parallelism",
    question:
      "Which sentence is correct?\n\na) She likes singing, to dance, and reading.\nb) She likes to sing, dancing, and to read.\nc) She likes singing, dancing, and reading.\nd) She likes sing, dance, and read.\ne) She likes to singing, to dancing, and to reading.",
    options: {
      A: "She likes singing, to dance, and reading.",
      B: "She likes to sing, dancing, and to read.",
      C: "She likes singing, dancing, and reading.",
      D: "She likes sing, dance, and read.",
      E: "She likes to singing, to dancing, and to reading.",
    },
    correct: "C",
    explanation:
      "Dalam daftar, semua kata kerja harus memiliki bentuk yang sama. Dalam hal ini, semua menggunakan bentuk gerund (-ing).",
  },
  {
    type: "Grammar – Parallelism",
    question:
      "Choose the correct sentence:\n\na) The teacher said that the students should complete the assignment quickly, carefully, and were accurate.\nb) The teacher said that the students should complete the assignment quickly, carefully, and accurately.\nc) The teacher said that the students should complete the assignment quick, careful, and accurate.\nd) The teacher said that the students should complete the assignment quickly, with care, and accuracy.\ne) The teacher said that the students should complete the assignment quick, carefully, and accuracy.",
    options: {
      A: "The teacher said that the students should complete the assignment quickly, carefully, and were accurate.",
      B: "The teacher said that the students should complete the assignment quickly, carefully, and accurately.",
      C: "The teacher said that the students should complete the assignment quick, careful, and accurate.",
      D: "The teacher said that the students should complete the assignment quickly, with care, and accuracy.",
      E: "The teacher said that the students should complete the assignment quick, carefully, and accuracy.",
    },
    correct: "B",
    explanation:
      "Daftar ini terdiri dari tiga kata keterangan (adverb) yang menjelaskan cara mengerjakan tugas, jadi ketiganya harus berakhiran -ly.",
  },
  {
    type: "Grammar – Parallelism",
    question:
      "Which sentence is correct?\n\na) The manager is responsible for planning, organizing, and supervise the project.\nb) The manager is responsible for planning, organizing, and supervising the project.\nc) The manager is responsible for planning, organization, and supervising the project.\nd) The manager is responsible for planning, organizing, and supervision the project.\ne) The manager is responsible for plan, organize, and supervise the project.",
    options: {
      A: "The manager is responsible for planning, organizing, and supervise the project.",
      B: "The manager is responsible for planning, organizing, and supervising the project.",
      C: "The manager is responsible for planning, organization, and supervising the project.",
      D: "The manager is responsible for planning, organizing, and supervision the project.",
      E: "The manager is responsible for plan, organize, and supervise the project.",
    },
    correct: "B",
    explanation:
      "Setelah preposisi for, kata kerja yang mengikuti harus dalam bentuk gerund (-ing). Oleh karena itu, semua elemen dalam daftar harus memiliki bentuk yang sama.",
  },
  {
    type: "Grammar – Pronoun Reference",
    question:
      "Choose the correct sentence:\n\na) When Sarah met Anna, she was very happy.\nb) When Sarah met Anna, Sarah was very happy.\nc) When Sarah met Anna, Anna very happy.\nd) When Sarah met Anna, was very happy.\ne) When Sarah met Anna, it was very happy.",
    options: {
      A: "When Sarah met Anna, she was very happy.",
      B: "When Sarah met Anna, Sarah was very happy.",
      C: "When Sarah met Anna, Anna very happy.",
      D: "When Sarah met Anna, was very happy.",
      E: "When Sarah met Anna, it was very happy.",
    },
    correct: "B",
    explanation:
      "Opsi (a) ambigu karena she bisa merujuk ke Sarah atau Anna. Opsi (b) menghilangkan ambiguitas dengan menyebutkan nama Sarah secara eksplisit.",
  },
  {
    type: "Grammar – Pronoun Agreement",
    question:
      "Which sentence is correct?\n\na) Everyone must bring their book.\nb) Everyone must bring his or her book.\nc) Everyone must bring his book.\nd) Everyone must bring her book.\ne) Everyone must bring its book.",
    options: {
      A: "Everyone must bring their book.",
      B: "Everyone must bring his or her book.",
      C: "Everyone must bring his book.",
      D: "Everyone must bring her book.",
      E: "Everyone must bring its book.",
    },
    correct: "B",
    explanation:
      "Everyone adalah subjek tunggal. Aturan formal mensyaratkan kata ganti singular (his or her) untuk merujuk padanya.",
  },
  {
    type: "Grammar – Pronoun Consistency",
    question:
      "Choose the correct sentence:\n\na) If a student wants to succeed, they must study hard.\nb) If a student wants to succeed, he or she must study hard.\nc) If a student wants to succeed, we must study hard.\nd) If a student wants to succeed, you must study hard.\ne) If a student wants to succeed, it must study hard.",
    options: {
      A: "If a student wants to succeed, they must study hard.",
      B: "If a student wants to succeed, he or she must study hard.",
      C: "If a student wants to succeed, we must study hard.",
      D: "If a student wants to succeed, you must study hard.",
      E: "If a student wants to succeed, it must study hard.",
    },
    correct: "B",
    explanation:
      "Subjek a student adalah tunggal, sehingga kata ganti yang merujuk padanya harus konsisten, yaitu he or she.",
  },
  {
    type: "Grammar – Modifiers",
    question:
      "Choose the correct sentence:\n\na) Running down the street, the backpack fell from John.\nb) Running down the street, John’s backpack fell.\nc) Running down the street, John dropped his backpack.\nd) Running down the street, the street was crowded.\ne) Running down the street, his backpack was lost.",
    options: {
      A: "Running down the street, the backpack fell from John.",
      B: "Running down the street, John’s backpack fell.",
      C: "Running down the street, John dropped his backpack.",
      D: "Running down the street, the street was crowded.",
      E: "Running down the street, his backpack was lost.",
    },
    correct: "C",
    explanation:
      "Frasa Running down the street harus menjelaskan subjek yang tepat setelah koma, yaitu John.",
  },
  {
    type: "Grammar – Dangling Modifier",
    question:
      "Choose the correct sentence:\n\na) To improve his health, exercise regularly was recommended.\nb) To improve his health, John exercises regularly.\nc) To improve his health, the exercise was done by John.\nd) To improve his health, regularly exercise is important.\ne) To improve his health, exercising regularly is his goal.",
    options: {
      A: "To improve his health, exercise regularly was recommended.",
      B: "To improve his health, John exercises regularly.",
      C: "To improve his health, the exercise was done by John.",
      D: "To improve his health, regularly exercise is important.",
      E: "To improve his health, exercising regularly is his goal.",
    },
    correct: "B",
    explanation:
      "Frasa To improve his health harus diikuti oleh subjek yang tepat yang ingin meningkatkan kesehatannya, yaitu John.",
  },
  {
    type: "Grammar – Misplaced Modifier",
    question:
      "Choose the correct sentence:\n\na) She almost drove her kids to school every day.\nb) She drove her kids almost to school every day.\nc) She drove almost her kids to school every day.\nd) She drove her kids to school almost every day.\ne) Almost she drove her kids to school every day.",
    options: {
      A: "She almost drove her kids to school every day.",
      B: "She drove her kids almost to school every day.",
      C: "She drove almost her kids to school every day.",
      D: "She drove her kids to school almost every day.",
      E: "Almost she drove her kids to school every day.",
    },
    correct: "D",
    explanation:
      "Kata keterangan almost harus ditempatkan tepat di sebelah kata yang dijelaskannya. Dalam hal ini, every day yang hampir terjadi.",
  },
  {
    type: "Grammar – Modifiers",
    question:
      "Choose the correct sentence:\n\na) The man bought a car with leather seats at the dealership.\nb) The man bought a car at the dealership with leather seats.\nc) The man with leather seats bought a car at the dealership.\nd) At the dealership, the man with leather seats bought a car.\ne) With leather seats, the man bought a car at the dealership.",
    options: {
      A: "The man bought a car with leather seats at the dealership.",
      B: "The man bought a car at the dealership with leather seats.",
      C: "The man with leather seats bought a car at the dealership.",
      D: "At the dealership, the man with leather seats bought a car.",
      E: "With leather seats, the man bought a car at the dealership.",
    },
    correct: "A",
    explanation:
      "Frasa with leather seats harus ditempatkan sedekat mungkin dengan kata yang dijelaskannya, yaitu a car. Opsi (a) adalah yang paling jelas.",
  },

  // --- SOAL 51-60 ---
  {
    type: "Grammar – Subjunctive",
    question:
      "Choose the correct sentence:\n\na) The teacher suggested that he studies harder.\nb) The teacher suggested that he study harder.\nc) The teacher suggested him to study harder.\nd) The teacher suggested that he studied harder.\ne) The teacher suggested he studying harder.",
    options: {
      A: "The teacher suggested that he studies harder.",
      B: "The teacher suggested that he study harder.",
      C: "The teacher suggested him to study harder.",
      D: "The teacher suggested that he studied harder.",
      E: "The teacher suggested he studying harder.",
    },
    correct: "B",
    explanation:
      "Setelah kata kerja yang menyatakan saran, permintaan, atau keharusan (seperti suggested), kata kerja yang mengikuti that harus dalam bentuk dasar (bare infinitive) tanpa -s.",
  },
  {
    type: "Grammar – Subjunctive",
    question:
      "Which sentence is correct?\n\na) It is important that every student is present.\nb) It is important that every student be present.\nc) It is important that every student are present.\nd) It is important that every student being present.\ne) It is important that every student present.",
    options: {
      A: "It is important that every student is present.",
      B: "It is important that every student be present.",
      C: "It is important that every student are present.",
      D: "It is important that every student being present.",
      E: "It is important that every student present.",
    },
    correct: "B",
    explanation:
      "Dalam struktur subjunctive seperti ini, kata kerja yang digunakan adalah bentuk dasar be, bukan is atau are.",
  },
  {
    type: "Grammar – Conditional Type 1",
    question:
      "Choose the correct sentence:\n\na) If it rains tomorrow, we will cancel the picnic.\nb) If it will rain tomorrow, we will cancel the picnic.\nc) If it rains tomorrow, we cancel the picnic.\nd) If it rained tomorrow, we would cancel the picnic.\ne) If it rains tomorrow, we would cancel the picnic.",
    options: {
      A: "If it rains tomorrow, we will cancel the picnic.",
      B: "If it will rain tomorrow, we will cancel the picnic.",
      C: "If it rains tomorrow, we cancel the picnic.",
      D: "If it rained tomorrow, we would cancel the picnic.",
      E: "If it rains tomorrow, we would cancel the picnic.",
    },
    correct: "A",
    explanation:
      "Struktur yang benar untuk Conditional Type 1 adalah If + Simple Present, Simple Future. Pilihan (a) mengikuti pola ini (rains, will cancel).",
  },
  {
    type: "Grammar – Conditional Type 2",
    question:
      "Which sentence is correct?\n\na) If I am rich, I will buy a big house.\nb) If I were rich, I would buy a big house.\nc) If I was rich, I will buy a big house.\nd) If I would be rich, I would buy a big house.\ne) If I were rich, I will buy a big house.",
    options: {
      A: "If I am rich, I will buy a big house.",
      B: "If I were rich, I would buy a big house.",
      C: "If I was rich, I will buy a big house.",
      D: "If I would be rich, I would buy a big house.",
      E: "If I were rich, I will buy a big house.",
    },
    correct: "B",
    explanation:
      "Untuk Conditional Type 2 yang menyatakan hal yang tidak nyata di masa sekarang, kita menggunakan were untuk semua subjek, termasuk I.",
  },
  {
    type: "Grammar – Conditional Type 3",
    question:
      "Choose the correct sentence:\n\na) If I studied harder, I would have passed the exam.\nb) If I had studied harder, I would have passed the exam.\nc) If I study harder, I would have passed the exam.\nd) If I have studied harder, I will have passed the exam.\ne) If I had studied harder, I will have passed the exam.",
    options: {
      A: "If I studied harder, I would have passed the exam.",
      B: "If I had studied harder, I would have passed the exam.",
      C: "If I study harder, I would have passed the exam.",
      D: "If I have studied harder, I will have passed the exam.",
      E: "If I had studied harder, I will have passed the exam.",
    },
    correct: "B",
    explanation:
      "Conditional Type 3 digunakan untuk penyesalan di masa lalu. Strukturnya: If + Past Perfect (had + V3), would have + V3.",
  },
  {
    type: "Grammar – Mixed Conditional",
    question:
      "Choose the correct sentence:\n\na) If I had eaten breakfast, I am not hungry now.\nb) If I ate breakfast, I would not be hungry now.\nc) If I had eaten breakfast, I would not be hungry now.\nd) If I eat breakfast, I will not be hungry now.\ne) If I eat breakfast, I would not be hungry now.",
    options: {
      A: "If I had eaten breakfast, I am not hungry now.",
      B: "If I ate breakfast, I would not be hungry now.",
      C: "If I had eaten breakfast, I would not be hungry now.",
      D: "If I eat breakfast, I will not be hungry now.",
      E: "If I eat breakfast, I would not be hungry now.",
    },
    correct: "C",
    explanation:
      "Mixed Conditional ini menghubungkan sebab di masa lalu (had eaten breakfast) dengan akibat yang terjadi di masa sekarang (would not be hungry now).",
  },
  {
    type: "Grammar – Inversion (Conditional)",
    question:
      "Choose the correct sentence:\n\na) Had I known the answer, I would tell you.\nb) Had I known the answer, I would have told you.\nc) If I had known the answer, I would tell you.\nd) If I knew the answer, I would have told you.\ne) If I had knew the answer, I would tell you.",
    options: {
      A: "Had I known the answer, I would tell you.",
      B: "Had I known the answer, I would have told you.",
      C: "If I had known the answer, I would tell you.",
      D: "If I knew the answer, I would have told you.",
      E: "If I had knew the answer, I would tell you.",
    },
    correct: "B",
    explanation:
      "Ini adalah bentuk inversion dari Conditional Type 3. Frasa If I had known bisa diubah menjadi Had I known tanpa mengubah makna.",
  },
  {
    type: "Grammar – Inversion (Negative Adverbials)",
    question:
      "Choose the correct sentence:\n\na) Never I have seen such a beautiful painting.\nb) Never have I seen such a beautiful painting.\nc) Never I seen such a beautiful painting.\nd) Never have seen I such a beautiful painting.\ne) Never has I seen such a beautiful painting.",
    options: {
      A: "Never I have seen such a beautiful painting.",
      B: "Never have I seen such a beautiful painting.",
      C: "Never I seen such a beautiful painting.",
      D: "Never have seen I such a beautiful painting.",
      E: "Never has I seen such a beautiful painting.",
    },
    correct: "B",
    explanation:
      "Ketika kalimat diawali oleh kata keterangan negatif seperti Never, kata kerja bantu (have) dan subjek (I) harus dibalik posisinya.",
  },
  {
    type: "Grammar – Inversion (So/Neither)",
    question:
      "Choose the correct sentence:\n\na) I like coffee, and so do she.\nb) I like coffee, and so does she.\nc) I like coffee, and so she does.\nd) I like coffee, and she does so.\ne) I like coffee, and so did she.",
    options: {
      A: "I like coffee, and so do she.",
      B: "I like coffee, and so does she.",
      C: "I like coffee, and so she does.",
      D: "I like coffee, and she does so.",
      E: "I like coffee, and so did she.",
    },
    correct: "B",
    explanation:
      "Pola So + Auxiliary + Subject digunakan untuk menyetujui pernyataan positif. Karena subjeknya she, kata kerja bantu yang tepat adalah does.",
  },
  {
    type: "Grammar – Inversion (So/Neither Negative)",
    question:
      "Choose the correct sentence:\n\na) I don’t like tea, and neither do I.\nb) I don’t like tea, and neither I do.\nc) I don’t like tea, and neither does he.\nd) I don’t like tea, and he neither does.\ne) I don’t like tea, and neither he does.",
    options: {
      A: "I don’t like tea, and neither do I.",
      B: "I don’t like tea, and neither I do.",
      C: "I don’t like tea, and neither does he.",
      D: "I don’t like tea, and he neither does.",
      E: "I don’t like tea, and neither he does.",
    },
    correct: "C",
    explanation:
      "Pola Neither + Auxiliary + Subject digunakan untuk menyetujui pernyataan negatif. Karena subjeknya he, kata kerja bantu yang tepat adalah does.",
  },

  // --- SOAL 61-70 ---
  {
    type: "Grammar – Relative Pronoun",
    question:
      "Which sentence is correct?\n\na) The man which lives next door is a doctor.\nb) The man who lives next door is a doctor.\nc) The man whom lives next door is a doctor.\nd) The man where lives next door is a doctor.\ne) The man when lives next door is a doctor.",
    options: {
      A: "The man which lives next door is a doctor.",
      B: "The man who lives next door is a doctor.",
      C: "The man whom lives next door is a doctor.",
      D: "The man where lives next door is a doctor.",
      E: "The man when lives next door is a doctor.",
    },
    correct: "B",
    explanation:
      "Gunakan kata ganti relatif who untuk merujuk pada orang (the man) yang bertindak sebagai subjek dalam klausa relatif.",
  },
  {
    type: "Grammar – Relative Clause (Object)",
    question:
      "Choose the correct sentence:\n\na) The woman whom I met yesterday is my teacher.\nb) The woman who I met yesterday is my teacher.\nc) The woman which I met yesterday is my teacher.\nd) The woman when I met yesterday is my teacher.\ne) The woman where I met yesterday is my teacher.",
    options: {
      A: "The woman whom I met yesterday is my teacher.",
      B: "The woman who I met yesterday is my teacher.",
      C: "The woman which I met yesterday is my teacher.",
      D: "The woman when I met yesterday is my teacher.",
      E: "The woman where I met yesterday is my teacher.",
    },
    correct: "A",
    explanation:
      "Gunakan whom untuk merujuk pada orang (the woman) yang bertindak sebagai objek dalam klausa relatif. Subjek dari klausa tersebut adalah I.",
  },
  {
    type: "Grammar – Defining vs Non-defining",
    question:
      "Which sentence is correct?\n\na) My brother, who lives in Jakarta is an engineer.\nb) My brother who lives in Jakarta, is an engineer.\nc) My brother, who lives in Jakarta, is an engineer.\nd) My brother who, lives in Jakarta, is an engineer.\ne) My brother lives in Jakarta, who is an engineer.",
    options: {
      A: "My brother, who lives in Jakarta is an engineer.",
      B: "My brother who lives in Jakarta, is an engineer.",
      C: "My brother, who lives in Jakarta, is an engineer.",
      D: "My brother who, lives in Jakarta, is an engineer.",
      E: "My brother lives in Jakarta, who is an engineer.",
    },
    correct: "C",
    explanation:
      "Klausa relatif ini memberikan informasi tambahan yang tidak penting (non-defining), sehingga harus diapit oleh koma.",
  },
  {
    type: "Grammar – Relative Clause Reduction",
    question:
      "Choose the correct sentence:\n\na) The man standing at the corner is my uncle.\nb) The man who standing at the corner is my uncle.\nc) The man which standing at the corner is my uncle.\nd) The man whom standing at the corner is my uncle.\ne) The man stands at the corner is my uncle.",
    options: {
      A: "The man standing at the corner is my uncle.",
      B: "The man who standing at the corner is my uncle.",
      C: "The man which standing at the corner is my uncle.",
      D: "The man whom standing at the corner is my uncle.",
      E: "The man stands at the corner is my uncle.",
    },
    correct: "A",
    explanation:
      "Klausa relatif (who is standing) dapat disingkat menjadi standing saja. Ini dikenal sebagai relative clause reduction.",
  },
  {
    type: "Grammar – Relative Clause Reduction (Past Participle)",
    question:
      "Which sentence is correct?\n\na) The books borrowed from the library are overdue.\nb) The books which borrowed from the library are overdue.\nc) The books borrowing from the library are overdue.\nd) The books were borrowed from the library are overdue.\ne) The books who borrowed from the library are overdue.",
    options: {
      A: "The books borrowed from the library are overdue.",
      B: "The books which borrowed from the library are overdue.",
      C: "The books borrowing from the library are overdue.",
      D: "The books were borrowed from the library are overdue.",
      E: "The books who borrowed from the library are overdue.",
    },
    correct: "A",
    explanation:
      "Klausa relatif pasif (which were borrowed) dapat disingkat menjadi hanya past participle (V3).",
  },
  {
    type: "Grammar – Gerund",
    question:
      "Choose the correct sentence:\n\na) He enjoys to play football.\nb) He enjoys playing football.\nc) He enjoys play football.\nd) He enjoys played football.\ne) He enjoys to playing football.",
    options: {
      A: "He enjoys to play football.",
      B: "He enjoys playing football.",
      C: "He enjoys play football.",
      D: "He enjoys played football.",
      E: "He enjoys to playing football.",
    },
    correct: "B",
    explanation:
      "Beberapa kata kerja, seperti enjoy, avoid, dan finish, harus diikuti oleh kata kerja dalam bentuk gerund (-ing).",
  },
  {
    type: "Grammar – Infinitive",
    question:
      "Which sentence is correct?\n\na) He decided going abroad.\nb) He decided to go abroad.\nc) He decided go abroad.\nd) He decided gone abroad.\ne) He decided goes abroad.",
    options: {
      A: "He decided going abroad.",
      B: "He decided to go abroad.",
      C: "He decided go abroad.",
      D: "He decided gone abroad.",
      E: "He decided goes abroad.",
    },
    correct: "B",
    explanation:
      "Kata kerja decide harus diikuti oleh infinitive (to + V1).",
  },
  {
    type: "Grammar – Gerund vs Infinitive",
    question:
      "Choose the correct sentence:\n\na) I stopped to smoke because it was unhealthy.\nb) I stopped smoking because it was unhealthy.\nc) I stopped smoked because it was unhealthy.\nd) I stopped smoke because it was unhealthy.\ne) I stopped smokes because it was unhealthy.",
    options: {
      A: "I stopped to smoke because it was unhealthy.",
      B: "I stopped smoking because it was unhealthy.",
      C: "I stopped smoked because it was unhealthy.",
      D: "I stopped smoke because it was unhealthy.",
      E: "I stopped smokes because it was unhealthy.",
    },
    correct: "B",
    explanation:
      "stop + V-ing berarti menghentikan suatu kebiasaan. stop + to + V1 berarti berhenti untuk melakukan hal lain. Kalimat ini mengacu pada kebiasaan, jadi smoking adalah pilihan yang benar.",
  },
  {
    type: "Grammar – Gerund/Infinitive (Meaning Change)",
    question:
      "Which sentence is correct?\n\na) I remember to lock the door before leaving.\nb) I remember locking the door before leaving.\nc) Both (a) and (b) can be correct depending on context.\nd) Neither (a) nor (b) are correct.\ne) I remembered lock the door before leaving.",
    options: {
      A: "I remember to lock the door before leaving.",
      B: "I remember locking the door before leaving.",
      C: "Both (a) and (b) can be correct depending on context.",
      D: "Neither (a) nor (b) are correct.",
      E: "I remembered lock the door before leaving.",
    },
    correct: "C",
    explanation:
      "Kedua opsi bisa benar dengan arti yang berbeda. Remember to lock berarti mengingat suatu tugas di masa depan, sedangkan remember locking berarti mengingat suatu tindakan di masa lalu.",
  },
  {
    type: "Grammar – Gerund after Preposition",
    question:
      "Choose the correct sentence:\n\na) She is good at to sing.\nb) She is good at singing.\nc) She is good at sings.\nd) She is good at sang.\ne) She is good at sing.",
    options: {
      A: "She is good at to sing.",
      B: "She is good at singing.",
      C: "She is good at sings.",
      D: "She is good at sang.",
      E: "She is good at sing.",
    },
    correct: "B",
    explanation:
      "Setelah preposisi (at), kata kerja yang mengikuti harus dalam bentuk gerund (-ing).",
  },

  // --- SOAL 71-80 ---
  {
    type: "Grammar – Modals (Ability)",
    question:
      "Which sentence is correct?\n\na) He cans speak English well.\nb) He can speaks English well.\nc) He can speak English well.\nd) He can speaking English well.\ne) He can to speak English well.",
    options: {
      A: "He cans speak English well.",
      B: "He can speaks English well.",
      C: "He can speak English well.",
      D: "He can speaking English well.",
      E: "He can to speak English well.",
    },
    correct: "C",
    explanation:
      "Setelah modal (can, must, should), selalu gunakan kata kerja bentuk dasar (V1), tanpa akhiran -s, -ing, atau -to.",
  },
  {
    type: "Grammar – Modals (Past)",
    question:
      "Choose the correct sentence:\n\na) He can have finished the exam early.\nb) He could have finished the exam early.\nc) He should has finished the exam early.\nd) He could finished the exam early.\ne) He may have finishes the exam early.",
    options: {
      A: "He can have finished the exam early.",
      B: "He could have finished the exam early.",
      C: "He should has finished the exam early.",
      D: "He could finished the exam early.",
      E: "He may have finishes the exam early.",
    },
    correct: "B",
    explanation:
      "Untuk menyatakan kemungkinan atau kemampuan di masa lalu, gunakan pola modal + have + V3.",
  },
  {
    type: "Grammar – Modals (Obligation)",
    question:
      "Which sentence is correct?\n\na) You must to wear a helmet.\nb) You must wearing a helmet.\nc) You must wear a helmet.\nd) You must wears a helmet.\ne) You must wore a helmet.",
    options: {
      A: "You must to wear a helmet.",
      B: "You must wearing a helmet.",
      C: "You must wear a helmet.",
      D: "You must wears a helmet.",
      E: "You must wore a helmet.",
    },
    correct: "C",
    explanation:
      "Setelah modal must, kata kerja yang mengikuti harus dalam bentuk dasar (V1).",
  },
  {
    type: "Grammar – Modals (Prohibition)",
    question:
      "Choose the correct sentence:\n\na) You don’t must park here.\nb) You mustn’t park here.\nc) You must not to park here.\nd) You not must park here.\ne) You mustn’t to park here.",
    options: {
      A: "You don’t must park here.",
      B: "You mustn’t park here.",
      C: "You must not to park here.",
      D: "You not must park here.",
      E: "You mustn’t to park here.",
    },
    correct: "B",
    explanation:
      "Bentuk yang benar untuk larangan dengan modal must adalah must not atau mustn’t.",
  },
  {
    type: "Grammar – Modals (Deduction)",
    question:
      "Which sentence is correct?\n\na) He must to be tired after working all day.\nb) He must be tired after working all day.\nc) He must tired after working all day.\nd) He must being tired after working all day.\ne) He must been tired after working all day.",
    options: {
      A: "He must to be tired after working all day.",
      B: "He must be tired after working all day.",
      C: "He must tired after working all day.",
      D: "He must being tired after working all day.",
      E: "He must been tired after working all day.",
    },
    correct: "B",
    explanation:
      "Untuk menyatakan kesimpulan logis di masa sekarang, gunakan pola must + be + adjective.",
  },
  {
    type: "Grammar – Reported Speech – Statement",
    question:
      "Direct: He said, “I am tired.”\n\nWhich is correct in reported speech?\n\na) He said that he is tired.\nb) He said that he was tired.\nc) He said that he tired.\nd) He said that he were tired.\ne) He said that he be tired.",
    options: {
      A: "He said that he is tired.",
      B: "He said that he was tired.",
      C: "He said that he tired.",
      D: "He said that he were tired.",
      E: "He said that he be tired.",
    },
    correct: "B",
    explanation:
      "Karena reporting verb (said) dalam bentuk lampau, tense di klausa yang dilaporkan harus mundur. am menjadi was.",
  },
  {
    type: "Grammar – Reported Speech – Past Tense",
    question:
      "Direct: She said, “I bought a new car.”\n\nChoose correct reported form:\n\na) She said she bought a new car.\nb) She said she has bought a new car.\nc) She said she had bought a new car.\nd) She said she was bought a new car.\ne) She said she buy a new car.",
    options: {
      A: "She said she bought a new car.",
      B: "She said she has bought a new car.",
      C: "She said she had bought a new car.",
      D: "She said she was bought a new car.",
      E: "She said she buy a new car.",
    },
    correct: "C",
    explanation:
      "Jika kalimat langsungnya dalam Simple Past Tense (bought), maka dalam reported speech harus mundur ke Past Perfect Tense (had bought).",
  },
  {
    type: "Grammar – Reported Speech – Wh- Question",
    question:
      "Direct: He asked, “Where are you going?”\n\nWhich is correct?\n\na) He asked where I was going.\nb) He asked where was I going.\nc) He asked where I am going.\nd) He asked where I going.\ne) He asked where going was I.",
    options: {
      A: "He asked where I was going.",
      B: "He asked where was I going.",
      C: "He asked where I am going.",
      D: "He asked where I going.",
      E: "He asked where going was I.",
    },
    correct: "A",
    explanation:
      "Dalam reported question, urutan kata tidak lagi dibalik seperti pertanyaan langsung (was I). Tense juga mundur dari are menjadi was.",
  },
  {
    type: "Grammar – Reported Speech – Yes/No Question",
    question:
      "Direct: She asked, “Do you like coffee?”\n\nCorrect reported speech?\n\na) She asked if I like coffee.\nb) She asked if I liked coffee.\nc) She asked if I likes coffee.\nd) She asked if I was like coffee.\ne) She asked if like coffee.",
    options: {
      A: "She asked if I like coffee.",
      B: "She asked if I liked coffee.",
      C: "She asked if I likes coffee.",
      D: "She asked if I was like coffee.",
      E: "She asked if like coffee.",
    },
    correct: "B",
    explanation:
      "Untuk pertanyaan ya/tidak, gunakan kata penghubung if atau whether. Tense juga mundur dari do you like menjadi liked.",
  },
  {
    type: "Grammar – Reported Speech – Imperatives",
    question:
      "Direct: He said, “Close the door!”\n\nCorrect reported speech?\n\na) He told me to close the door.\nb) He told me close the door.\nc) He told me closing the door.\nd) He told me that I close the door.\ne) He told me closed the door.",
    options: {
      A: "He told me to close the door.",
      B: "He told me close the door.",
      C: "He told me closing the door.",
      D: "He told me that I close the door.",
      E: "He told me closed the door.",
    },
    correct: "A",
    explanation:
      "Kalimat perintah (imperative) dalam reported speech diubah menggunakan pola told/asked + object + to + V1.",
  },

  // --- SOAL 81-90 ---
  {
    type: "Grammar – Comparison – Basic",
    question:
      "Choose correct sentence:\n\na) She is more taller than her sister.\nb) She is taller than her sister.\nc) She is tallest than her sister.\nd) She is more tall than her sister.\ne) She is most taller than her sister.",
    options: {
      A: "She is more taller than her sister.",
      B: "She is taller than her sister.",
      C: "She is tallest than her sister.",
      D: "She is more tall than her sister.",
      E: "She is most taller than her sister.",
    },
    correct: "B",
    explanation:
      "Kata sifat satu suku kata seperti tall hanya perlu ditambahkan akhiran -er. Penggunaan more adalah berlebihan.",
  },
  {
    type: "Grammar – Comparison – Long Adjectives",
    question:
      "Which is correct?\n\na) This book is interestinger than that one.\nb) This book is more interesting than that one.\nc) This book is most interesting than that one.\nd) This book is the more interesting than that one.\ne) This book is interestingest than that one.",
    options: {
      A: "This book is interestinger than that one.",
      B: "This book is more interesting than that one.",
      C: "This book is most interesting than that one.",
      D: "This book is the more interesting than that one.",
      E: "This book is interestingest than that one.",
    },
    correct: "B",
    explanation:
      "Kata sifat dengan lebih dari dua suku kata, seperti interesting, menggunakan more… than untuk perbandingan.",
  },
  {
    type: "Grammar – Comparison – Superlative",
    question:
      "Choose correct sentence:\n\na) He is the most intelligent student in the class.\nb) He is more intelligent student in the class.\nc) He is the intelligentest student in the class.\nd) He is intelligentest student in the class.\ne) He is intelligent more student in the class.",
    options: {
      A: "He is the most intelligent student in the class.",
      B: "He is more intelligent student in the class.",
      C: "He is the intelligentest student in the class.",
      D: "He is intelligentest student in the class.",
      E: "He is intelligent more student in the class.",
    },
    correct: "A",
    explanation:
      "Untuk superlative, kata sifat panjang menggunakan pola the most…. Jangan lupakan artikel the.",
  },
  {
    type: "Grammar – Parallel Comparison",
    question:
      "Choose correct sentence:\n\na) The more you read, the smarter you get.\nb) The more you read, the smarter you gets.\nc) The more you read, the more smarter you get.\nd) The more you read, smarter you get.\ne) The more you read, the smartest you get.",
    options: {
      A: "The more you read, the smarter you get.",
      B: "The more you read, the smarter you gets.",
      C: "The more you read, the more smarter you get.",
      D: "The more you read, smarter you get.",
      E: "The more you read, the smartest you get.",
    },
    correct: "A",
    explanation:
      "Struktur khusus ini memiliki pola The + comparative adjective/adverb, the + comparative adjective/adverb.",
  },
  {
    type: "Grammar – Comparison – As…as",
    question:
      "Which is correct?\n\na) He is as taller as his brother.\nb) He is as tall as his brother.\nc) He is as tallest as his brother.\nd) He is as more tall as his brother.\ne) He is tall as his brother.",
    options: {
      A: "He is as taller as his brother.",
      B: "He is as tall as his brother.",
      C: "He is as tallest as his brother.",
      D: "He is as more tall as his brother.",
      E: "He is tall as his brother.",
    },
    correct: "B",
    explanation:
      "Untuk menunjukkan kesetaraan, gunakan pola as + kata sifat bentuk dasar + as.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "The books on the table belongs to my teacher.\n\nA. The books\nB. on the table\nC. belongs\nD. to my teacher",
    options: {
      A: "The books",
      B: "on the table",
      C: "belongs",
      D: "to my teacher",
    },
    correct: "C",
    explanation:
      "Subjek The books adalah jamak, sehingga kata kerja yang benar adalah belong, bukan belongs.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "Each of the students have a different opinion.\n\nA. Each\nB. of the students\nC. have\nD. a different opinion",
    options: {
      A: "Each",
      B: "of the students",
      C: "have",
      D: "a different opinion",
    },
    correct: "C",
    explanation:
      "Kata Each adalah tunggal, sehingga kata kerja yang benar adalah has, bukan have.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "Neither the manager nor the employees was happy with the decision.\n\nA. Neither\nB. the manager\nC. nor the employees\nD. was happy",
    options: {
      A: "Neither",
      B: "the manager",
      C: "nor the employees",
      D: "was happy",
    },
    correct: "D",
    explanation:
      "Dalam struktur Neither…nor, kata kerja menyesuaikan dengan subjek terdekat. Subjek terdekat adalah employees (jamak), sehingga kata kerja yang benar adalah were happy.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "If I will see him, I will tell him the news.\n\nA. If\nB. I will see\nC. him\nD. I will tell",
    options: {
      A: "If",
      B: "I will see",
      C: "him",
      D: "I will tell",
    },
    correct: "B",
    explanation:
      "Dalam Conditional Type 1, setelah If, kata kerja harus dalam Simple Present Tense. Jadi, will see salah dan harus diganti dengan see.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "She suggested to go to the cinema yesterday.\n\nA. She\nB. suggested\nC. to go\nD. to the cinema yesterday",
    options: {
      A: "She",
      B: "suggested",
      C: "to go",
      D: "to the cinema yesterday",
    },
    correct: "C",
    explanation:
      "Kata kerja suggest harus diikuti oleh gerund (-ing), bukan infinitive. Seharusnya suggested going.",
  },

  // --- SOAL 91-100 ---
  {
    type: "Grammar – Error Identification",
    question:
      "The number of students are increasing every year.\n\nA. The number\nB. of students\nC. are increasing\nD. every year",
    options: {
      A: "The number",
      B: "of students",
      C: "are increasing",
      D: "every year",
    },
    correct: "C",
    explanation:
      "Frasa The number of selalu dianggap tunggal, sehingga kata kerja yang benar adalah is increasing.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "Not only he is talented but also hardworking.\n\nA. Not only\nB. he is\nC. talented\nD. but also hardworking",
    options: {
      A: "Not only",
      B: "he is",
      C: "talented",
      D: "but also hardworking",
    },
    correct: "B",
    explanation:
      "Ketika kalimat diawali dengan Not only, terjadi inversion. Urutan kata kerja dan subjek harus dibalik: is he.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "She is looking forward to meet you soon.\n\nA. She\nB. is looking forward\nC. to meet\nD. you soon",
    options: {
      A: "She",
      B: "is looking forward",
      C: "to meet",
      D: "you soon",
    },
    correct: "C",
    explanation:
      "Frasa look forward to harus diikuti oleh gerund (-ing), bukan infinitive. Kata kerja yang benar adalah meeting.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "The informations you gave me were very useful.\n\nA. The informations\nB. you gave\nC. me\nD. were very useful",
    options: {
      A: "The informations",
      B: "you gave",
      C: "me",
      D: "were very useful",
    },
    correct: "A",
    explanation:
      "Information adalah kata benda yang tidak bisa dihitung (uncountable noun), sehingga tidak memiliki bentuk jamak. Kata yang benar adalah information.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "He is married with a lawyer.\n\nA. He\nB. is married\nC. with\nD. a lawyer",
    options: {
      A: "He",
      B: "is married",
      C: "with",
      D: "a lawyer",
    },
    correct: "C",
    explanation:
      "Ekspresi yang benar adalah married to, bukan married with.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "She prefers coffee than tea.\n\nA. She\nB. prefers\nC. coffee\nD. than tea",
    options: {
      A: "She",
      B: "prefers",
      C: "coffee",
      D: "than tea",
    },
    correct: "D",
    explanation:
      "Kata kerja prefer harus diikuti oleh preposisi to, bukan than. Ekspresi yang benar adalah prefers coffee to tea.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "My father doesn’t like neither football nor basketball.\n\nA. My father\nB. doesn’t like\nC. neither football\nD. nor basketball",
    options: {
      A: "My father",
      B: "doesn’t like",
      C: "neither football",
      D: "nor basketball",
    },
    correct: "C",
    explanation:
      "Kalimat ini sudah memiliki kata negatif (doesn’t), sehingga penggunaan neither (yang juga negatif) menjadi dobel negatif. Kata yang benar adalah either.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "Although he is rich, but he is not happy.\n\nA. Although\nB. he is rich\nC. but\nD. he is not happy",
    options: {
      A: "Although",
      B: "he is rich",
      C: "but",
      D: "he is not happy",
    },
    correct: "C",
    explanation:
      "Kata penghubung Although sudah memiliki arti 'meskipun', sehingga penggunaan but (yang juga menyatakan kontras) menjadi berlebihan.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "Hardly he had entered the room when everyone stood up.\n\nA. Hardly\nB. he had entered\nC. the room\nD. when everyone stood up",
    options: {
      A: "Hardly",
      B: "he had entered",
      C: "the room",
      D: "when everyone stood up",
    },
    correct: "B",
    explanation:
      "Ketika kalimat diawali dengan Hardly, terjadi inversion. Kata kerja bantu (had) harus diletakkan sebelum subjek (he). Seharusnya Hardly had he entered.",
  },
  {
    type: "Grammar – Error Identification",
    question:
      "I suggest that he goes to the doctor immediately.\n\nA. I suggest\nB. that\nC. he goes\nD. to the doctor immediately",
    options: {
      A: "I suggest",
      B: "that",
      C: "he goes",
      D: "to the doctor immediately",
    },
    correct: "C",
    explanation:
      "Dalam subjunctive, setelah kata kerja seperti suggest, kata kerja yang mengikuti harus dalam bentuk dasar (go), bukan goes.",
  },
];

export default grammarQuestions;
