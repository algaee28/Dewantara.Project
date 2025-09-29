// src/data/Banks/Logika.js

const logikaQuestions = [
  // --- Tes Logika Umum ---
  {
    type: "Logika - Silogisme",
    question:
      "Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Andi seorang mahasiswa. Jadi...",
    options: {
      A: "Andi mungkin memiliki nomor induk mahasiswa",
      B: "Belum tentu Andi memiliki nomor induk mahasiswa",
      C: "Andi memiliki nomor induk mahasiswa",
      D: "Andi tidak memiliki nomor induk mahasiswa",
      E: "Tidak dapat ditarik Kesimpulan",
    },
    correct: "C",
    explanation:
      "Ini adalah logika silogisme. Jika 'Semua A adalah B', dan 'C adalah A', maka 'C pasti B'. Karena semua mahasiswa punya NIM, dan Andi adalah mahasiswa, maka Andi pasti punya NIM.",
  },
  {
    type: "Logika - Silogisme",
    question:
      "Sebagian perajin tempe mengeluhkan harga kedelai naik. Pak Anto seorang perajin tempe. Jadi...",
    options: {
      A: "Pak Anto pasti mengeluhkan harga kedelai naik.",
      B: "Pak Anto tidak mengeluhkan harga kedelai naik.",
      C: "Harga kedelai bukanlah keluhan Pak Anto",
      D: "Pak Anto mungkin ikut mengeluhkan harga kedelai naik",
      E: "Harga kedelai naik atau tidak, pak Anto tetap mengeluh",
    },
    correct: "D",
    explanation:
      "Kata 'sebagian' menunjukkan kemungkinan. Kita tahu sebagian perajin tempe mengeluh, dan Pak Anto adalah salah satunya, jadi dia 'mungkin' termasuk di dalam kelompok tersebut.",
  },
  {
    type: "Logika - Silogisme",
    question:
      "Semua pemain sepakbola yang berkebangsaan Italia berwajah tampan. John adalah pemain sepakbola berkebangsaan Inggris. Jadi...",
    options: {
      A: "John bukanlah pemain sepakbola yang tampan",
      B: "John adalah pemain sepakbola yang tampan",
      C: "Meskipun bukan berkebangsaan Italia, John pasti berwajah tampan",
      D: "Mustahil John berwajah tampan",
      E: "Tidak dapat ditarik kesimpulan",
    },
    correct: "E",
    explanation:
      "Pernyataan hanya berlaku untuk pemain Italia. Tidak ada informasi tentang pemain Inggris, jadi tidak ada kesimpulan yang bisa ditarik.",
  },
  {
    type: "Logika - Silogisme",
    question:
      "Sebagian orang yang berminat menjadi politikus hanya menginginkan harta dan tahta. Rosyid tidak berminat menjadi politikus.",
    options: {
      A: "Rosyid tidak menginginkan harta dan tahta.",
      B: "Tahta bukanlah keinginan Rosyid, tapi harta mungkin ya.",
      C: "Rosyid menginginkan tahta tapi tidak berminat menjadi politikus.",
      D: "Rosyid tidak ingin menjadi politikus karena sudah kaya dan punya tahta",
      E: "Tidak dapat ditarik Kesimpulan",
    },
    correct: "E",
    explanation:
      "Informasi hanya tentang mereka yang 'berminat'. Tidak ada premis yang membahas mereka yang 'tidak berminat', sehingga kesimpulan tidak bisa ditarik.",
  },
  {
    type: "Logika - Silogisme",
    question:
      "Permen yang dibungkus dalam kemasan menarik sangat laris terjual. Permen X dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.",
    options: {
      A: "Permen X kurang laris terjual di kalangan anak-anak",
      B: "Permen X tidak laku terjual di kalangan orang dewasa",
      C: "Permen X laris terjual",
      D: "Permen X laris terjual di kalangan anak-anak",
      E: "Tidak dapat ditarik kesimpulan",
    },
    correct: "D",
    explanation:
      "Premis pertama menyatakan permen dengan kemasan menarik laris. Premis kedua dan ketiga menguatkan bahwa permen X memiliki kemasan menarik bagi anak-anak. Maka, permen X laris di kalangan anak-anak.",
  },
  {
    type: "Logika - Silogisme",
    question:
      "Mister A adalah seorang yang jenius. Mister A seorang penemu. Semua penemu adalah kreatif. Mister B juga seorang penemu.",
    options: {
      A: "Mister B seorang yang jenius",
      B: "Mister B belum tentu kreatif",
      C: "Mister A dan Mister B sama-sama jenius dan kreatif",
      D: "Mister B pasti kreatif. Dan belum tentu jenius",
      E: "Mister A pasti jenius dan belum tentu kreatif",
    },
    correct: "D",
    explanation:
      "Semua penemu itu kreatif, jadi karena Mister B seorang penemu, dia pasti kreatif. Namun, kita tidak tahu apakah dia jenius karena hanya Mister A yang disebutkan jenius.",
  },
  {
    type: "Logika - Deduksi",
    question:
      "Ivan lebih ringan beratnya daripada Wawan. Andika lebih berat daripada Wawan. Jika Andika memiliki berat 65 Kg...",
    options: {
      A: "Wawan adalah yang paling ringan dari ketiganya",
      B: "Ivan mungkin saja sama beratnya dengan andika",
      C: "Mustahil andika memiliki berat lebih dari 65 Kg.",
      D: "Mustahil ivan memiliki berat lebih dari 65 Kg.",
      E: "Mungkin saja andika memiliki berat lebih dari 65 Kg.",
    },
    correct: "D",
    explanation:
      "Urutan berat: Andika > Wawan > Ivan. Jika Andika 65 Kg, maka Wawan pasti lebih ringan dari 65 Kg, dan Ivan pasti lebih ringan dari Wawan. Jadi, Ivan tidak mungkin memiliki berat lebih dari 65 Kg.",
  },
  {
    type: "Logika - Deduksi",
    question:
      "Jika saya tidak punya tugas kuliah maka saya membantu Ibu berjualan pakaian di pasar. Saya tidak membantu ibu di pasar...",
    options: {
      A: "Saya saat ini memiliki tugas kuliah dan pasti akan membantu ibu di pasar",
      B: "Sekarang saya tidak punya tugas kuliah, jadi saya tak perlu ke pasar membantu Ibu berjualan pakaian",
      C: "Saya sekarang ada di pasar membantu Ibu berjualan pakaian, karena tidak punya tugas kuliah",
      D: "Saya tidak membantu ibu di pasar karena saya tidak punya tugas kuliah",
      E: "Sebagai anak berbakti, meskipun punya tugas kuliah, saya tetap membantu ibu di pasar",
    },
    correct: "C",
    explanation:
      "Logika sebab-akibat. Kondisi 'tidak punya tugas' menyebabkan 'membantu di pasar'. Sebaliknya, jika 'tidak membantu di pasar', maka 'punya tugas'. Pilihan yang benar adalah 'Saya sekarang ada di pasar membantu Ibu berjualan pakaian, karena tidak punya tugas kuliah'.",
  },
  {
    type: "Logika - Deduksi",
    question:
      "Tidak ada ikan lele yang punya sisik. Ikan lele memiliki sungut. Jadi...",
    options: {
      A: "Ikan yang tidak bersisik pasti punya sungut",
      B: "Ikan yang bersungut pasti tidak punya sisik",
      C: "Sisik ada hubungannya dengan sungut",
      D: "Andai lele punya sisik, maka tidak akan punya sungut",
      E: "Tidak bisa ditarik kesimpulan",
    },
    correct: "E",
    explanation:
      "Dari premis yang ada, kita hanya tahu tentang ikan lele. Kita tidak bisa menyimpulkan sesuatu tentang 'ikan yang tidak bersisik' secara umum atau 'ikan yang bersungut' secara umum. Hubungan antara sisik dan sungut tidak dijelaskan.",
  },
  {
    type: "Logika - Deduksi",
    question:
      "Mustahil seorang wanita punya jenggot. Tidak setiap pria punya jenggot. A berada di kamar gelap dan hanya terlihat dagunya yang tidak berjenggot.",
    options: {
      A: "A bukan pria",
      B: "Mustahil A adalah seorang Wanita",
      C: "A pasti seorang pria",
      D: "A pasti seorang wanita",
      E: "A bisa seorang pria dan bisa pula seorang Wanita",
    },
    correct: "E",
    explanation:
      "Wanita tidak punya jenggot, dan pria tidak selalu punya jenggot. Jadi, orang yang tidak berjenggot bisa saja wanita atau pria.",
  },
  {
    type: "Logika - Deduksi",
    question:
      "Tidak setiap anak sekolah suka berbohong kepada kedua orangtuanya bahwa dia telah mengerjakan PR. Rendy seorang anak yang selalu jujur dalam masalah apa saja dan kepada siapapun, kecuali kepada kakeknya. Kebohongan Rendy tersebut adalah sering mengatakan bahwa kakek masih terlihat muda.",
    options: {
      A: "Kepada pamannya, Rendy mengatakan belum mengerjakan PR bila memang belum.",
      B: "Hampir tidak pernah Rendy membohongi orangtuanya mengenai PR",
      C: "Rendy hanya pernah membohongi kakaknya mengenai PR",
      D: "Kakek Rendy masih terlihat muda",
      E: "Rendy sangat disayang orangtuanya karena selalu berkata jujur",
    },
    correct: "A",
    explanation:
      "Premis menyatakan Rendy selalu jujur kepada siapapun, 'kecuali' kepada kakeknya. Ini berarti dia akan jujur kepada pamannya.",
  },
  {
    type: "Logika - Deduksi",
    question:
      "Pagi ini Heldy punya rencana. Dia ingin mengembalikan CD Linux kepada Hardoyo setelah merasakan kelezatan soto daging di Jalan Perintis kemerdekaan 75 Solo. Heldy ingin makan 2 pisang goreng hangat di kantin Bu Sum di dekat kampus UNS Solo. Setelah makan pisang dia tidak mau minum es teh di kantin Bu Sum tapi ingin minum es buah di dekat stadion Manahan Solo. Sesudah dari Manahan, Heldy menuju Jalan perintis kemerdekaan. Kesimpulan...",
    options: {
      A: "Heldy pertama-tama akan pergi ke Jalan Perintis kemerdekaan",
      B: "Sebelum ke Stadion Manahan, heldy ingin mengembalikan CD kepada Hardoyo sebab takut terlupa",
      C: "Setelah makan soto, Heldy minum es buah di dekat Stadion Manahan",
      D: "Pisang adalah makanan pertama yang akan disantap Heldy",
      E: "Soto adalah makanan pertama yang akan disantap Heldy",
    },
    correct: "D",
    explanation:
      "Heldy ingin makan pisang, lalu pergi ke Manahan, lalu pergi ke Jalan Perintis Kemerdekaan untuk makan soto. Jadi, pisang adalah makanan pertama.",
  },
  {
    type: "Logika - Puzzle",
    question:
      "Azkia ingin nikah sebelum punya rumah. Ingin dapat kerja sebelum nikah. Setelah dapat kerja ingin punya usaha sambilan. Ingin punya anak setelah punya rumah. Ingin menikah setelah punya usaha sambilan. Dan ingin punya usaha sambilan sebelum punya rumah. Mana urutan yang tepat?",
    options: {
      A: "Dapat kerja – nikah – punya rumah – usaha sambilan – punya anak",
      B: "Dapat kerja – nikah – usaha sambilan – punya rumah – punya anak",
      C: "Usaha sambilan – dapat kerja – nikah – punya anak – punya rumah",
      D: "Punya anak – nikah – dapat kerja – usaha sambilan – punya rumah",
      E: "Dapat kerja – usaha sambilan – nikah – punya rumah – punya anak",
    },
    correct: "E",
    explanation:
      "Urutan yang benar: Dapat kerja (sebelum nikah) → Punya usaha sambilan (setelah kerja, sebelum nikah) → Nikah (setelah usaha sambilan, sebelum punya rumah) → Punya rumah (setelah nikah, setelah usaha sambilan) → Punya anak (setelah punya rumah).",
  },
  {
    type: "Logika - Puzzle",
    question:
      "Faiq adalah seorang anak yang sulit disuruh makan. Faiq bersedia makan nasi jika sudah dibelikan makanan favoritnya. Jika sudah punya permen coklat, Faiq bisa melupakan roti keju. Roti keju lebih disukai Faiq daripada es krim sehingga Faiq bersedia menukar es krim dengan roti keju. Kesukaan Faiq terhadap es krim sama besarnya dengan kesukaannya terhadap es jus durian. Dan Faiq lebih menyukai roti keju daripada mangga arum manis. Makanan paling favorit apakah yang bisa dibelikan Ibu untuk Faiq agar bersedia makan nasi?",
    options: {
      A: "Roti keju",
      B: "Mangga arum manis",
      C: "Es krim",
      D: "Permen Coklat",
      E: "Jus Durian",
    },
    correct: "D",
    explanation:
      "Urutan kesukaan Faiq: Permen Coklat > Roti Keju > Es Krim = Es Jus Durian > Mangga Arum Manis. Makanan paling favorit adalah permen coklat.",
  },
  {
    type: "Logika - Puzzle",
    question:
      "Kejujuran S tidak sebaik D. Terkadang M kurang jujur, tapi sesungguhnya dia masih lebih jujur daripada R. B lebih suka berbohong daripada H. D cukup jujur, tapi secara umum M lebih jujur daripada D. Dan I sama jujurnya dengan K. D lebih jujur daripada H dan K. Siapakah diantara mereka yang paling jujur?",
    options: { A: "K", B: "H", C: "I", D: "D", E: "M" },
    correct: "E",
    explanation:
      "Urutan kejujuran: M > D > S. D > H dan D > K. I = K. Jadi, M adalah yang paling jujur.",
  },
  {
    type: "Logika - Silogisme",
    question: "Sebagian siswa SDN 02 suka bakso. Semua siswa SDN02 suka soto.",
    options: {
      A: "Siswa SDN 02 yang suka bakso pasti juga suka soto",
      B: "Siswa SDN 02 yang tidak suka soto suka bakso",
      C: "Belum tentu Siswa SDN 02 yang tidak suka bakso suka soto",
      D: "Siswa SDN 02 yang suka soto pastilah juga suka bakso",
      E: "Selain suka bakso pastilah ada sebagian Siswa SDN 02 yang suka soto",
    },
    correct: "A",
    explanation:
      "Jika 'Semua A adalah B', dan 'C adalah A', maka 'C pasti B'. Semua siswa SDN 02 suka soto. Siswa yang suka bakso termasuk siswa SDN 02. Jadi, siswa yang suka bakso pasti suka soto.",
  },
  {
    type: "Logika - Deduksi",
    question:
      "Bila makan di warung Mbak Via harus bayar kontan. Erick lapar dan tidak punya uang siang ini...",
    options: {
      A: "Erick harus cari akal supaya bisa berhutang di warung Mbak Via",
      B: "Mbak Via pelit tidak mau dihutang",
      C: "Erick boleh kok berhutang karena sudah kenal akrab dengan Mbak Via sang pemilik warung",
      D: "Erick bukanlah saudara Mbak Via, jadi tidak boleh makan dengan cara berhutang",
      E: "Erick tidak dapat makan di warung Mbak Via siang ini",
    },
    correct: "E",
    explanation:
      "Premisnya jelas: 'harus bayar kontan'. Jika Erick tidak punya uang kontan, maka dia tidak bisa makan di sana.",
  },
  {
    type: "Logika - Logika",
    question:
      "Bowo menyukai program komputer Delphi. Ageng menyukai program komputer Visual Basic. Kesimpulan...",
    options: {
      A: "Karena gengsi, Bowo tidak memilih program Visual Basic karena Ageng sudah memilihnya",
      B: "Ageng ingin berbeda dari Bowo dalam hal penguasaan program komputer",
      C: "Ageng dan Bowo saling bersaing menjadi programmer komputer yang paling handal di kotanya",
      D: "Ageng tidak suka Delphi untuk menjaga citra dirinya agar tak ingin dikira ikut-ikutan Bowo",
      E: "Tidak dapat diambil Kesimpulan",
    },
    correct: "E",
    explanation:
      "Hanya disebutkan kesukaan masing-masing. Tidak ada premis yang menjelaskan alasan di balik kesukaan mereka, sehingga tidak ada kesimpulan yang bisa ditarik.",
  },

  // --- Tes Analisis Pernyataan dan Kesimpulan (Logika Benar/Salah) ---
  {
    type: "Logika - Benar/Salah",
    question:
      "Semua mammalia bernafas dengan paru-paru. Ikan salmon adalah mammalia. Jadi, ikan salmon bernafas dengan paru-paru.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "C",
    explanation: "Pernyataan kedua salah karena ikan salmon bukanlah mamalia.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Pabrik 'Bangun Jaya' hanya memberikan kenaikan gaji karyawan maksimal 2 kali dalam setahun. Nina adalah staf departemen pemasaran yang sangat berprestasi di Pabrik 'Bangun Jaya'. Jadi, Nina bisa mendapatkan kenaikan gaji lebih dari dua kali dalam setahun.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "E",
    explanation:
      "Kesimpulan salah. Premis pertama jelas menyatakan 'maksimal 2 kali'. Oleh karena itu, kesimpulan bahwa Nina bisa mendapatkan lebih dari itu tidak benar.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Semua manusia berhati baik. Ibu Amanda adalah manusia. Jadi, Ibu Amanda berhati baik.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "B",
    explanation: "Pernyataan pertama salah. Tidak semua manusia berhati baik.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Setiap hari minggu SD Al-Hidayah libur. Hari ini hari minggu. Jadi, hari ini pasti SD Al-Hidayah libur.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "A",
    explanation:
      "Logika ini benar. Jika sebuah kondisi (hari Minggu) selalu mengarah ke sebuah hasil (sekolah libur), maka kesimpulan ini valid.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Semua pejabat Pemda mendapatkan mobil dinas. Pak Rahmat adalah mantan pejabat Pemda. Jadi, Pak Rahmat tidak lagi mendapatkan mobil dinas.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "A",
    explanation:
      "Logika ini benar. Premis pertama hanya berlaku untuk pejabat aktif. Karena Pak Rahmat adalah mantan pejabat, kesimpulan bahwa dia tidak lagi mendapatkannya adalah benar.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Ikan adalah binatang yang bernafas dengan insang. Paus adalah binatang yang bernafas dengan insang. Jadi, Paus adalah ikan.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "C",
    explanation:
      "Pernyataan kedua salah. Paus adalah mamalia dan bernapas dengan paru-paru, bukan insang.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Ukuran bunga tidak lebih besar daripada piring makan. Rafflessia Arnoldi adalah sejenis bunga. Rafflessia Arnoldi ukurannya tidak lebih besar daripada piring makan.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "B",
    explanation:
      "Pernyataan pertama salah. Bunga Rafflesia Arnoldi bisa memiliki ukuran yang jauh lebih besar dari piring makan.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Segala tentang hewan dapat dipelajari dalam ilmu Animologi. Burhan tertarik mempelajari kehidupan macan, buaya, singa dan hewan lainnya. Burhan harus mempelajari ilmu Animologi.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "B",
    explanation:
      "Pernyataan pertama salah. Ilmu yang mempelajari tentang hewan adalah Zoologi, bukan Animologi.",
  },
  {
    type: "Logika - Benar/Salah",
    question:
      "Dono membenci barang asing dan orang asing. Membenci barang asing atau orang asing disebut xenophobia. Dono termasuk seorang xenophobia.",
    options: {
      A: "Pernyataan dan kesimpulan benar",
      B: "Pernyataan pertama salah",
      C: "Pernyataan kedua salah",
      D: "Pernyataan pertama dan kedua salah",
      E: "Kesimpulan salah",
    },
    correct: "A",
    explanation:
      "Logika ini benar. Jika kondisi 'membenci barang asing dan orang asing' sesuai dengan definisi 'xenophobia', maka kesimpulannya valid.",
  },
];

export default logikaQuestions;
