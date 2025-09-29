// src/data/Banks/Reading.ts

const readingQuestions = [
  // SOAL 1
  {
    type: "Reading - Main Idea",
    question:
      "Many people believe that coffee is harmful because it contains caffeine. However, research shows that moderate coffee consumption may have health benefits. Studies suggest it can improve alertness, concentration, and even lower the risk of certain diseases. Still, too much coffee may cause anxiety or sleep problems." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Coffee is dangerous and should be avoided.",
      B: "Coffee has both benefits and risks depending on consumption.",
      C: "Coffee only helps people stay awake.",
      D: "Coffee is the healthiest drink available.",
      E: "Coffee is better than tea.",
    },
    correct: "B",
    explanation:
      "Teks menekankan bahwa kopi memiliki manfaat (alertness, concentration, disease risk reduction) namun juga memiliki risiko (anxiety, sleep problems). Jadi bukan hanya positif atau negatif, melainkan dua sisi." +
      "\n\n" +
      "👉 Tips praktis: Untuk soal main idea, jangan hanya fokus pada kalimat pertama/terakhir, tapi lihat ide yang mencakup seluruh teks.",
  },

  // SOAL 2
  {
    type: "Reading - Supporting Detail",
    question:
      "Many people believe that coffee is harmful because it contains caffeine. However, research shows that moderate coffee consumption may have health benefits. Studies suggest it can improve alertness, concentration, and even lower the risk of certain diseases. Still, too much coffee may cause anxiety or sleep problems." +
      "\n\n" +
      "According to the passage, which of the following is a possible benefit of drinking coffee?",
    options: {
      A: "Improving memory permanently",
      B: "Reducing the risk of some diseases",
      C: "Helping people gain weight",
      D: "Making people sleep better",
      E: "Eliminating stress completely",
    },
    correct: "B",
    explanation:
      'Detail ini disebutkan langsung di teks: "lower the risk of certain diseases".' +
      "\n\n" +
      "Jawaban lain tidak disebutkan." +
      "\n\n" +
      "👉 Tips: Untuk soal detail, cari kata kunci di pertanyaan → cocokkan dengan kata serupa dalam teks.",
  },

  // SOAL 3
  {
    type: "Reading - Vocabulary in Context",
    question:
      "Many people believe that coffee is harmful because it contains caffeine. However, research shows that moderate coffee consumption may have health benefits. Studies suggest it can improve alertness, concentration, and even lower the risk of certain diseases. Still, too much coffee may cause anxiety or sleep problems." +
      "\n\n" +
      "The word alertness in the passage is closest in meaning to…",
    options: {
      A: "Sleepiness",
      B: "Quickness of mind",
      C: "Laziness",
      D: "Weakness",
      E: "Sadness",
    },
    correct: "B",
    explanation:
      "Alertness berarti kondisi waspada, lawan dari sleepiness. Jawaban b paling sesuai." +
      "\n\n" +
      "👉 Mnemonic: “Alert” = “Alarm” → ketika alarm bunyi, kita jadi waspada.",
  },

  // SOAL 4
  {
    type: "Reading - Inference",
    question:
      "Many people believe that coffee is harmful because it contains caffeine. However, research shows that moderate coffee consumption may have health benefits. Studies suggest it can improve alertness, concentration, and even lower the risk of certain diseases. Still, too much coffee may cause anxiety or sleep problems." +
      "\n\n" +
      "What can be inferred about people’s general view of coffee?",
    options: {
      A: "They think it is always safe.",
      B: "They think it is mostly harmful.",
      C: "They think it has no effect at all.",
      D: "They think it is the same as tea.",
      E: "They think it should replace water.",
    },
    correct: "B",
    explanation:
      "Kalimat pertama menjelaskan “Many people believe coffee is harmful”. Inference = pandangan umum masyarakat → negatif." +
      "\n\n" +
      "👉 Tips: Inference tidak harus tertulis langsung, tapi bisa disimpulkan dari clue teks.",
  },

  // SOAL 5
  {
    type: "Reading - Reference",
    question:
      "Many people believe that coffee is harmful because it contains caffeine. However, research shows that moderate coffee consumption may have health benefits. Studies suggest it can improve alertness, concentration, and even lower the risk of certain diseases. Still, too much coffee may cause anxiety or sleep problems." +
      "\n\n" +
      "The word Still refers to…",
    options: {
      A: "A continuation of positive effects",
      B: "A contrast to previous information",
      C: "A summary of the passage",
      D: "An example of concentration",
      E: "A synonym of coffee",
    },
    correct: "B",
    explanation:
      "Still di sini artinya “Namun” → menunjukkan perbedaan antara manfaat kopi sebelumnya dengan risiko kopi." +
      "\n\n" +
      "👉 Tips: Jika bingung dengan kata referensi/transition, lihat hubungannya: apakah menambahkan (and), mengontraskan (but, still), atau menyimpulkan (therefore).",
  },

  // SOAL 6
  {
    type: "Reading - Main Idea",
    question:
      "The honeybee is a small insect, but it plays an important role in agriculture. Bees pollinate flowers, which helps fruits and vegetables grow. Without bees, food production would decrease, and ecosystems would be affected." +
      "\n\n" +
      "What is the best main idea of the passage?",
    options: {
      A: "Bees are dangerous insects.",
      B: "Bees are small but vital for agriculture.",
      C: "Bees produce sweet honey.",
      D: "Bees live in large colonies.",
      E: "Bees are disappearing from the world.",
    },
    correct: "B",
    explanation:
      "Teks tidak membahas madu atau bahaya, fokusnya adalah pentingnya lebah bagi pertanian." +
      "\n\n" +
      "👉 Tips: Main idea = cari subject (bees) + comment utama (importance in agriculture).",
  },

  // SOAL 7
  {
    type: "Reading - Supporting Detail",
    question:
      "The honeybee is a small insect, but it plays an important role in agriculture. Bees pollinate flowers, which helps fruits and vegetables grow. Without bees, food production would decrease, and ecosystems would be affected." +
      "\n\n" +
      "What do bees help with, according to the passage?",
    options: {
      A: "Producing honey",
      B: "Pollinating flowers",
      C: "Making ecosystems disappear",
      D: "Building large hives",
      E: "Attacking humans",
    },
    correct: "B",
    explanation:
      "Disebutkan langsung: “Bees pollinate flowers, which helps fruits and vegetables grow.”" +
      "\n\n" +
      "👉 Tips: Jika pertanyaan “according to the passage”, jawaban harus 100% ada di teks, bukan tambahan dari pengetahuan umum.",
  },

  // SOAL 8
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The honeybee is a small insect, but it plays an important role in agriculture. Bees pollinate flowers, which helps fruits and vegetables grow. Without bees, food production would decrease, and ecosystems would be affected." +
      "\n\n" +
      "The word ecosystems in the passage refers to…",
    options: {
      A: "Systems of transportation",
      B: "Communities of living things",
      C: "Machines for farming",
      D: "Places where honey is made",
      E: "Climate patterns",
    },
    correct: "B",
    explanation:
      "Ecosystem = interaksi organisme hidup dan lingkungannya." +
      "\n\n" +
      "👉 Mnemonic: “Eco” = environment, “system” = struktur → sistem lingkungan hidup.",
  },

  // SOAL 9
  {
    type: "Reading - Inference",
    question:
      "The honeybee is a small insect, but it plays an important role in agriculture. Bees pollinate flowers, which helps fruits and vegetables grow. Without bees, food production would decrease, and ecosystems would be affected." +
      "\n\n" +
      "What can be inferred if bees disappear?",
    options: {
      A: "Agriculture will improve.",
      B: "Food production will suffer.",
      C: "There will be more flowers.",
      D: "Honey will become cheaper.",
      E: "Ecosystems will be unaffected.",
    },
    correct: "B",
    explanation:
      "Disebutkan: “Without bees, food production would decrease, and ecosystems would be affected.” Jadi inference = produksi pangan terganggu." +
      "\n\n" +
      "👉 Tips: Jika teks memakai “would”, inference soal biasanya soal konsekuensi.",
  },

  // SOAL 10
  {
    type: "Reading - Purpose",
    question:
      "The honeybee is a small insect, but it plays an important role in agriculture. Bees pollinate flowers, which helps fruits and vegetables grow. Without bees, food production would decrease, and ecosystems would be affected." +
      "\n\n" +
      "What is the author’s purpose in writing the passage?",
    options: {
      A: "To explain why bees are dangerous",
      B: "To show the importance of bees in agriculture",
      C: "To describe how bees make honey",
      D: "To warn people about bee stings",
      E: "To compare bees and other insects",
    },
    correct: "B",
    explanation:
      "Keseluruhan teks mendeskripsikan peran lebah untuk pertanian dan ekosistem, bukan membandingkan atau memberi peringatan." +
      "\n\n" +
      "👉 Tips: Jika pertanyaan “purpose”, cari why the author wrote the text bukan hanya detail.",
  },

  // SOAL 11
  {
    type: "Reading - Main Idea",
    question:
      "For centuries, the Great Wall of China has stood as one of the most famous landmarks in the world. Originally built to protect Chinese states from invasions, the wall stretches thousands of kilometers across mountains, deserts, and plains. Today, it no longer serves as a military defense but as a cultural symbol and a popular tourist attraction. Millions of visitors come each year to walk along its ancient stones and admire its history." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Great Wall is only important for Chinese soldiers.",
      B: "The Great Wall is now a symbol and tourist attraction.",
      C: "The Great Wall is located only in deserts.",
      D: "The Great Wall is the longest building in the world.",
      E: "The Great Wall is no longer visited by tourists.",
    },
    correct: "B",
    explanation:
      "Teks menekankan pergeseran fungsi: dulu pertahanan → sekarang simbol budaya & wisata." +
      "\n\n" +
      "👉 Tips: Main idea biasanya berupa perubahan fungsi, kondisi, atau peran suatu hal.",
  },

  // SOAL 12
  {
    type: "Reading - Supporting Detail",
    question:
      "For centuries, the Great Wall of China has stood as one of the most famous landmarks in the world. Originally built to protect Chinese states from invasions, the wall stretches thousands of kilometers across mountains, deserts, and plains. Today, it no longer serves as a military defense but as a cultural symbol and a popular tourist attraction. Millions of visitors come each year to walk along its ancient stones and admire its history." +
      "\n\n" +
      "Why was the Great Wall originally built?",
    options: {
      A: "To attract tourists",
      B: "To protect against invasions",
      C: "To separate deserts from mountains",
      D: "To celebrate Chinese emperors",
      E: "To connect cities with trade routes",
    },
    correct: "B",
    explanation:
      "Teks jelas menyebutkan: “Originally built to protect Chinese states from invasions.”" +
      "\n\n" +
      "👉 Tips: Cari kata kunci “originally, first, initially” untuk jawaban detail sejarah.",
  },

  // SOAL 13
  {
    type: "Reading - Vocabulary in Context",
    question:
      "For centuries, the Great Wall of China has stood as one of the most famous landmarks in the world. Originally built to protect Chinese states from invasions, the wall stretches thousands of kilometers across mountains, deserts, and plains. Today, it no longer serves as a military defense but as a cultural symbol and a popular tourist attraction. Millions of visitors come each year to walk along its ancient stones and admire its history." +
      "\n\n" +
      "The word admire in the passage is closest in meaning to…",
    options: {
      A: "Ignore",
      B: "Respect",
      C: "Destroy",
      D: "Doubt",
      E: "Repair",
    },
    correct: "B",
    explanation:
      "Admire berarti mengagumi/menaruh rasa hormat. Bukan ignore (abaikan), bukan destroy (hancurkan)." +
      "\n\n" +
      "👉 Mnemonic: “Admire” mirip dengan “Admiral” → seseorang yang dihormati dalam militer.",
  },

  // SOAL 14
  {
    type: "Reading - Inference",
    question:
      "For centuries, the Great Wall of China has stood as one of the most famous landmarks in the world. Originally built to protect Chinese states from invasions, the wall stretches thousands of kilometers across mountains, deserts, and plains. Today, it no longer serves as a military defense but as a cultural symbol and a popular tourist attraction. Millions of visitors come each year to walk along its ancient stones and admire its history." +
      "\n\n" +
      "What can be inferred about the Great Wall today?",
    options: {
      A: "It still protects China from invasions.",
      B: "It is no longer used for military defense.",
      C: "It is closed to visitors.",
      D: "It is the only ancient wall in Asia.",
      E: "It has lost cultural significance.",
    },
    correct: "B",
    explanation:
      "Kalimat: “Today, it no longer serves as a military defense.” → inference = tidak lagi berfungsi militer." +
      "\n\n" +
      "👉 Tips: Inference = fakta implisit tapi didukung teks langsung.",
  },

  // SOAL 15
  {
    type: "Reading - Reference",
    question:
      "For centuries, the Great Wall of China has stood as one of the most famous landmarks in the world. Originally built to protect Chinese states from invasions, the wall stretches thousands of kilometers across mountains, deserts, and plains. Today, it no longer serves as a military defense but as a cultural symbol and a popular tourist attraction. Millions of visitors come each year to walk along its ancient stones and admire its history." +
      "\n\n" +
      "The word its in the phrase “admire its history” refers to…",
    options: {
      A: "Tourists",
      B: "China",
      C: "The Great Wall",
      D: "Mountains",
      E: "Soldiers",
    },
    correct: "C",
    explanation:
      "Kata ganti its mengacu pada benda yang diceritakan: The Great Wall." +
      "\n\n" +
      "👉 Tips: Jika ada pronoun (it, they, their), cek noun terdekat yang paling logis.",
  },

  // SOAL 16
  {
    type: "Reading - Purpose",
    question:
      "Plastic pollution has become one of the most serious environmental problems today. Millions of tons of plastic waste end up in oceans, harming marine life such as turtles, fish, and seabirds. Scientists warn that if no action is taken, the amount of plastic could exceed the number of fish in the oceans by 2050. Many countries are now trying to reduce plastic use by banning plastic bags and promoting recycling." +
      "\n\n" +
      "What is the author’s purpose in this passage?",
    options: {
      A: "To entertain readers with stories of the ocean",
      B: "To argue that plastic waste is a serious problem",
      C: "To describe the life of turtles and seabirds",
      D: "To explain how fish reproduce in the ocean",
      E: "To advertise recycling companies",
    },
    correct: "B",
    explanation:
      "Teks berfokus pada masalah serius (pollution), bukan hiburan/iklan." +
      "\n\n" +
      "👉 Tips: Purpose = “Why did the author write this?” → biasanya berupa masalah + solusi.",
  },

  // SOAL 17
  {
    type: "Reading - Supporting Detail",
    question:
      "Plastic pollution has become one of the most serious environmental problems today. Millions of tons of plastic waste end up in oceans, harming marine life such as turtles, fish, and seabirds. Scientists warn that if no action is taken, the amount of plastic could exceed the number of fish in the oceans by 2050. Many countries are now trying to reduce plastic use by banning plastic bags and promoting recycling." +
      "\n\n" +
      "Which of the following animals are mentioned as being harmed by plastic pollution?",
    options: {
      A: "Elephants",
      B: "Tigers",
      C: "Turtles",
      D: "Lions",
      E: "Frogs",
    },
    correct: "C",
    explanation:
      "Disebutkan langsung: “marine life such as turtles, fish, and seabirds.”" +
      "\n\n" +
      "👉 Tips: Jika ada list dalam teks, soal detail sering mengambil salah satunya.",
  },

  // SOAL 18
  {
    type: "Reading - Vocabulary in Context",
    question:
      "Plastic pollution has become one of the most serious environmental problems today. Millions of tons of plastic waste end up in oceans, harming marine life such as turtles, fish, and seabirds. Scientists warn that if no action is taken, the amount of plastic could exceed the number of fish in the oceans by 2050. Many countries are now trying to reduce plastic use by banning plastic bags and promoting recycling." +
      "\n\n" +
      "The word promoting in the passage is closest in meaning to…",
    options: {
      A: "Encouraging",
      B: "Fighting",
      C: "Ignoring",
      D: "Blocking",
      E: "Cleaning",
    },
    correct: "A",
    explanation:
      "Promoting recycling = mendorong atau mendukung daur ulang." +
      "\n\n" +
      "👉 Mnemonic: “Promote” = “pro” (mendukung) + “move” (menggerakkan).",
  },

  // SOAL 19
  {
    type: "Reading - Inference",
    question:
      "Plastic pollution has become one of the most serious environmental problems today. Millions of tons of plastic waste end up in oceans, harming marine life such as turtles, fish, and seabirds. Scientists warn that if no action is taken, the amount of plastic could exceed the number of fish in the oceans by 2050. Many countries are now trying to reduce plastic use by banning plastic bags and promoting recycling." +
      "\n\n" +
      "What can be inferred if plastic use continues to grow?",
    options: {
      A: "There will be no fish left in the ocean.",
      B: "Plastic may exceed fish population by 2050.",
      C: "Plastic will disappear naturally.",
      D: "Plastic will not affect marine life.",
      E: "Recycling will not be necessary.",
    },
    correct: "B",
    explanation:
      "Teks menyatakan: “if no action is taken, plastic could exceed the number of fish in the oceans by 2050.”" +
      "\n\n" +
      "👉 Tips: Cari kata pengandaian (if, would, could) → biasanya jadi dasar inference.",
  },

  // SOAL 20
  {
    type: "Reading - Tone",
    question:
      "Plastic pollution has become one of the most serious environmental problems today. Millions of tons of plastic waste end up in oceans, harming marine life such as turtles, fish, and seabirds. Scientists warn that if no action is taken, the amount of plastic could exceed the number of fish in the oceans by 2050. Many countries are now trying to reduce plastic use by banning plastic bags and promoting recycling." +
      "\n\n" +
      "What is the tone of the passage?",
    options: {
      A: "Humorous",
      B: "Serious and warning",
      C: "Neutral and descriptive",
      D: "Angry and emotional",
      E: "Excited and hopeful",
    },
    correct: "B",
    explanation:
      "Nada teks jelas serius, penuh peringatan tentang bahaya plastik. Tidak humor, tidak netral." +
      "\n\n" +
      "👉 Tips: Tone = perasaan penulis → lihat kata sifat (serious, warning, optimistic).",
  },

  // SOAL 21
  {
    type: "Reading - Main Idea",
    question:
      "In recent years, scientists have observed a significant decline in bee populations around the world. This phenomenon, often referred to as “colony collapse disorder,” has raised concerns not only among environmentalists but also among farmers. Bees play a crucial role in pollination, which directly affects the production of fruits, vegetables, and nuts. Without bees, many crops would fail to reproduce effectively, leading to reduced food supplies. Several factors are believed to contribute to the decline of bees, including pesticide use, climate change, habitat loss, and diseases. While scientists are working to identify the primary causes, they all agree on one point: protecting bees is essential for maintaining ecological balance and ensuring food security for humans." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The use of pesticides is the only reason for bee population decline.",
      B: "Farmers are not worried about bee populations.",
      C: "Scientists are uncertain about the importance of bees.",
      D: "Bees are vital for food security, but their populations are declining.",
      E: "Bees only affect nut production in agriculture.",
    },
    correct: "D",
    explanation:
      "Opsi (d) benar karena mencakup dua ide utama teks: (1) bees sangat penting untuk keamanan pangan, (2) populasinya menurun." +
      "\n\n" +
      "👉 Tips untuk awam: Kalau soal menanyakan main idea, cari poin yang mencakup keseluruhan teks, bukan detail kecil. Gunakan strategi “Pay attention to first and last sentence” → biasanya TOEFL menaruh clue di sana.",
  },

  // SOAL 22
  {
    type: "Reading - Supporting Detail",
    question:
      "The Amazon rainforest is often called the “lungs of the Earth” because of its vast capacity to produce oxygen. It is home to millions of species, many of which cannot be found anywhere else. Unfortunately, deforestation has been increasing due to logging, agriculture, and cattle ranching. As trees are cut down, habitats are destroyed, and the balance of the ecosystem is disrupted. In addition, the burning of trees releases large amounts of carbon dioxide into the atmosphere, contributing to global warming. Scientists warn that if the Amazon continues to be destroyed at the current rate, the consequences will be catastrophic for global climate stability." +
      "\n\n" +
      "According to the passage, what happens when trees in the Amazon are burned?",
    options: {
      A: "They produce more oxygen.",
      B: "They reduce the number of cattle.",
      C: "They release carbon dioxide.",
      D: "They decrease global warming.",
      E: "They improve soil fertility.",
    },
    correct: "C",
    explanation:
      "Teks menyatakan: “the burning of trees releases large amounts of carbon dioxide into the atmosphere”." +
      "\n\n" +
      "👉 Tips untuk awam: Untuk detail question, gunakan teknik “word matching”. Cari kata kunci dalam soal (“burned trees”) lalu temukan kalimat yang sama/serupa di teks. TOEFL suka membuat jawaban salah dengan memakai kata-kata mirip tapi makna beda.",
  },

  // SOAL 23
  {
    type: "Reading - Inference",
    question:
      "Marie Curie, a pioneering scientist in the field of radioactivity, faced many challenges during her career. As a woman in the late 19th and early 20th centuries, she encountered widespread discrimination in academic and scientific institutions. Despite this, she and her husband Pierre Curie conducted groundbreaking research that led to the discovery of polonium and radium. Her achievements earned her two Nobel Prizes, making her the first person to win in two different scientific fields. However, her relentless work with radioactive materials, conducted without the safety measures we know today, ultimately led to health problems that caused her death." +
      "\n\n" +
      "What can be inferred about scientific research in Marie Curie’s time?",
    options: {
      A: "Scientists had advanced protective equipment.",
      B: "Women had equal opportunities in science.",
      C: "Research on radioactivity was extremely safe.",
      D: "There was little awareness of radiation dangers.",
      E: "Nobel Prizes were rarely awarded to women.",
    },
    correct: "D",
    explanation:
      "Opsi (a) salah → justru tidak ada protective equipment. Opsi (b) salah → teks jelas menyebut diskriminasi terhadap perempuan. Opsi (c) salah → teks mengatakan radioactivity menyebabkan health problems. Opsi (e) benar secara implisit (Marie Curie memang jarang terjadi saat itu), tapi teks tidak eksplisit menyebut itu → sehingga bukan jawaban terbaik. Opsi (d) benar karena teks menyebut Curie bekerja tanpa safety measures, artinya waktu itu orang belum sadar bahaya radiasi." +
      "\n\n" +
      "👉 Tips untuk awam: Inference question artinya “membaca di balik teks”. Jangan cari kalimat persis di bacaan, tapi gunakan logika dari informasi yang ada. Biasanya TOEFL memakai kata kunci “suggests, implies, inferred”.",
  },

  // SOAL 24
  {
    type: "Reading - Vocabulary in Context",
    question:
      "During the Great Depression of the 1930s, unemployment in the United States soared to unprecedented levels. Factories closed, banks collapsed, and millions of families were left destitute. Breadlines and soup kitchens became a common sight in major cities. The government responded with the New Deal, a series of programs designed to provide relief, recovery, and reform. These measures helped to stabilize the economy and restore public confidence, although the Depression did not truly end until World War II stimulated industrial production." +
      "\n\n" +
      "The word “destitute” in the passage is closest in meaning to:",
    options: {
      A: "Wealthy",
      B: "Homeless",
      C: "Poor",
      D: "Unemployed",
      E: "Comfortable",
    },
    correct: "C",
    explanation:
      "Destitute artinya “sangat miskin, tidak memiliki kebutuhan dasar”." +
      "\n\n" +
      "Opsi (a) “wealthy” = lawan katanya. Opsi (b) “homeless” mirip, tapi destitute tidak selalu berarti tanpa rumah → bisa punya rumah tapi tetap miskin. Opsi (d) “unemployed” → tidak punya pekerjaan, tapi destitute lebih luas dari itu. Opsi (e) “comfortable” = salah total. Jadi makna paling dekat adalah (c) “poor”." +
      "\n\n" +
      "👉 Tips untuk awam: Kalau ketemu vocab asing, jangan panik. Gunakan context clues → lihat kata sebelum & sesudah. Di sini, “factories closed, banks collapsed, families were left…” → jelas konteksnya kemiskinan.",
  },

  // SOAL 25
  {
    type: "Reading - Reference",
    question:
      "The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the way knowledge was spread. Before its invention, books were copied by hand, which was slow and expensive. With the printing press, books could be produced more quickly and at a lower cost, making them accessible to a wider audience. This advancement greatly contributed to the spread of literacy and the progress of the Renaissance. It is often considered one of the most important inventions in human history." +
      "\n\n" +
      "In the passage, the word “It” in the last sentence refers to:",
    options: {
      A: "Literacy",
      B: "The Renaissance",
      C: "The invention of the printing press",
      D: "Human history",
      E: "Knowledge",
    },
    correct: "C",
    explanation:
      "Opsi (a) salah → literacy adalah hasil, bukan yang dimaksud. Opsi (b) salah → Renaissance hanya dipengaruhi oleh “It”. Opsi (d) salah → “human history” bukan subjek utama. Opsi (e) salah → knowledge adalah objek yang disebarkan. Jadi “It” mengacu pada invention of the printing press." +
      "\n\n" +
      "👉 Tips untuk awam: Reference question biasanya menanyakan kata ganti (it, they, this, those). Triknya: lihat kalimat sebelumnya dan cari noun yang paling masuk akal secara logis.",
  },

  // SOAL 26
  {
    type: "Reading - Main Idea",
    question:
      "For centuries, philosophers have debated the nature of happiness. Ancient Greek thinkers such as Aristotle believed that true happiness comes from living a life of virtue and fulfilling one’s potential. In contrast, modern psychology often defines happiness in terms of emotional well-being and life satisfaction. Recent studies suggest that happiness is influenced not only by external circumstances, such as income or health, but also by internal factors, including mindset, gratitude, and resilience. While money and success may provide comfort, they do not guarantee lasting happiness. Instead, researchers argue that maintaining strong social connections and having a sense of purpose play more significant roles in human flourishing." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Happiness is only determined by wealth and success.",
      B: "Philosophers and scientists have different views on happiness.",
      C: "Aristotle believed that happiness came from material possessions.",
      D: "Social connections are not related to human happiness.",
      E: "Happiness has been studied from various perspectives, with emphasis on both external and internal factors.",
    },
    correct: "E",
    explanation:
      "Jawaban ini tepat karena teks menyoroti pandangan filsuf kuno, psikologi modern, dan penelitian terbaru. Semua menunjukkan bahwa kebahagiaan dipengaruhi oleh faktor luar (uang, kesehatan) dan faktor dalam (mindset, gratitude, resilience)." +
      "\n\n" +
      "👉 Tips: Kalau mencari main idea, fokus pada gagasan yang mencakup semua bagian teks, bukan hanya satu detail. Gunakan strategi “umbrella concept” — bayangkan ide utama sebagai payung yang menaungi seluruh informasi.",
  },

  // SOAL 27
  {
    type: "Reading - Supporting Detail",
    question:
      "The Great Wall of China, stretching over 13,000 miles, was originally built to protect Chinese states from invasions by nomadic tribes. Construction began as early as the 7th century BC, but the most famous sections were built during the Ming Dynasty (14th–17th centuries). Beyond its military purpose, the wall also served as a means of regulating trade along the Silk Road, collecting taxes, and controlling immigration. Today, it is one of the most visited tourist attractions in the world and stands as a symbol of China’s historical strength and perseverance." +
      "\n\n" +
      "According to the passage, during the Ming Dynasty, the Great Wall was also used for:",
    options: {
      A: "Protecting only against Mongol invasions.",
      B: "Collecting taxes and controlling trade.",
      C: "Hosting tourists from around the world.",
      D: "Expanding Chinese territory.",
      E: "Storing military weapons.",
    },
    correct: "B",
    explanation:
      "Jawaban ini sesuai dengan kalimat: “Beyond its military purpose, the wall also served as a means of regulating trade along the Silk Road, collecting taxes, and controlling immigration.”" +
      "\n\n" +
      "👉 Tips: Untuk detail question, gunakan teknik “scanning” → cari kata kunci dari soal (“Ming Dynasty”) lalu temukan kalimat yang terkait. Biasanya jawabannya tersurat jelas di teks.",
  },

  // SOAL 28
  {
    type: "Reading - Inference",
    question:
      "In the early days of space exploration, astronauts relied heavily on ground control for guidance and support. Communication delays, however, became a challenge as missions ventured farther from Earth. Today, with advanced technology, spacecraft are equipped with sophisticated computer systems that allow astronauts to operate with greater independence. These systems can detect technical problems, adjust navigation, and even provide medical assistance in emergencies. Although contact with Earth remains essential, astronauts are now far less dependent on ground control than their predecessors were." +
      "\n\n" +
      "What can be inferred about modern space missions compared to earlier ones?",
    options: {
      A: "They no longer need any communication with Earth.",
      B: "They are more autonomous due to advanced technology.",
      C: "Astronauts face fewer technical problems in space.",
      D: "Ground control is no longer involved in missions.",
      E: "Astronauts spend less time training before launch.",
    },
    correct: "B",
    explanation:
      "Kesimpulan ini logis karena teks menekankan bahwa komputer canggih kini memungkinkan astronot mengelola navigasi, deteksi masalah, hingga bantuan medis, sehingga mereka lebih mandiri dibanding masa lalu." +
      "\n\n" +
      "👉 Tips: Untuk inference, jangan mencari kalimat yang sama persis di teks. Fokuslah pada implikasi logis. TOEFL suka menipu dengan pilihan yang terlalu ekstrem (misalnya “no longer need” → terlalu mutlak, biasanya salah).",
  },

  // SOAL 29
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The Industrial Revolution, beginning in the late 18th century, was a period of profound transformation. New inventions, such as the steam engine and mechanized looms, greatly increased productivity. Cities expanded rapidly as people migrated from rural areas to work in factories. However, this rapid industrialization also led to crowded living conditions, pollution, and the exploitation of workers. Despite these hardships, the era marked a pivotal moment in human history, as it laid the foundation for modern economic and technological progress." +
      "\n\n" +
      "The word “pivotal” in the passage is closest in meaning to:",
    options: {
      A: "Unimportant",
      B: "Crucial",
      C: "Temporary",
      D: "Minor",
      E: "Outdated",
    },
    correct: "B",
    explanation:
      "Kata pivotal berarti “sangat penting, menentukan arah perkembangan”. Konteksnya: Revolusi Industri menjadi titik balik besar dalam sejarah manusia → jelas “crucial” adalah makna paling tepat." +
      "\n\n" +
      "👉 Tips: Kalau menemui kata asing, perhatikan kalimat lengkapnya. Kata pivotal muncul di bagian: “the era marked a pivotal moment in human history”. Kalau sebuah momen disebut marked in history, biasanya artinya penting. Gunakan context clues seperti ini untuk menebak arti.",
  },

  // SOAL 30
  {
    type: "Reading - Reference",
    question:
      "In the 20th century, the discovery of antibiotics revolutionized medicine. Diseases that once claimed millions of lives, such as tuberculosis and pneumonia, could now be treated effectively. However, the overuse and misuse of antibiotics have led to the emergence of resistant bacteria. These so-called “superbugs” pose a serious threat to global health, as they can survive even the strongest medications. Scientists warn that if this trend continues, many modern medical procedures, including surgeries and chemotherapy, could become far riskier." +
      "\n\n" +
      "In the passage, the word “They” in the sentence “They can survive even the strongest medications” refers to:",
    options: {
      A: "Antibiotics",
      B: "Scientists",
      C: "Diseases",
      D: "Resistant bacteria",
      E: "Medical procedures",
    },
    correct: "D",
    explanation:
      "Kata ganti “They” jelas mengacu pada resistant bacteria atau “superbugs”. Kalimat sebelumnya langsung menyebut: “These so-called ‘superbugs’ pose a serious threat … They can survive …” → jadi “They” = “superbugs”." +
      "\n\n" +
      "👉 Tips: Untuk reference question, selalu periksa kata sebelum kata ganti. Hampir selalu jawabannya ada di kalimat sebelumnya, bukan jauh ke atas.",
  },

  // SOAL 31
  {
    type: "Reading - Main Idea",
    question:
      "Throughout history, rivers have played a central role in the rise of civilizations. The Nile in Egypt, the Tigris and Euphrates in Mesopotamia, and the Indus in South Asia provided fertile land for agriculture, enabling the growth of early societies. Beyond farming, rivers facilitated trade, transportation, and cultural exchange. They also influenced religion and mythology, often seen as sacred sources of life. However, rivers could also bring destruction through floods, which required advanced engineering solutions such as dams and canals. In modern times, rivers continue to be vital, supplying water for drinking, irrigation, and industry. Yet they now face pollution and overuse, creating urgent environmental challenges." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Rivers are important only for agriculture.",
      B: "Civilizations avoided rivers due to frequent floods.",
      C: "Rivers have historically shaped societies and remain vital today.",
      D: "Pollution is the only issue rivers face in modern times.",
      E: "Rivers are no longer important in human development.",
    },
    correct: "C",
    explanation:
      "Teks menjelaskan peran sungai dari zaman kuno (pertanian, perdagangan, religi) hingga modern (air, industri, tantangan lingkungan). Jadi ide utama: sungai penting dulu dan sekarang." +
      "\n\n" +
      "👉 Tips: Main idea biasanya ada di kalimat pertama dan terakhir. Gabungkan keduanya untuk menemukan jawaban yang benar.",
  },

  // SOAL 32
  {
    type: "Reading - Supporting Detail",
    question:
      "Volcanoes are among the most powerful natural forces on Earth. When they erupt, they release ash, lava, and gases into the atmosphere. While eruptions can destroy nearby settlements, they also create fertile soil that supports agriculture. For example, the volcanic soils around Mount Vesuvius in Italy and Mount Merapi in Indonesia are highly productive for farming. Moreover, geothermal energy from volcanic regions is increasingly being used as a sustainable power source. Scientists monitor volcanoes closely to predict eruptions, but despite technological advances, forecasting remains difficult." +
      "\n\n" +
      "According to the passage, which of the following is a benefit of volcanic activity?",
    options: {
      A: "It reduces global warming.",
      B: "It prevents earthquakes.",
      C: "It creates fertile soil for farming.",
      D: "It eliminates the need for scientists.",
      E: "It stops gas emissions.",
    },
    correct: "C",
    explanation:
      "Teks jelas menyebut contoh Vesuvius dan Merapi dengan tanah vulkanik subur. Itu manfaat utama yang ditonjolkan." +
      "\n\n" +
      "👉 Tips: Kalau soal detail, cari kata kunci (“benefit”) → pindai teks untuk menemukan kalimat yang menyebut manfaat.",
  },

  // SOAL 33
  {
    type: "Reading - Inference",
    question:
      "During the Middle Ages, universities began to emerge in Europe, with institutions like the University of Bologna and the University of Paris leading the way. These early universities focused primarily on theology, law, and medicine. Instruction was delivered in Latin, which allowed scholars from different regions to communicate, but also limited access for the general population. Education was largely reserved for men of privilege, often those preparing for careers in the church or government. Over time, universities expanded their curricula, incorporating philosophy, science, and the humanities, eventually shaping the modern idea of higher education." +
      "\n\n" +
      "What can be inferred about education in medieval universities?",
    options: {
      A: "It was accessible to all citizens regardless of status.",
      B: "Women were the majority of students.",
      C: "Latin functioned as both a unifying and limiting factor.",
      D: "Universities mainly trained farmers and artisans.",
      E: "The humanities were the first subjects ever taught.",
    },
    correct: "C",
    explanation:
      "Latin memungkinkan komunikasi lintas negara, tapi membatasi orang awam yang tidak menguasainya. Itu bisa disimpulkan dari teks walau tidak disebut eksplisit." +
      "\n\n" +
      "👉 Tips: Inference question butuh membaca implikasi. Kalau teks memberi “positive and negative” efek suatu hal (seperti Latin), biasanya itulah jawabannya.",
  },

  // SOAL 34
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The theory of evolution, first widely publicized by Charles Darwin in the 19th century, was initially met with skepticism and controversy. Many religious leaders rejected the idea, seeing it as a challenge to traditional beliefs. Over time, however, evidence from genetics, paleontology, and molecular biology has reinforced Darwin’s insights. Today, evolution is regarded as a cornerstone of modern biology, providing a framework for understanding the diversity of life. Nonetheless, debates about its implications for human origins and morality still persist in some circles." +
      "\n\n" +
      "The word “cornerstone” in the passage is closest in meaning to:",
    options: {
      A: "Obstacle",
      B: "Foundation",
      C: "Contradiction",
      D: "Decoration",
      E: "Limitation",
    },
    correct: "B",
    explanation:
      "Cornerstone secara harfiah adalah batu fondasi, dan secara kiasan berarti dasar utama. Konteksnya: teori evolusi adalah dasar biologi modern." +
      "\n\n" +
      "👉 Tips: Gunakan metaphor logic. Kata-kata seperti cornerstone, pillar, backbone → hampir selalu berarti “dasar” atau “penopang utama”.",
  },

  // SOAL 35
  {
    type: "Reading - Reference",
    question:
      "The invention of the internet has transformed nearly every aspect of human life. From communication and commerce to education and entertainment, it has reshaped global society. In its early days, the internet was primarily used by academics and researchers. Today, however, billions of people access it daily for work and leisure. Despite its many advantages, concerns about privacy, misinformation, and digital addiction continue to grow. It is both a tool of immense progress and a source of new challenges." +
      "\n\n" +
      "In the passage, the word “It” in the last sentence refers to:",
    options: {
      A: "Progress",
      B: "Privacy",
      C: "The internet",
      D: "Digital addiction",
      E: "Communication",
    },
    correct: "C",
    explanation:
      "“It is both a tool…” → subjek sebelumnya yang konsisten dibahas adalah “the internet”." +
      "\n\n" +
      "👉 Tips: Untuk reference, hampir selalu jawabannya adalah noun utama yang jadi topik paragraf, bukan detail sampingan.",
  },

  // SOAL 36
  {
    type: "Reading - Main Idea",
    question:
      "The Renaissance, beginning in Italy during the 14th century, marked a revival of interest in classical art, literature, and learning. Wealthy patrons such as the Medici family funded artists, architects, and scholars, leading to remarkable cultural achievements. Figures like Leonardo da Vinci and Michelangelo embodied the spirit of the era with works that combined technical mastery and humanistic ideals. At the same time, the invention of the printing press spread new ideas rapidly across Europe, fueling intellectual exchange. The Renaissance was not only about art, but also about science, politics, and philosophy, shaping the transition from the medieval world to modernity." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Renaissance was an artistic movement confined to Italy.",
      B: "Wealthy families prevented cultural development during the Renaissance.",
      C: "The Renaissance was a multifaceted era of cultural, scientific, and intellectual rebirth.",
      D: "The printing press was the only important invention of the Renaissance.",
      E: "The Renaissance replaced medieval politics with democracy.",
    },
    correct: "C",
    explanation:
      "Teks menjelaskan seni, sains, filsafat, teknologi, dan patronase → semua aspek menjadikan Renaissance era kebangkitan menyeluruh." +
      "\n\n" +
      "👉 Tips: Cari jawaban yang paling komprehensif. Kalau opsi terlalu sempit (hanya seni, hanya printing press), biasanya salah.",
  },

  // SOAL 37
  {
    type: "Reading - Supporting Detail",
    question:
      "Shakespeare is often regarded as the greatest playwright in the English language. His plays, written more than 400 years ago, continue to be performed worldwide. One reason for their enduring popularity is their exploration of universal themes such as love, power, jealousy, and betrayal. Additionally, Shakespeare’s mastery of language, including his use of metaphor and wordplay, has left a lasting impact on literature. Scholars also note that his works reflect the social and political tensions of Elizabethan England, offering valuable historical insight." +
      "\n\n" +
      "According to the passage, why do Shakespeare’s plays remain popular today?",
    options: {
      A: "Because they only describe Elizabethan society.",
      B: "Because they contain universal themes and brilliant language.",
      C: "Because they are short and easy to understand.",
      D: "Because they avoid political issues.",
      E: "Because they were written recently.",
    },
    correct: "B",
    explanation:
      "Teks menyebut dua alasan utama: tema universal (love, power, jealousy) dan gaya bahasa (metaphor, wordplay)." +
      "\n\n" +
      "👉 Tips: Kalau pertanyaan pakai kata “why”, biasanya jawabannya kombinasi dari alasan utama yang ditulis eksplisit dalam teks.",
  },

  // SOAL 38
  {
    type: "Reading - Inference",
    question:
      "The Wright brothers, Orville and Wilbur, are credited with inventing the first successful airplane in 1903. Their achievement was not the result of luck but of years of careful experimentation and engineering. Unlike many of their contemporaries, they studied aerodynamics in depth and built their own wind tunnel to test wing designs. Their success demonstrated the importance of scientific method and persistence in innovation. Although airplanes have since evolved dramatically, the Wright brothers’ principles still influence aviation today." +
      "\n\n" +
      "What can be inferred about the Wright brothers’ approach to invention?",
    options: {
      A: "They relied primarily on chance.",
      B: "They prioritized systematic testing and research.",
      C: "They copied ideas from other inventors.",
      D: "They avoided scientific methods.",
      E: "They did not face challenges in their work.",
    },
    correct: "B",
    explanation:
      "Kalimat “built their own wind tunnel… careful experimentation” jelas menunjukkan pendekatan ilmiah yang terencana." +
      "\n\n" +
      "👉 Tips: Inference sering menanyakan sikap atau metode tokoh. Cari kata kerja/kegiatan yang menggambarkan cara berpikir mereka.",
  },

  // SOAL 39
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The discovery of penicillin by Alexander Fleming in 1928 is often described as serendipitous. Fleming noticed that a mold called Penicillium notatum produced a substance that killed many bacteria. This chance observation led to the development of antibiotics, which revolutionized medicine. While the discovery may have been accidental, the ability to recognize its significance required scientific insight. Penicillin has since saved countless lives, though concerns about resistance remain today." +
      "\n\n" +
      "The word “serendipitous” in the passage is closest in meaning to:",
    options: {
      A: "Planned",
      B: "Accidental",
      C: "Dangerous",
      D: "Predictable",
      E: "Intentional",
    },
    correct: "B",
    explanation:
      "Serendipitous berarti terjadi secara kebetulan yang menguntungkan. Konteks: Fleming tidak sengaja menemukan jamur, tapi melihat manfaatnya." +
      "\n\n" +
      "👉 Tips: Jika kata asing muncul, lihat apakah konteksnya menunjukkan “planned” atau “unexpected”. Kata kunci: “chance observation” → jelas accidental.",
  },

  // SOAL 40
  {
    type: "Reading - Reference",
    question:
      "The development of renewable energy has accelerated in recent decades. Solar, wind, and hydroelectric power are increasingly seen as alternatives to fossil fuels. Governments around the world are investing heavily in these technologies to reduce carbon emissions and combat climate change. However, critics argue that they alone cannot yet meet global energy demands. This means that while they are essential for a sustainable future, they must be combined with other solutions such as improved efficiency and new storage technologies." +
      "\n\n" +
      "In the passage, the word “they” in the sentence “they alone cannot yet meet global energy demands” refers to:",
    options: {
      A: "Governments",
      B: "Carbon emissions",
      C: "Renewable energy sources",
      D: "Fossil fuels",
      E: "Storage technologies",
    },
    correct: "C",
    explanation:
      "“They” jelas mengacu pada “Solar, wind, and hydroelectric power” → renewable energy." +
      "\n\n" +
      "👉 Tips: Untuk reference, cari kata ganti yang paling dekat sebelumnya dan tetap logis dengan konteks kalimat.",
  },

  // SOAL 41
  {
    type: "Reading - Main Idea",
    question:
      "The Industrial Revolution, which began in Britain during the late 18th century, marked a profound transformation in human society. Before this period, economies were largely agrarian, with most people working on farms and producing goods by hand. The invention of machinery, such as the steam engine and spinning jenny, allowed for mass production and greatly increased efficiency. Factories emerged as centers of economic activity, attracting workers from rural areas to cities. While this brought prosperity and innovation, it also created social problems, including child labor, overcrowded housing, and unsafe working conditions. The Industrial Revolution spread across Europe and North America, setting the stage for modern capitalism and globalization." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Industrial Revolution only created negative social problems.",
      B: "The Industrial Revolution transformed economies and societies worldwide.",
      C: "Machinery was the sole cause of economic growth.",
      D: "Agriculture became more important than industry.",
      E: "Britain remained unaffected by industrialization.",
    },
    correct: "B",
    explanation:
      "Paragraf menjelaskan perubahan dari agraria → industri, mesin, kota, sosial, hingga globalisasi. Jadi ide utamanya: transformasi menyeluruh." +
      "\n\n" +
      "👉 Tips: Jika banyak aspek dijelaskan (ekonomi, sosial, teknologi), main idea biasanya berupa transformasi besar, bukan satu aspek kecil.",
  },

  // SOAL 42
  {
    type: "Reading - Supporting Detail",
    question:
      "The Great Wall of China was built over centuries to protect Chinese states and empires from invasions. The earliest sections date back to the 7th century BC, but the most famous parts were constructed during the Ming Dynasty. Stretching thousands of kilometers, the wall included watchtowers, barracks, and signaling systems. It was not only a military defense but also a symbol of strength and unity. However, despite its scale, the wall did not always prevent invasions, as determined armies could find ways to bypass it. Today, the Great Wall is one of the most recognizable landmarks in the world, attracting millions of tourists each year." +
      "\n\n" +
      "Which of the following was part of the Great Wall’s design?",
    options: {
      A: "Underground tunnels for trade",
      B: "Watchtowers and signaling systems",
      C: "Bridges connecting foreign cities",
      D: "Canals for irrigation",
      E: "Residential palaces for emperors",
    },
    correct: "B",
    explanation:
      "Teks menyebutkan detail desain: watchtowers, barracks, signaling systems. Itu yang benar." +
      "\n\n" +
      "👉 Tips: Untuk detail, scan kata kunci dari pertanyaan (“part of design”) lalu cocokkan dengan kalimat spesifik.",
  },

  // SOAL 43
  {
    type: "Reading - Inference",
    question:
      "Marie Curie, the first woman to win a Nobel Prize, made groundbreaking discoveries in the field of radioactivity. Along with her husband Pierre, she identified two new elements, polonium and radium. Her relentless research not only advanced science but also had medical applications, particularly in cancer treatment. Despite her fame, Curie faced many obstacles as a woman in science during the late 19th and early 20th centuries. She worked under challenging conditions, often in poorly equipped laboratories, and her health suffered due to prolonged exposure to radiation. Nevertheless, her dedication inspired future generations of scientists, especially women, to pursue careers in research." +
      "\n\n" +
      "What can be inferred about Marie Curie’s career?",
    options: {
      A: "She succeeded without facing any significant barriers.",
      B: "Her discoveries had no impact beyond chemistry.",
      C: "Her persistence allowed her to overcome gender bias and poor conditions.",
      D: "She abandoned her research due to health problems.",
      E: "She was primarily interested in politics.",
    },
    correct: "C",
    explanation:
      "Teks menekankan hambatan (gender bias, laboratorium minim fasilitas) → tapi ia tetap berprestasi. Itu inference paling logis." +
      "\n\n" +
      "👉 Tips: Inference sering mengambil poin “contrast” (ada kesulitan → tapi tetap sukses). Cari hubungan semacam itu.",
  },

  // SOAL 44
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The printing press, invented by Johannes Gutenberg in the 15th century, revolutionized the spread of knowledge. Before its invention, books were painstakingly copied by hand, making them rare and expensive. The printing press allowed texts to be reproduced quickly and at lower cost. This democratized learning, as literacy rates rose and ideas spread rapidly across Europe. The Reformation, the Scientific Revolution, and the Enlightenment all benefited from the dissemination of information enabled by printing technology." +
      "\n\n" +
      "The word “dissemination” in the passage is closest in meaning to:",
    options: {
      A: "Destruction",
      B: "Limitation",
      C: "Spread",
      D: "Storage",
      E: "Preservation",
    },
    correct: "C",
    explanation:
      "Dissemination berarti penyebaran. Konteks: printing press membantu penyebaran ilmu dan ide." +
      "\n\n" +
      "👉 Tips: Jika tidak tahu kata, lihat konteks sekitar. Kata “rise in literacy” + “ideas spread rapidly” → sinonim “spread”.",
  },

  // SOAL 45
  {
    type: "Reading - Reference",
    question:
      "Electric vehicles (EVs) are increasingly popular as alternatives to gasoline-powered cars. They produce no tailpipe emissions, reducing air pollution in urban areas. Governments encourage their adoption through subsidies and charging infrastructure. However, challenges remain, including the high cost of batteries and limited driving range. Some critics argue that the electricity used to charge EVs may still come from fossil fuels. Nevertheless, advocates believe that as renewable energy expands, these concerns will diminish. They see EVs as a crucial step toward a sustainable transportation system." +
      "\n\n" +
      "In the passage, the word “They” in the last sentence refers to:",
    options: {
      A: "Fossil fuels",
      B: "Renewable energy sources",
      C: "Critics of EVs",
      D: "Advocates of EVs",
      E: "Governments",
    },
    correct: "D",
    explanation:
      "“They see EVs…” → subjeknya adalah para pendukung (advocates) yang percaya EV penting." +
      "\n\n" +
      "👉 Tips: Untuk reference, selalu cek subjek kalimat sebelumnya. Jangan terkecoh oleh kata benda lain yang lebih dekat tapi tidak cocok secara logika.",
  },

  // SOAL 46
  {
    type: "Reading - Main Idea",
    question:
      "The Age of Exploration, spanning the 15th to 17th centuries, saw European powers such as Spain and Portugal embark on ambitious voyages across the globe. Motivated by the search for new trade routes, wealth, and territorial expansion, explorers like Columbus, Vasco da Gama, and Magellan reshaped world history. Their expeditions connected continents, leading to the exchange of goods, cultures, and ideas in what is now known as the Columbian Exchange. While these explorations brought economic growth and scientific discovery, they also resulted in colonization, exploitation, and the spread of diseases that devastated indigenous populations. The Age of Exploration was thus both a period of remarkable achievement and profound human cost." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Age of Exploration was only about scientific discovery.",
      B: "The Age of Exploration brought global connections but also exploitation.",
      C: "European powers failed to expand trade during this era.",
      D: "Explorers traveled mainly for religious purposes.",
      E: "Indigenous populations fully benefited from European contact.",
    },
    correct: "B",
    explanation:
      "Teks menunjukkan sisi positif (perdagangan, ilmu) + sisi negatif (penyakit, kolonialisme). Jadi ide utamanya adalah keseimbangan keduanya." +
      "\n\n" +
      "👉 Tips: Main idea sering mencakup dua sisi bila teks punya nada positif dan negatif.",
  },

  // SOAL 47
  {
    type: "Reading - Supporting Detail",
    question:
      "The Amazon Rainforest, often called the “lungs of the Earth,” produces about 20% of the world’s oxygen. It is home to unparalleled biodiversity, with millions of species of plants, animals, and insects. Indigenous peoples have lived in harmony with the forest for thousands of years, relying on its resources for food, shelter, and medicine. However, deforestation caused by logging, farming, and mining threatens the ecosystem. Scientists warn that losing the Amazon would accelerate climate change and cause irreversible loss of species." +
      "\n\n" +
      "According to the passage, why is the Amazon called the “lungs of the Earth”?",
    options: {
      A: "Because it absorbs carbon dioxide and produces oxygen.",
      B: "Because it provides shelter for indigenous peoples.",
      C: "Because it is the largest forest in Asia.",
      D: "Because it prevents earthquakes.",
      E: "Because it has been completely destroyed.",
    },
    correct: "A",
    explanation:
      "Teks menekankan produksi oksigen 20% dunia. Itu alasan sebutan “lungs”." +
      "\n\n" +
      "👉 Tips: Untuk why questions, fokus ke klaim metaforis dan lihat penjelasan literalnya dalam teks.",
  },

  // SOAL 48
  {
    type: "Reading - Inference",
    question:
      "The rise of social media has dramatically changed the way people communicate. Platforms like Facebook, Twitter, and Instagram allow instant sharing of news, opinions, and personal experiences. While this has created opportunities for global connection, it has also raised concerns about misinformation, privacy, and mental health. Psychologists note that excessive use of social media can lead to anxiety, depression, and decreased self-esteem, particularly among young people. Yet, despite these drawbacks, social media remains deeply embedded in daily life and shows no sign of disappearing." +
      "\n\n" +
      "What can be inferred about social media’s role in society?",
    options: {
      A: "It is entirely harmful and should be banned.",
      B: "It has both benefits and risks, but remains integral to modern life.",
      C: "It is used only by young people.",
      D: "It eliminates the problem of misinformation.",
      E: "It is rapidly declining in popularity.",
    },
    correct: "B",
    explanation:
      "Teks menekankan manfaat (global connection) + masalah (misinformation, mental health), tapi tetap penting. Jadi inference: peran ganda tapi fundamental." +
      "\n\n" +
      "👉 Tips: Inference sering menuntut kesimpulan “balanced” bila teks menampilkan pro-kontra.",
  },

  // SOAL 49
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The collapse of the Roman Empire in the 5th century is often attributed to a combination of internal weaknesses and external pressures. Internally, corruption, economic decline, and political instability weakened Rome. Externally, invasions by Germanic tribes accelerated the empire’s fall. Historians describe this period as tumultuous, marked by chaos and rapid change. Despite the fall of Rome, many of its ideas in law, architecture, and governance continued to influence later civilizations." +
      "\n\n" +
      "The word “tumultuous” in the passage is closest in meaning to:",
    options: {
      A: "Peaceful",
      B: "Chaotic",
      C: "Predictable",
      D: "Stable",
      E: "Ordinary",
    },
    correct: "B",
    explanation:
      "Tumultuous = penuh kekacauan. Konteks: jatuhnya Romawi → chaos, invasi, instabilitas." +
      "\n\n" +
      "👉 Tips: Saat menemukan kata asing, hubungkan dengan nuansa teks. Kata yang menggambarkan “fall” biasanya negatif.",
  },

  // SOAL 50
  {
    type: "Reading - Reference",
    question:
      "The theory of plate tectonics explains how Earth’s outer shell is divided into several large, rigid plates that move over the mantle. These movements cause earthquakes, volcanic activity, and the formation of mountains. Alfred Wegener’s earlier theory of continental drift laid the foundation for this understanding, though it was not fully accepted until the mid-20th century. Today, scientists use satellite technology to measure plate movements with great accuracy. This has improved our ability to predict geological hazards, although complete certainty remains impossible." +
      "\n\n" +
      "In the passage, the word “This” in the last sentence refers to:",
    options: {
      A: "Satellite technology",
      B: "Plate tectonics",
      C: "Predicting hazards",
      D: "Continental drift",
      E: "Earthquakes",
    },
    correct: "A",
    explanation:
      "“This has improved our ability…” → subjeknya “scientists use satellite technology”. Jadi jelas menunjuk ke teknologi satelit." +
      "\n\n" +
      "👉 Tips: Untuk reference, lihat kata sebelum pronoun, biasanya satu kalimat sebelumnya.",
  },

  // SOAL 51
  {
    type: "Reading - Main Idea",
    question:
      "The Enlightenment, also known as the Age of Reason, emerged in Europe during the 17th and 18th centuries. Thinkers like Voltaire, John Locke, and Montesquieu emphasized reason, science, and individual rights over tradition and superstition. Their ideas challenged monarchies and the church, laying intellectual foundations for revolutions in America and France. The Enlightenment also promoted education, freedom of expression, and religious tolerance. However, critics argue that not all groups benefited equally, as women and non-Europeans were often excluded from these ideals. Despite its limitations, the Enlightenment remains a pivotal moment in shaping modern democratic societies." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Enlightenment emphasized reason and inspired political revolutions.",
      B: "The Enlightenment benefited women more than men.",
      C: "Enlightenment thinkers rejected science.",
      D: "Monarchies fully supported Enlightenment ideas.",
      E: "The Enlightenment was limited to religious reform.",
    },
    correct: "A",
    explanation:
      "Teks menekankan ide reason, science, hak individu → pengaruh ke revolusi. Itu ide utama." +
      "\n\n" +
      "👉 Tips: Cari kata kunci yang muncul di awal (“reason, science, rights”) dan di akhir (“pivotal for democracy”).",
  },

  // SOAL 52
  {
    type: "Reading - Supporting Detail",
    question:
      "The telephone, invented by Alexander Graham Bell in 1876, transformed communication by allowing voices to travel over long distances. Before its invention, communication across cities or countries relied on letters or the telegraph, both of which were slow or limited. The telephone quickly spread into homes and businesses, shrinking the world and speeding up commerce. Today, it has evolved into mobile and internet-based systems, but its original invention laid the groundwork for all modern telecommunications." +
      "\n\n" +
      "What was one limitation of communication before the telephone?",
    options: {
      A: "Messages were too private.",
      B: "Letters and telegraphs were slow or limited.",
      C: "People had unlimited access to information.",
      D: "Communication was unnecessary across cities.",
      E: "The telegraph was faster than the telephone.",
    },
    correct: "B",
    explanation:
      "Teks jelas menyebut kendala utama: lambat dan terbatas." +
      "\n\n" +
      "👉 Tips: Kalau pertanyaan detail, sering jawabannya berupa frasa yang sama persis dari teks.",
  },

  // SOAL 53
  {
    type: "Reading - Inference",
    question:
      "Climate change is one of the most pressing global challenges of the 21st century. Rising temperatures have led to melting glaciers, rising sea levels, and more extreme weather events. Scientists agree that human activity, particularly the burning of fossil fuels, is a major contributor. Although some progress has been made in renewable energy adoption, global emissions continue to rise. Without significant action, experts warn of severe consequences for ecosystems, economies, and human health." +
      "\n\n" +
      "What can be inferred about current efforts to combat climate change?",
    options: {
      A: "They have completely solved the problem.",
      B: "They are insufficient to stop rising emissions.",
      C: "They are mainly focused on agriculture.",
      D: "They are universally rejected by governments.",
      E: "They have eliminated extreme weather events.",
    },
    correct: "B",
    explanation:
      "Teks: ada progres (renewables) → tapi emisi tetap naik. Jadi inference: usaha belum cukup." +
      "\n\n" +
      "👉 Tips: Inference butuh menghubungkan “progress exists” + “problem persists” → artinya usaha tidak memadai.",
  },

  // SOAL 54
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The Silk Road was not a single road but a network of trade routes connecting Asia, the Middle East, and Europe. It facilitated not only the exchange of goods like silk, spices, and precious metals but also the transmission of culture, religion, and technology. This cultural interchange profoundly shaped civilizations, spreading ideas such as Buddhism and innovations like papermaking. The decline of the Silk Road began with the rise of sea trade routes in the 15th century." +
      "\n\n" +
      "The word “interchange” in the passage is closest in meaning to:",
    options: {
      A: "Competition",
      B: "Exchange",
      C: "Conflict",
      D: "Decline",
      E: "Isolation",
    },
    correct: "B",
    explanation:
      "Interchange berarti pertukaran timbal balik. Konteks: pertukaran budaya, agama, teknologi." +
      "\n\n" +
      "👉 Tips: Kalau ada kata sulit, coba ganti dengan sinonim sederhana. “Cultural interchange” ≈ “cultural exchange”.",
  },

  // SOAL 55
  {
    type: "Reading - Vocabulary in Context",
    question:
      "In the world of biology, the word resilient often describes species that can survive harsh environments. For instance, certain bacteria can withstand extreme heat, while others thrive in frozen landscapes. Desert plants like cacti are considered resilient because they adapt to scarce water supplies. This adaptability ensures their survival despite changing climates. Scientists argue that resilience in living organisms is not merely about survival but about maintaining functionality under pressure." +
      "\n\n" +
      "The word resilient in the passage is closest in meaning to:",
    options: {
      A: "Fragile",
      B: "Adaptable",
      C: "Temporary",
      D: "Predictable",
      E: "Weak",
    },
    correct: "B",
    explanation:
      "Kata resilient berarti mampu menyesuaikan diri dan bertahan dalam kondisi sulit. Konteksnya adalah bakteri dan kaktus yang bisa tetap hidup meski lingkungan ekstrem. Itu sesuai dengan makna “adaptable.”" +
      "\n\n" +
      "👉 Tips: Saat mencari sinonim dalam konteks, jangan hanya menghafal arti kamus. Bacalah kalimat sekitar kata tersebut. Resilient bisa berarti “tangguh,” tetapi di sini hubungannya dengan kemampuan beradaptasi.",
  },

  // SOAL 56
  {
    type: "Reading - Main Idea",
    question:
      "Throughout history, humans have sought ways to measure time. Ancient civilizations relied on sundials, which used the shadow of the sun to mark hours. Later, water clocks were invented to track the passage of time even at night. In the 14th century, mechanical clocks became widespread in Europe, allowing for greater accuracy. The invention of the pendulum clock by Christiaan Huygens in the 17th century further improved precision. In modern times, atomic clocks, based on the vibrations of atoms, measure time with extraordinary accuracy. These clocks are so precise that they are used to regulate GPS systems and international time standards." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Sundials were the most accurate method of timekeeping.",
      B: "Humans have continually developed more accurate ways to measure time.",
      C: "Atomic clocks are the only reliable clocks in the modern world.",
      D: "Europe invented all forms of clocks.",
      E: "Mechanical clocks are no longer useful today.",
    },
    correct: "B",
    explanation:
      "Teks membahas perkembangan alat ukur waktu: dari sundial → water clock → mechanical clock → pendulum → atomic clock. Semua mengarah pada ide utama: evolusi menuju akurasi lebih tinggi." +
      "\n\n" +
      "👉 Tips: Untuk menemukan main idea, lihat pola kronologis atau progresi dalam teks. Jika penulis menceritakan “dulu begini, lalu lebih baik begini,” biasanya main idea adalah tentang perkembangan atau perubahan.",
  },

  // SOAL 57
  {
    type: "Reading - Supporting Detail",
    question:
      "The Amazon rainforest is often referred to as the “lungs of the Earth” because it produces around 20% of the world’s oxygen. However, this vast forest does much more than provide oxygen. It regulates global climate by absorbing carbon dioxide, supports biodiversity with millions of species, and influences rainfall patterns across South America. Unfortunately, deforestation threatens these functions. Logging, agriculture, and mining reduce forest cover, leading to soil degradation and loss of wildlife habitats. Scientists warn that if deforestation continues, the Amazon may reach a “tipping point” where it can no longer sustain itself." +
      "\n\n" +
      "According to the passage, what role does the Amazon rainforest play in global climate?",
    options: {
      A: "It produces rain in Africa.",
      B: "It regulates climate by absorbing carbon dioxide.",
      C: "It provides food for all human populations.",
      D: "It increases soil fertility worldwide.",
      E: "It prevents mining in South America.",
    },
    correct: "B",
    explanation:
      "Jawaban ini jelas dari kalimat: “It regulates global climate by absorbing carbon dioxide.” Jadi fungsi utamanya adalah pengendalian iklim global." +
      "\n\n" +
      "👉 Tips: Kalau soal detail, perhatikan kata kunci seperti “role,” “function,” atau “according to the passage.” Jawaban biasanya tersurat langsung, tidak perlu inferensi.",
  },

  // SOAL 58
  {
    type: "Reading - Inference",
    question:
      "During the 19th century, railroads transformed economies and societies. Before railroads, transporting goods across long distances was slow and costly, often relying on horse-drawn carriages or river transport. With the expansion of railways, goods could be shipped faster and in larger quantities. This lowered costs, encouraged trade, and expanded markets. Cities along railway lines grew rapidly, while industries benefited from easier access to raw materials and new customers. However, the railroads also displaced traditional forms of transport and altered local economies, sometimes causing hardships for communities that were bypassed." +
      "\n\n" +
      "What can be inferred about the impact of railroads in the 19th century?",
    options: {
      A: "They completely eliminated poverty.",
      B: "They created both opportunities and challenges.",
      C: "They only benefited rural communities.",
      D: "They stopped industrialization.",
      E: "They made horse-drawn carriages more popular.",
    },
    correct: "B",
    explanation:
      "Teks menekankan manfaat (perdagangan berkembang, biaya turun, kota tumbuh) dan sisi negatif (beberapa komunitas terpinggirkan). Jadi inferensi yang tepat: railroads memberi peluang sekaligus tantangan." +
      "\n\n" +
      "👉 Tips: Soal inference tidak menanyakan hal tersurat, tapi hal yang logis berdasarkan informasi. Kalau jawabannya terlalu ekstrim (“completely eliminated poverty”), biasanya salah.",
  },

  // SOAL 59
  {
    type: "Reading - Tone/Purpose",
    question:
      "Marie Curie, a pioneering scientist, made groundbreaking discoveries in radioactivity. Despite facing discrimination as a woman in science, she persevered and won two Nobel Prizes, one in Physics and another in Chemistry. Her dedication to research not only advanced scientific knowledge but also opened doors for women in academia. Curie’s life illustrates the power of perseverance, intellectual curiosity, and courage in the face of adversity." +
      "\n\n" +
      "What is the author’s tone in the passage?",
    options: {
      A: "Critical",
      B: "Admiring",
      C: "Neutral",
      D: "Humorous",
      E: "Skeptical",
    },
    correct: "B",
    explanation:
      "Teks menggunakan kata-kata positif: pioneering, groundbreaking, perseverance, courage. Semua menunjukkan rasa kagum penulis terhadap Curie." +
      "\n\n" +
      "👉 Tips: Saat menilai tone, perhatikan kata sifat (adjectives) dan nuansa emosional. Jika teks banyak memakai kata positif, maka tone biasanya admiring atau respectful.",
  },

  // SOAL 60
  {
    type: "Reading - Main Idea",
    question:
      "Renewable energy sources, such as solar, wind, and hydroelectric power, are increasingly seen as essential alternatives to fossil fuels. Unlike coal and oil, they do not emit large amounts of greenhouse gases, making them critical in the fight against climate change. Additionally, renewable energy reduces dependence on imported fuels, creating energy security. Although there are challenges—such as high initial costs, technological limitations, and the need for infrastructure—many countries are investing heavily in renewable projects. The long-term benefits, including cleaner air, job creation, and sustainable energy, outweigh the difficulties." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Renewable energy is costly and impractical.",
      B: "Fossil fuels will never be replaced.",
      C: "Renewable energy offers many benefits despite challenges.",
      D: "Renewable energy depends entirely on imported fuels.",
      E: "Renewable energy is less important than traditional energy sources.",
    },
    correct: "C",
    explanation:
      "Teks menekankan manfaat besar energi terbarukan (bersih, aman, berkelanjutan), meskipun ada tantangan (biaya, teknologi). Jadi ide utama adalah keseimbangan: ada hambatan, tetapi keuntungan jangka panjang lebih besar." +
      "\n\n" +
      "👉 Tips: Untuk main idea, hindari jawaban yang hanya menyoroti satu sisi (misalnya hanya tantangan atau hanya manfaat). Cari jawaban yang paling mencerminkan keseimbangan isi teks.",
  },

  // SOAL 61
  {
    type: "Reading - Supporting Detail",
    question:
      "The Industrial Revolution, which began in Britain during the late 18th century, marked a profound transformation in human society. Before this era, most people lived in rural areas and worked in agriculture. With the advent of new machinery, such as the spinning jenny and the steam engine, production shifted from homes and small workshops to factories. This change increased efficiency, lowered production costs, and encouraged urbanization, as people moved to cities for employment. However, the revolution also brought challenges: overcrowded housing, poor working conditions, and child labor became widespread. Despite these issues, the Industrial Revolution laid the foundation for modern economies, technological innovation, and global trade networks." +
      "\n\n" +
      "Which of the following was a negative consequence of the Industrial Revolution mentioned in the passage?",
    options: {
      A: "Increased production efficiency",
      B: "Expansion of global trade",
      C: "Poor working conditions",
      D: "Development of new machinery",
      E: "Decrease in urbanization",
    },
    correct: "C",
    explanation:
      "Teks dengan jelas menyebut: “poor working conditions, and child labor became widespread.” Jadi salah satu dampak negatif adalah kondisi kerja yang buruk." +
      "\n\n" +
      "👉 Tips: Untuk detail questions, perhatikan kata kunci negatif seperti problems, issues, challenges. Itu sering menunjuk jawaban yang benar.",
  },

  // SOAL 62
  {
    type: "Reading - Main Idea",
    question:
      "Coral reefs, often called the “rainforests of the sea,” are among the most diverse ecosystems on Earth. They provide habitat for countless marine species and protect coastlines from erosion. Reefs also support human livelihoods through fishing and tourism. However, coral reefs face severe threats, particularly from climate change. Rising ocean temperatures cause coral bleaching, a process in which corals expel the algae living in their tissues, turning them white and making them vulnerable. Additionally, ocean acidification weakens coral skeletons, while pollution and overfishing further degrade reef systems. Despite these challenges, scientists and conservationists are working to restore reefs by creating marine protected areas and developing methods to grow corals in laboratories for transplantation." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Coral reefs are doomed to extinction.",
      B: "Coral reefs face serious threats but conservation efforts are underway.",
      C: "Coral reefs provide no benefits to humans.",
      D: "Coral reefs exist only in tropical regions.",
      E: "Coral reefs are only damaged by overfishing.",
    },
    correct: "B",
    explanation:
      "Teks memaparkan manfaat coral reefs → ancaman serius → upaya konservasi. Jadi ide utama adalah keseimbangan: ancaman besar ada, tetapi ada solusi." +
      "\n\n" +
      "👉 Tips: Main idea biasanya muncul dari struktur: manfaat → masalah → solusi. Cari kalimat yang mencerminkan ketiga aspek ini.",
  },

  // SOAL 63
  {
    type: "Reading - Vocabulary in Context",
    question:
      "In economics, the term volatile is often used to describe markets that fluctuate rapidly and unpredictably. For example, stock prices may soar one day and plummet the next, depending on investor confidence, political events, or natural disasters. A volatile market makes it difficult for businesses and individuals to plan long-term investments. While some traders thrive in such environments by taking risks, others may suffer heavy losses." +
      "\n\n" +
      "The word volatile in the passage is closest in meaning to:",
    options: {
      A: "Stable",
      B: "Unpredictable",
      C: "Steady",
      D: "Reliable",
      E: "Secure",
    },
    correct: "B",
    explanation:
      "Kata volatile berarti mudah berubah-ubah dan sulit diprediksi. Konteks: harga saham bisa naik dan turun cepat. Itu sejalan dengan makna “unpredictable.”" +
      "\n\n" +
      "👉 Tips: Saat menjawab vocabulary in context, jangan hanya terjemahkan secara literal. Lihat kata sifat yang mengiringinya (fluctuate rapidly, unpredictably), itu menjadi clue.",
  },

  // SOAL 64
  {
    type: "Reading - Inference",
    question:
      "The invention of the printing press by Johannes Gutenberg in the 15th century is often regarded as one of the most important events in human history. Before its creation, books were copied by hand, a process that was time-consuming and limited access to knowledge. With the printing press, books could be produced more quickly and cheaply, allowing ideas to spread widely. This facilitated the rise of literacy, the Reformation, and the Scientific Revolution. Many historians argue that without the printing press, Europe’s intellectual and cultural development would have been far slower." +
      "\n\n" +
      "What can be inferred about the impact of the printing press?",
    options: {
      A: "It discouraged people from reading.",
      B: "It slowed down the spread of knowledge.",
      C: "It played a crucial role in Europe’s intellectual growth.",
      D: "It replaced scientific discoveries.",
      E: "It made handwritten books more valuable.",
    },
    correct: "C",
    explanation:
      "Teks menekankan bahwa printing press mempercepat penyebaran ide dan memicu literasi, reformasi, revolusi sains. Jadi inferensi logis: alat ini sangat penting bagi perkembangan intelektual Eropa." +
      "\n\n" +
      "👉 Tips: Pada soal inference, jangan pilih jawaban ekstrem negatif jika teks menggambarkan manfaat. Fokus pada dampak implisit yang bisa dirangkum dari detail.",
  },

  // SOAL 65
  {
    type: "Reading - Purpose",
    question:
      "Plastic pollution has become a pressing global issue. Millions of tons of plastic waste enter the oceans every year, harming marine life and entering the food chain. Sea turtles mistake plastic bags for jellyfish, while seabirds ingest small plastic particles, leading to injury or death. Governments and organizations worldwide are attempting to address this crisis by banning single-use plastics, encouraging recycling, and promoting biodegradable alternatives." +
      "\n\n" +
      "What is the primary purpose of the passage?",
    options: {
      A: "To explain how plastics are manufactured",
      B: "To highlight the dangers of plastic pollution and possible solutions",
      C: "To argue that plastics are harmless",
      D: "To compare plastics with other materials",
      E: "To describe the history of plastic invention",
    },
    correct: "B",
    explanation:
      "Teks tidak membahas cara membuat plastik atau sejarahnya, melainkan menekankan masalah polusi plastik dan solusi yang sedang diupayakan." +
      "\n\n" +
      "👉 Tips: Untuk purpose, tanyakan: “Mengapa penulis menulis ini?” Biasanya jawabannya adalah to inform, to warn, atau to persuade.",
  },

  // SOAL 66
  {
    type: "Reading - Supporting Detail",
    question:
      "The Black Death, which swept through Europe in the 14th century, killed millions of people and drastically reduced the population. Spread primarily by fleas carried on rats, the plague caused symptoms such as fever, chills, and swollen lymph nodes. The devastation of the disease had profound social and economic consequences: labor shortages increased wages for workers, feudal structures weakened, and many turned to religion for answers." +
      "\n\n" +
      "According to the passage, what was one economic effect of the Black Death?",
    options: {
      A: "Decrease in workers’ wages",
      B: "Strengthening of feudal structures",
      C: "Increase in workers’ wages",
      D: "Elimination of all religious practices",
      E: "Expansion of rat populations",
    },
    correct: "C",
    explanation:
      "Teks menyatakan: “labor shortages increased wages for workers.” Jadi salah satu efek ekonomi adalah kenaikan upah." +
      "\n\n" +
      "👉 Tips: Pada soal detail, cari cause-effect dalam teks. Jika disebut “X caused Y,” kemungkinan soal akan menanyakan Y.",
  },

  // SOAL 67
  {
    type: "Reading - Tone",
    question:
      "Despite being considered one of the greatest inventors in history, Nikola Tesla lived much of his life in poverty. His contributions, such as alternating current (AC) electricity, wireless communication, and early concepts of radar, shaped modern technology. However, Tesla struggled to secure consistent financial backing, often losing recognition and credit to more commercially successful rivals like Thomas Edison. Even so, Tesla remained passionate about his vision of a world powered by clean, limitless energy." +
      "\n\n" +
      "What is the author’s tone in the passage?",
    options: {
      A: "Critical",
      B: "Admiring",
      C: "Humorous",
      D: "Indifferent",
      E: "Angry",
    },
    correct: "B",
    explanation:
      "Penulis menggunakan kata-kata positif seperti greatest inventors, shaped modern technology, passionate vision. Ini menunjukkan rasa kagum meski ada sisi tragis dalam hidup Tesla." +
      "\n\n" +
      "👉 Tips: Untuk tone, perhatikan kata sifat yang digunakan. Jika dominan positif → admiring, jika dominan negatif → critical.",
  },

  // SOAL 68
  {
    type: "Reading - Main Idea",
    question:
      "Climate change is not only an environmental issue but also a social and economic challenge. Rising sea levels threaten coastal cities, while extreme weather events disrupt agriculture and food supplies. Developing countries, which often lack resources to adapt, are especially vulnerable. Moreover, climate change intensifies inequality, as wealthier nations can invest in mitigation strategies, leaving poorer nations at greater risk. Addressing this crisis requires international cooperation, technological innovation, and policy changes that reduce greenhouse gas emissions." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Climate change only affects wealthy nations.",
      B: "Climate change is mainly a political problem.",
      C: "Climate change is a global challenge with environmental, social, and economic impacts.",
      D: "Climate change can be solved by individuals alone.",
      E: "Climate change is caused only by agriculture.",
    },
    correct: "C",
    explanation:
      "Teks menekankan bahwa dampaknya multidimensi: lingkungan, sosial, ekonomi. Jadi ide utama: climate change adalah krisis global yang kompleks." +
      "\n\n" +
      "👉 Tips: Main idea biasanya jawaban yang paling luas, bukan detail spesifik.",
  },

  // SOAL 69
  {
    type: "Reading - Vocabulary in Context",
    question:
      "Leonardo da Vinci was a true polymath, excelling in multiple fields such as painting, engineering, anatomy, and architecture. His notebooks reveal detailed sketches of flying machines, human organs, and military devices, centuries ahead of his time. Unlike specialists who focus on one discipline, da Vinci’s genius lay in connecting ideas across different fields, blending art with science." +
      "\n\n" +
      "The word polymath in the passage is closest in meaning to:",
    options: {
      A: "A person with narrow expertise",
      B: "A person skilled in many areas",
      C: "A scientist focused only on physics",
      D: "A historian of the Renaissance",
      E: "A teacher of mathematics",
    },
    correct: "B",
    explanation:
      "Konteks jelas: da Vinci ahli di seni, sains, teknik. Jadi polymath berarti orang dengan keahlian luas di banyak bidang." +
      "\n\n" +
      "👉 Tips: Gunakan konteks: “excelling in multiple fields” adalah clue langsung.",
  },

  // SOAL 70
  {
    type: "Reading - Inference",
    question:
      "The Great Depression of the 1930s was the most severe economic crisis of the 20th century. Triggered by the stock market crash of 1929, it led to widespread unemployment, bank failures, and poverty. Governments around the world struggled to respond, and many people lost faith in traditional economic policies. In the United States, President Franklin D. Roosevelt introduced the New Deal, a series of programs aimed at providing relief, recovery, and reform. These policies not only helped the economy recover but also expanded the role of government in society." +
      "\n\n" +
      "What can be inferred about the New Deal?",
    options: {
      A: "It completely ended unemployment.",
      B: "It increased the government’s involvement in the economy.",
      C: "It reduced the power of the U.S. president.",
      D: "It was identical to European policies.",
      E: "It had no effect on the economy.",
    },
    correct: "B",
    explanation:
      "Teks menyebut: “These policies … expanded the role of government in society.” Jadi inferensi logis: New Deal memperbesar peran pemerintah dalam perekonomian." +
      "\n\n" +
      "👉 Tips: Soal inference sering menguji apakah kita bisa menangkap implikasi. Cari kalimat yang memberi clue seperti “expanded role,” lalu simpulkan dampaknya.",
  },

  // SOAL 71
  {
    type: "Reading - Main Idea",
    question:
      "The Silk Road was not a single road but a vast network of trade routes connecting East and West for centuries. Originating in China during the Han Dynasty, it stretched across Central Asia, the Middle East, and into Europe. Along these routes, merchants exchanged not only goods—such as silk, spices, and precious metals—but also ideas, technologies, and cultural practices. Buddhism spread from India to China, while paper-making and gunpowder traveled westward. However, the Silk Road was not without challenges: deserts, mountains, and political instability often made journeys perilous. Despite these difficulties, the Silk Road facilitated economic prosperity and cultural enrichment for civilizations across continents. In the 15th century, with the rise of maritime trade routes, the importance of the Silk Road declined, yet its legacy continues today in discussions of globalization and cross-cultural exchange." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Silk Road was only important for Chinese silk.",
      B: "The Silk Road spread diseases across continents.",
      C: "The Silk Road served as a major channel for trade and cultural exchange for centuries.",
      D: "The Silk Road was completely safe and reliable.",
      E: "The Silk Road ended globalization permanently.",
    },
    correct: "C",
    explanation:
      "Teks menyebut perdagangan barang + pertukaran ide, budaya, dan teknologi. Semua disatukan dalam gagasan utama: Silk Road adalah jalur besar untuk pertukaran ekonomi dan budaya." +
      "\n\n" +
      "👉 Tips: Untuk main idea dari teks sejarah, cari kalimat yang mencakup aspek ekonomi + budaya + dampak jangka panjang. Jangan terpaku pada satu detail seperti “silk” saja.",
  },

  // SOAL 72
  {
    type: "Reading - Supporting Detail",
    question:
      "Charles Darwin’s theory of natural selection transformed the study of biology. According to Darwin, species evolve over time as individuals with advantageous traits survive and reproduce, passing those traits to future generations. This process explains how organisms adapt to their environments. One famous example is the finches of the Galápagos Islands. Darwin observed that different species of finches had beaks of varying shapes and sizes, each suited to their specific diet. Some had strong, thick beaks for cracking seeds, while others had slender beaks for catching insects. These differences illustrated how natural selection operates: traits beneficial in a given environment are more likely to persist." +
      "\n\n" +
      "What evidence did Darwin use to support his theory of natural selection?",
    options: {
      A: "The discovery of dinosaurs",
      B: "The behavior of lions in Africa",
      C: "The beak variations of finches in the Galápagos Islands",
      D: "The migration of whales across oceans",
      E: "The extinction of mammoths",
    },
    correct: "C",
    explanation:
      "Teks menekankan pengamatan Darwin terhadap bentuk paruh burung finch sebagai bukti nyata mekanisme seleksi alam." +
      "\n\n" +
      "👉 Tips: Soal detail sering mengambil contoh spesifik. Fokus pada kata kunci seperti “for example, one famous case, illustrated by.”",
  },

  // SOAL 73
  {
    type: "Reading - Vocabulary in Context",
    question:
      "During the Age of Exploration, European navigators embarked on long voyages across uncharted waters. These explorers were often described as audacious for their willingness to risk their lives in pursuit of wealth and discovery. Sailing into unknown oceans required not only courage but also innovation in shipbuilding and navigation. Instruments like the astrolabe and improved maps allowed sailors to venture farther than ever before. Their audacity led to encounters between distant cultures, the exchange of goods such as spices and gold, and the eventual colonization of new lands." +
      "\n\n" +
      "The word audacious in the passage is closest in meaning to:",
    options: {
      A: "Cautious",
      B: "Brave",
      C: "Timid",
      D: "Ordinary",
      E: "Careless",
    },
    correct: "B",
    explanation:
      "Konteksnya: pelaut Eropa berani berlayar ke lautan tak dikenal. Kata audacious berarti berani/nekad, lebih mendekati brave." +
      "\n\n" +
      "👉 Tips: Gunakan context clue. Kata “risk their lives” → menunjukkan keberanian, bukan hati-hati atau biasa saja.",
  },

  // SOAL 74
  {
    type: "Reading - Inference",
    question:
      "The invention of electricity revolutionized human life. Before widespread electrification, households relied on candles, oil lamps, and wood-burning stoves. Factories operated only during daylight or with limited artificial lighting, restricting productivity. With electricity, homes became safer and more comfortable, while factories could operate day and night, greatly increasing output. New inventions such as the telephone, radio, and later, household appliances transformed communication and daily routines. However, electricity also increased dependence on energy resources, raising concerns about sustainability." +
      "\n\n" +
      "What can be inferred about the effect of electricity on industrial productivity?",
    options: {
      A: "It reduced factory efficiency.",
      B: "It allowed factories to increase production significantly.",
      C: "It made workers abandon cities.",
      D: "It stopped technological innovation.",
      E: "It forced people to use candles again.",
    },
    correct: "B",
    explanation:
      "Teks menyebut: “factories could operate day and night, greatly increasing output.” Kesimpulan logis: listrik memperbesar produktivitas industri." +
      "\n\n" +
      "👉 Tips: Inference question = “Apa implikasi logis dari kalimat X?” Jangan menebak hal yang tidak disebut.",
  },

  // SOAL 75
  {
    type: "Reading - Purpose",
    question:
      "The Hubble Space Telescope, launched in 1990, has provided humanity with breathtaking images of distant galaxies, nebulae, and planets. Orbiting above Earth’s atmosphere, it avoids distortion caused by air, allowing astronomers to observe the universe with unprecedented clarity. Hubble’s discoveries have helped confirm the existence of dark energy and refine estimates of the universe’s age. Despite initial technical problems, the telescope has become one of the most important scientific instruments in history, inspiring not only scientists but also the public with its images." +
      "\n\n" +
      "What is the main purpose of the passage?",
    options: {
      A: "To criticize the limitations of telescopes on Earth",
      B: "To describe the contributions of the Hubble Space Telescope",
      C: "To argue for building larger telescopes on the ground",
      D: "To explain how nebulae are formed",
      E: "To discourage space exploration",
    },
    correct: "B",
    explanation:
      "Isi teks fokus pada pencapaian Hubble: menghindari distorsi, menemukan dark energy, menentukan umur semesta, memberi inspirasi." +
      "\n\n" +
      "👉 Tips: Kalau ditanya purpose, cari “benang merah” dari awal sampai akhir. Biasanya berupa apresiasi/penekanan fungsi.",
  },

  // SOAL 76
  {
    type: "Reading - Tone",
    question:
      "Malala Yousafzai, the youngest Nobel Peace Prize laureate, became a global symbol of courage after surviving an assassination attempt by the Taliban. She was targeted for advocating girls’ education in Pakistan, where extremist groups sought to deny this right. Despite the attack, Malala continued her activism, addressing the United Nations and founding the Malala Fund to support education worldwide. Her story is not only one of personal bravery but also a reminder of the transformative power of education." +
      "\n\n" +
      "What is the author’s tone in the passage?",
    options: {
      A: "Admiring",
      B: "Neutral",
      C: "Critical",
      D: "Humorous",
      E: "Indifferent",
    },
    correct: "A",
    explanation:
      "Kata-kata seperti symbol of courage, continued her activism, transformative power menandakan rasa kagum dan hormat penulis." +
      "\n\n" +
      "👉 Tips: Tone bisa dikenali lewat kata sifat dan perasaan yang melekat. Kalau teks berisi pujian, jawabannya sering admiring.",
  },

  // SOAL 77
  {
    type: "Reading - Supporting Detail",
    question:
      "The Wright brothers, Orville and Wilbur, are credited with inventing the first successful powered airplane in 1903. Their achievement was not the result of luck but of careful study, experimentation, and persistence. They built wind tunnels to test wing shapes, studied bird flight, and improved control systems, which distinguished their plane from earlier attempts. Unlike others who focused mainly on engine power, the Wrights realized that stability and control were essential for sustained flight. On December 17, 1903, near Kitty Hawk, North Carolina, Orville piloted the first flight, lasting only 12 seconds but changing history forever." +
      "\n\n" +
      "According to the passage, what made the Wright brothers’ invention different from earlier attempts?",
    options: {
      A: "They had the strongest engine.",
      B: "They emphasized stability and control.",
      C: "They built their plane entirely from metal.",
      D: "They relied on luck more than study.",
      E: "They used rockets instead of wings.",
    },
    correct: "B",
    explanation:
      "Teks menegaskan: “Unlike others … the Wrights realized that stability and control were essential.” Itu faktor pembeda utama." +
      "\n\n" +
      "👉 Tips: Cari perbandingan “unlike others” atau “different from.” Biasanya jawabannya ada di bagian itu.",
  },

  // SOAL 78
  {
    type: "Reading - Vocabulary in Context",
    question:
      "During the Renaissance, European artists and thinkers experienced a renaissance—literally a “rebirth”—of interest in classical Greek and Roman ideas. Artists like Leonardo da Vinci and Michelangelo combined technical skill with humanist ideals, creating works that emphasized realism and individual expression. Meanwhile, scholars studied ancient texts, leading to advances in philosophy, science, and literature." +
      "\n\n" +
      "The word renaissance in the passage is closest in meaning to:",
    options: {
      A: "Decline",
      B: "Rebirth",
      C: "Destruction",
      D: "Imitation",
      E: "Silence",
    },
    correct: "B",
    explanation:
      "Kata “renaissance” secara literal berarti kelahiran kembali, konteksnya: kebangkitan kembali minat pada ide klasik." +
      "\n\n" +
      "👉 Tips: Saat ada kata asing atau italic, biasanya definisinya dijelaskan di teks (clue: “literally”).",
  },

  // SOAL 79
  {
    type: "Reading - Inference",
    question:
      "The discovery of antibiotics in the 20th century saved countless lives by treating bacterial infections once considered deadly. However, overuse and misuse of antibiotics have led to antibiotic resistance, where bacteria evolve to survive treatment. This means common infections may once again become life-threatening. Health experts warn that if resistance continues to grow, modern medicine could face a crisis: surgeries, chemotherapy, and even minor wounds would carry high risks of infection." +
      "\n\n" +
      "What can be inferred about the future if antibiotic resistance continues to rise?",
    options: {
      A: "Medical treatments will become less safe.",
      B: "Antibiotics will kill viruses as well as bacteria.",
      C: "All bacteria will disappear.",
      D: "Surgeries will no longer be necessary.",
      E: "Resistance will have no real effect.",
    },
    correct: "A",
    explanation:
      "Teks menyebut: “surgeries, chemotherapy, even minor wounds would carry high risks.” Jadi implikasinya: perawatan medis jadi berbahaya." +
      "\n\n" +
      "👉 Tips: Jawaban inference yang benar biasanya moderate dan konsisten dengan kekhawatiran di teks.",
  },

  // SOAL 80
  {
    type: "Reading - Purpose",
    question:
      "The Green Revolution of the mid-20th century dramatically increased global food production. By introducing high-yield crop varieties, chemical fertilizers, and irrigation techniques, countries like India and Mexico were able to combat famine and feed growing populations. However, the revolution also had drawbacks: overreliance on chemicals damaged ecosystems, and small farmers sometimes struggled to compete with larger industrial farms." +
      "\n\n" +
      "What is the author’s purpose in this passage?",
    options: {
      A: "To argue that the Green Revolution was entirely harmful",
      B: "To highlight both the benefits and drawbacks of the Green Revolution",
      C: "To describe only irrigation systems",
      D: "To compare India and Mexico’s food systems",
      E: "To discourage all agricultural innovation",
    },
    correct: "B",
    explanation:
      "Teks menyajikan sisi positif (mengatasi kelaparan) dan sisi negatif (kerusakan ekosistem, ketimpangan petani). Jadi tujuannya adalah menampilkan keseimbangan." +
      "\n\n" +
      "👉 Tips: Kalau teks menampilkan pro dan kontra, cari jawaban yang mencerminkan keduanya, bukan hanya satu sisi.",
  },

  // SOAL 81
  {
    type: "Reading - Main Idea",
    question:
      "The internet has transformed nearly every aspect of modern life. Originally developed as a military communication network, it expanded into academic institutions before becoming publicly accessible in the 1990s. Today, billions of people use it daily for work, education, commerce, and entertainment. Online platforms enable global collaboration, giving individuals access to unprecedented amounts of information. At the same time, the internet has created challenges, including privacy concerns, misinformation, and digital inequality between those with and without access. Despite these issues, the internet remains one of the most revolutionary inventions in history." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The internet began as an academic experiment.",
      B: "The internet provides many benefits but also poses significant challenges.",
      C: "The internet is only useful for entertainment.",
      D: "The internet has solved all social problems.",
      E: "The internet is no longer relevant.",
    },
    correct: "B",
    explanation:
      "Teks menyoroti transformasi besar, manfaat (informasi, kolaborasi) + masalah (privasi, kesenjangan). Jadi ide utama: manfaat besar dengan tantangan." +
      "\n\n" +
      "👉 Tips: Main idea = ringkasan “manfaat vs tantangan.” Hati-hati jangan pilih jawaban yang terlalu sempit.",
  },

  // SOAL 82
  {
    type: "Reading - Vocabulary in Context",
    question:
      "The philosopher Socrates is often remembered for his relentless pursuit of truth. Rather than providing answers, he asked probing questions to challenge assumptions and stimulate critical thinking. This method, known as the Socratic method, encouraged dialogue and forced individuals to examine their beliefs. Socrates was relentless in questioning politicians, craftsmen, and even his students, often exposing contradictions in their reasoning." +
      "\n\n" +
      "The word relentless in the passage is closest in meaning to:",
    options: {
      A: "Inconsistent",
      B: "Persistent",
      C: "Indifferent",
      D: "Hesitant",
      E: "Temporary",
    },
    correct: "B",
    explanation:
      "Relentless berarti tidak kenal lelah, konsisten, gigih. Konteks: Socrates terus-menerus bertanya, tanpa berhenti. Itu cocok dengan “persistent.”" +
      "\n\n" +
      "👉 Tips: Cari pola pengulangan. Kata “he asked probing questions … Socrates was relentless in questioning” = menunjukkan gigih.",
  },

  // SOAL 83
  {
    type: "Reading - Inference",
    question:
      "The construction of the Panama Canal in the early 20th century was one of the greatest engineering feats in history. By connecting the Atlantic and Pacific Oceans, it reduced travel time for ships dramatically, transforming global trade. However, the project faced immense obstacles, including tropical diseases like malaria and yellow fever, as well as challenging terrain. Thousands of workers died during construction. Despite these hardships, the canal became a symbol of technological progress and human determination." +
      "\n\n" +
      "What can be inferred about the Panama Canal project?",
    options: {
      A: "It was achieved without any difficulties.",
      B: "It significantly reduced the time required for global shipping routes.",
      C: "It failed to connect the oceans.",
      D: "It eliminated all tropical diseases.",
      E: "It was abandoned before completion.",
    },
    correct: "B",
    explanation:
      "Teks menyebut: “By connecting the Atlantic and Pacific Oceans, it reduced travel time dramatically.” Jadi inferensi logis: jalur dagang lebih efisien." +
      "\n\n" +
      "👉 Tips: Inference biasanya menjawab “so what?” dari fakta. Kalau disebut “reduced travel time dramatically,” maka dampaknya = efisiensi perdagangan.",
  },

  // SOAL 84
  {
    type: "Reading - Tone",
    question:
      "Jane Goodall, one of the most renowned primatologists, changed the way humans understand animals. Living among chimpanzees in Tanzania, she observed behaviors once thought to be uniquely human, such as tool-making and complex social interactions. Her research challenged traditional scientific methods, as she gave the chimpanzees names rather than numbers and described their personalities. Beyond science, Goodall became an advocate for conservation, tirelessly working to protect endangered species and their habitats." +
      "\n\n" +
      "What is the author’s tone in the passage?",
    options: {
      A: "Admiring",
      B: "Sarcastic",
      C: "Critical",
      D: "Indifferent",
      E: "Humorous",
    },
    correct: "A",
    explanation:
      "Kata-kata seperti renowned, changed the way humans understand, tirelessly working menunjukkan rasa hormat penulis terhadap Goodall." +
      "\n\n" +
      "👉 Tips: Kalau teks tentang tokoh ilmuwan/aktivis dengan kata pujian, biasanya tone = admiring.",
  },

  // SOAL 85
  {
    type: "Reading - Purpose",
    question:
      "Space exploration has always captured human imagination, from the moon landing to the search for life on Mars. While critics argue that space programs are expensive and should not take priority over problems on Earth, supporters highlight their benefits. Space research has led to technological innovations, from satellite communication to medical imaging. Moreover, studying other planets can provide insights into Earth’s future, particularly regarding climate change and resource management. For many, the pursuit of space exploration represents humanity’s innate desire to explore the unknown." +
      "\n\n" +
      "What is the author’s purpose in the passage?",
    options: {
      A: "To argue that space exploration has both critics and benefits",
      B: "To prove that space exploration is a waste of resources",
      C: "To describe only Mars exploration",
      D: "To discourage people from supporting space programs",
      E: "To discuss only the moon landing",
    },
    correct: "A",
    explanation:
      "Teks menyebut sisi negatif (mahal, prioritas lain) dan sisi positif (inovasi, pengetahuan, hasrat eksplorasi). Jadi tujuannya = menampilkan argumen dua sisi." +
      "\n\n" +
      "👉 Tips: Kalau teks menampilkan counter-argument (kritik vs dukungan), tujuan penulis = memberikan keseimbangan, bukan hanya satu arah.",
  },

  // SOAL 86
  {
    type: "Reading - Main Idea",
    question:
      "The Industrial Revolution, beginning in 18th-century Britain, was a period of profound economic and social transformation. Advances in steam power, mechanized textile production, and iron-making reshaped industries and created unprecedented levels of productivity. Urbanization followed, as millions left rural areas for factory jobs in cities. While this brought higher wages for some, it also led to overcrowded housing, child labor, and poor working conditions. Reform movements eventually arose, pushing for labor rights and public health improvements. Historians debate whether the Industrial Revolution was primarily a story of progress or exploitation, but most agree that it laid the foundation for modern economic growth." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Industrial Revolution only improved wages.",
      B: "The Industrial Revolution caused only negative social problems.",
      C: "The Industrial Revolution transformed economies and societies, bringing both benefits and challenges.",
      D: "The Industrial Revolution was a short-lived experiment in Britain.",
      E: "The Industrial Revolution ended modern economic growth.",
    },
    correct: "C",
    explanation:
      "Teks menekankan sisi positif (produktivitas, pertumbuhan ekonomi) dan sisi negatif (eksploitasi, kondisi kerja buruk)." +
      "\n\n" +
      "👉 Tips: Main idea biasanya menyebut dua sisi kalau teks menampilkan pro-kontra.",
  },

  // SOAL 87
  {
    type: "Reading - Vocabulary in Context",
    question:
      "When Albert Einstein published his theory of relativity in the early 20th century, it was considered revolutionary. The theory challenged long-standing Newtonian physics by proposing that space and time are not fixed but relative, depending on the observer’s motion. Such an idea seemed radical at the time, yet it later became one of the cornerstones of modern physics, with applications in GPS technology, nuclear energy, and cosmology." +
      "\n\n" +
      "The word revolutionary in the passage is closest in meaning to:",
    options: {
      A: "Traditional",
      B: "Radical",
      C: "Weak",
      D: "Temporary",
      E: "Unreliable",
    },
    correct: "B",
    explanation:
      "Konteks: Einstein’s theory mengguncang konsep lama, artinya “radikal” atau sangat baru." +
      "\n\n" +
      "👉 Tips: Cari kontras → kata “challenged long-standing Newtonian physics” menunjukkan sifat radikal.",
  },

  // SOAL 88
  {
    type: "Reading - Inference",
    question:
      "The Great Depression of the 1930s was the most severe global economic downturn in modern history. Triggered by the stock market crash of 1929, it led to massive unemployment, bank failures, and declines in trade. Governments initially responded with austerity, which often worsened conditions. In the United States, President Franklin D. Roosevelt introduced the New Deal, expanding government intervention through job programs, banking reforms, and social security systems. While the depression did not end until World War II stimulated economic activity, the crisis reshaped the role of governments in managing economies, paving the way for modern welfare states." +
      "\n\n" +
      "What can be inferred about the Great Depression’s long-term effect?",
    options: {
      A: "It proved that governments should never intervene in economies.",
      B: "It caused World War II directly.",
      C: "It expanded the government’s role in economic and social policy.",
      D: "It permanently ended international trade.",
      E: "It eliminated unemployment worldwide.",
    },
    correct: "C",
    explanation:
      "Teks menekankan dampak jangka panjang: New Deal dan welfare states." +
      "\n\n" +
      "👉 Tips: Soal inference sering tanya “legacy / long-term impact.” Fokus pada bagian akhir teks.",
  },

  // SOAL 89
  {
    type: "Reading - Supporting Detail",
    question:
      "The discovery of DNA’s double-helix structure in 1953 by James Watson and Francis Crick marked a turning point in biology. Using X-ray diffraction data collected by Rosalind Franklin, they proposed that DNA consists of two strands twisted around each other, with base pairs holding them together. This elegant model explained how genetic information is stored and replicated. Today, advances in genetics—from genome sequencing to CRISPR gene editing—can all be traced back to the understanding of DNA’s structure." +
      "\n\n" +
      "According to the passage, what contribution did Rosalind Franklin make?",
    options: {
      A: "She built the first model of DNA.",
      B: "She provided X-ray data that helped reveal DNA’s structure.",
      C: "She invented CRISPR technology.",
      D: "She discovered how DNA replicates.",
      E: "She wrote the first genetics textbook.",
    },
    correct: "B",
    explanation:
      "Teks menyebut peran Franklin: “Using X-ray diffraction data collected by Rosalind Franklin.”" +
      "\n\n" +
      "👉 Tips: Kalau soal detail, jangan over-generalize. Cari kata kerja spesifik (provided, observed, explained).",
  },

  // SOAL 90
  {
    type: "Reading - Tone",
    question:
      "Nelson Mandela is celebrated not only as South Africa’s first Black president but also as a symbol of reconciliation. After spending 27 years in prison for opposing apartheid, Mandela emerged with a message of forgiveness, not revenge. His leadership helped dismantle institutionalized racial segregation and paved the way for a democratic South Africa. Around the world, he is remembered as a figure of dignity, perseverance, and moral courage." +
      "\n\n" +
      "What is the tone of the passage?",
    options: {
      A: "Critical",
      B: "Admiring",
      C: "Humorous",
      D: "Indifferent",
      E: "Skeptical",
    },
    correct: "B",
    explanation:
      "Kata-kata seperti symbol of reconciliation, dignity, moral courage = nada penghormatan." +
      "\n\n" +
      "👉 Tips: Kalau soal tone → lihat kata sifat. Biasanya mudah dikenali jika penuh pujian.",
  },

  // SOAL 91
  {
    type: "Reading - Main Idea",
    question:
      "Climate change is no longer a distant threat but a present reality. Rising global temperatures have led to melting ice caps, stronger storms, and shifting agricultural zones. Scientists warn that without drastic action, sea levels could displace millions, and biodiversity loss will accelerate. Yet, climate change is not only an environmental problem but also an economic and political one. Developing nations face the hardest burdens despite contributing the least emissions. International agreements, such as the Paris Accord, aim to reduce emissions, but debates continue about fairness, responsibility, and implementation." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "Climate change is primarily about melting ice caps.",
      B: "Climate change affects both the environment and global politics.",
      C: "Climate change has no impact on developing countries.",
      D: "Climate change is only an environmental issue.",
      E: "Climate change has already been solved.",
    },
    correct: "B",
    explanation:
      "Teks menekankan dampak lingkungan + dimensi ekonomi-politik." +
      "\n\n" +
      "👉 Tips: Main idea sering berupa perluasan scope: dari fenomena → ke dampak lebih luas.",
  },

  // SOAL 92
  {
    type: "Reading - Vocabulary in Context",
    question:
      "In ancient Rome, public entertainment was a form of political control. Gladiatorial games were often spectacles designed not only for amusement but also to display the power of emperors. By sponsoring such grand events, rulers gained popularity among the masses, distracting them from economic or political problems." +
      "\n\n" +
      "The word spectacles in the passage is closest in meaning to:",
    options: {
      A: "Eyeglasses",
      B: "Shows",
      C: "Wars",
      D: "Conversations",
      E: "Buildings",
    },
    correct: "B",
    explanation:
      "Konteks: hiburan publik, gladiatorial games = pertunjukan besar." +
      "\n\n" +
      "👉 Tips: Jangan tertipu makna literal “spectacles” (kacamata). Gunakan konteks.",
  },

  // SOAL 93
  {
    type: "Reading - Inference",
    question:
      "The development of vaccines revolutionized medicine by preventing diseases rather than only treating them. Smallpox, once a deadly scourge, was eradicated through vaccination campaigns. However, vaccine hesitancy persists, fueled by misinformation and distrust in institutions. Public health experts stress that without widespread vaccination, preventable diseases may resurge, threatening global health security." +
      "\n\n" +
      "What can be inferred about the importance of public trust in vaccination?",
    options: {
      A: "Without public trust, vaccination campaigns may fail.",
      B: "Vaccines work only if people distrust them.",
      C: "Public trust has no impact on disease prevention.",
      D: "Vaccines can eradicate all diseases regardless of participation.",
      E: "Smallpox eradication was unrelated to vaccination.",
    },
    correct: "A",
    explanation:
      "Teks menekankan bahwa keraguan publik bisa membuat penyakit kembali muncul." +
      "\n\n" +
      "👉 Tips: Inference butuh membaca “implikasi” → vaksin efektif hanya jika masyarakat percaya dan mau ikut.",
  },

  // SOAL 94
  {
    type: "Reading - Purpose",
    question:
      "The printing press, invented by Johannes Gutenberg in the 15th century, is often hailed as one of the most important inventions in history. By making books more affordable and accessible, it democratized knowledge, fueling the Renaissance, the Reformation, and the Scientific Revolution. The spread of literacy and ideas transformed societies, challenging religious and political authorities." +
      "\n\n" +
      "What is the purpose of the passage?",
    options: {
      A: "To argue that printing was harmful to society",
      B: "To explain how the printing press expanded access to knowledge and transformed history",
      C: "To describe Gutenberg’s personal life",
      D: "To criticize the Renaissance",
      E: "To discourage technological innovation",
    },
    correct: "B",
    explanation:
      "Isi teks = menjelaskan peran printing press dalam perubahan sosial dan intelektual." +
      "\n\n" +
      "👉 Tips: Purpose = cari apa yang ditekankan berulang-ulang (peran historis printing press).",
  },

  // SOAL 95
  {
    type: "Reading - Tone",
    question:
      "Marie Curie, a pioneering scientist, conducted groundbreaking research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to win in two different sciences—physics and chemistry. Despite facing sexism and limited resources, Curie’s persistence led to discoveries that shaped modern physics and medicine. Her life story continues to inspire generations of scientists." +
      "\n\n" +
      "What is the tone of the passage?",
    options: {
      A: "Admiring",
      B: "Sarcastic",
      C: "Neutral",
      D: "Indifferent",
      E: "Critical",
    },
    correct: "A",
    explanation:
      "Kata “pioneering, groundbreaking, persistence, inspire” = nada penuh penghargaan." +
      "\n\n" +
      "👉 Tips: Kalau tokoh digambarkan dengan perjuangan + inspirasi → tone biasanya admiring.",
  },

  // SOAL 96
  {
    type: "Reading - Main Idea",
    question:
      "The Cold War, lasting from the late 1940s to the early 1990s, was a period of intense rivalry between the United States and the Soviet Union. Though they never fought directly, they competed through proxy wars, nuclear arms races, and ideological influence across the globe. Events such as the Cuban Missile Crisis highlighted the risk of nuclear annihilation. Ultimately, the Soviet Union’s collapse in 1991 ended the Cold War, but its legacy still shapes international relations today." +
      "\n\n" +
      "What is the main idea of the passage?",
    options: {
      A: "The Cold War was a direct military conflict.",
      B: "The Cold War was a global rivalry with lasting consequences.",
      C: "The Cold War had no impact on international relations.",
      D: "The Cold War lasted only a few years.",
      E: "The Cold War eliminated all nuclear weapons.",
    },
    correct: "B",
    explanation:
      "Teks = menekankan rivalitas global, proxy wars, nuklir, dan warisan politik." +
      "\n\n" +
      "👉 Tips: Main idea biasanya di kalimat pembuka + penutup (scope + legacy).",
  },

  // SOAL 97
  {
    type: "Reading - Vocabulary in Context",
    question:
      "Philosopher John Locke argued that governments derive their authority from the consent of the governed. If rulers violate natural rights—life, liberty, property—citizens have the right to overthrow them. Locke’s ideas profoundly influenced democratic revolutions, including America’s independence movement." +
      "\n\n" +
      "The word consent in the passage is closest in meaning to:",
    options: {
      A: "Rebellion",
      B: "Permission",
      C: "Silence",
      D: "Opposition",
      E: "Ignorance",
    },
    correct: "B",
    explanation:
      "“Governments derive authority from the consent of the governed” → artinya otoritas sah karena rakyat memberi izin/persetujuan." +
      "\n\n" +
      "👉 Tips: Vocab in context sering berhubungan dengan teori politik. Cari padanan sinonim formal.",
  },

  // SOAL 98
  {
    type: "Reading - Inference",
    question:
      "The rise of social media has changed how people consume information. News now spreads instantly, but accuracy often suffers as misinformation circulates widely. Algorithms prioritize sensational content, shaping public opinion and even influencing elections. Researchers warn that without regulation and media literacy, democracy itself may be at risk." +
      "\n\n" +
      "What can be inferred about the impact of social media on politics?",
    options: {
      A: "It has no effect on political systems.",
      B: "It can shape public opinion and election outcomes.",
      C: "It guarantees that all news is accurate.",
      D: "It eliminates the need for democracy.",
      E: "It prevents misinformation completely.",
    },
    correct: "B",
    explanation:
      "Teks jelas menyebut pengaruh algoritma dan misinformasi pada opini publik & pemilu." +
      "\n\n" +
      "👉 Tips: Inference = cari dampak implisit dari fakta → di sini: media sosial mengubah demokrasi.",
  },

  // SOAL 99
  {
    type: "Reading - Purpose",
    question:
      "The theory of plate tectonics explains that Earth’s outer shell is divided into plates that move over the mantle. This movement accounts for earthquakes, volcanic eruptions, and the creation of mountain ranges. Once controversial, the theory is now universally accepted and forms the foundation of modern geology." +
      "\n\n" +
      "What is the purpose of the passage?",
    options: {
      A: "To prove that geology is unnecessary",
      B: "To explain the basics of plate tectonics and its importance",
      C: "To describe earthquakes only",
      D: "To argue against the theory of geology",
      E: "To deny volcanic eruptions",
    },
    correct: "B",
    explanation:
      "Isi teks = menjelaskan teori + perannya dalam geologi modern." +
      "\n\n" +
      "👉 Tips: Purpose = cari apa yang dijelaskan ulang-ulang.",
  },

  // SOAL 100
  {
    type: "Reading - Tone",
    question:
      "Martin Luther King Jr. is remembered as a leader of the American civil rights movement. Through nonviolent protest, he fought racial segregation and championed equality. His speeches, including the famous “I Have a Dream,” inspired millions and remain powerful symbols of justice. Though assassinated in 1968, his legacy endures as a reminder of the struggle for human rights." +
      "\n\n" +
      "What is the tone of the passage?",
    options: {
      A: "Admiring",
      B: "Humorous",
      C: "Neutral",
      D: "Critical",
      E: "Indifferent",
    },
    correct: "A",
    explanation:
      "Frasa seperti inspired millions, powerful symbols of justice, legacy endures jelas bernada penuh penghargaan." +
      "\n\n" +
      "👉 Tips: Kalau tokoh sejarah dipuji karena pengaruh + warisan moral → tone = admiring.",
  },
];

export default readingQuestions;
