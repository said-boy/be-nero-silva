const seedPlanting = async (db) => {
  const plantingData = [
    [1, 0, 'Pagi', 'Siapkan media tanam (rockwool/cocopeat) yang lembab. Tempatkan benih sawi di atasnya.'],
    [1, 1, 'Pagi', 'Siapkan media tanam (rockwool/cocopeat) yang lembab. Tempatkan benih sawi di atasnya.'],
    [1, 2, 'Pagi', 'Setiap hari cek kelembaban media tanam, semprot sedikit air jika mengering.'],
    [1, 3, 'Pagi', 'Setiap hari cek kelembaban media tanam, semprot sedikit air jika mengering.'],
    [1, 4, 'Pagi', 'Setiap hari cek kelembaban media tanam, semprot sedikit air jika mengering.'],
    [1, 5, 'Pagi', 'Setiap hari cek kelembaban media tanam, semprot sedikit air jika mengering.'],
    [1, 6, 'Pagi', 'Pindahkan benih berkecambah ke wadah hidroponik wick system. Siapkan larutan nutrisi pertama.'],
    [1, 7, 'Pagi', 'Periksa jumlah larutan nutrisi dan pH (idealnya 5.5-6.5). Tambahkan nutrisi jika berkurang.'],
    [1, 8, 'Pagi', 'Cek volume nutrisi dan pH harian, periksa kondisi daun dan batang dari hama.'],
    [1, 9, 'Pagi', 'Cek volume nutrisi dan pH harian, periksa kondisi daun dan batang dari hama.'],
    [1, 10, 'Pagi', 'Cek volume nutrisi dan pH harian, periksa kondisi daun dan batang dari hama.'],
    [1, 11, 'Pagi', 'Cek volume nutrisi dan pH harian, periksa kondisi daun dan batang dari hama.'],
    [1, 12, 'Pagi', 'Cek volume nutrisi dan pH harian, periksa kondisi daun dan batang dari hama.'],
    [1, 13, 'Pagi', 'Cek volume nutrisi dan pH harian, periksa kondisi daun dan batang dari hama.'],
    [1, 14, 'Pagi', 'Buang larutan lama dan ganti dengan campuran baru (5 ml larutan A + 5 ml larutan B per 1 liter air).'],
    [1, 15, 'Pagi dan Siang', 'Cek harian nutrisi, pH, posisi wick, dan perhatikan tanda-tanda hama atau penyakit.'],
    [1, 16, 'Pagi dan Siang', 'Cek harian nutrisi, pH, posisi wick, dan perhatikan tanda-tanda hama atau penyakit.'],
    [1, 17, 'Pagi dan Siang', 'Cek harian nutrisi, pH, posisi wick, dan perhatikan tanda-tanda hama atau penyakit.'],
    [1, 18, 'Pagi dan Siang', 'Cek harian nutrisi, pH, posisi wick, dan perhatikan tanda-tanda hama atau penyakit.'],
    [1, 19, 'Pagi dan Siang', 'Cek harian nutrisi, pH, posisi wick, dan perhatikan tanda-tanda hama atau penyakit.'],
    [1, 20, 'Pagi dan Siang', 'Cek harian nutrisi, pH, posisi wick, dan perhatikan tanda-tanda hama atau penyakit.'],
    [1, 21, 'Pagi', 'Ganti dengan larutan nutrisi baru untuk mencegah penumpukan zat yang tidak dibutuhkan.'],
    [1, 22, 'Pagi dan Siang', 'Cek harian nutrisi, pH, dan lakukan pemantauan hama serta kebersihan wick.'],
    [1, 23, 'Pagi dan Siang', 'Cek harian nutrisi, pH, dan lakukan pemantauan hama serta kebersihan wick.'],
    [1, 24, 'Pagi dan Siang', 'Cek harian nutrisi, pH, dan lakukan pemantauan hama serta kebersihan wick.'],
    [1, 25, 'Pagi dan Siang', 'Cek harian nutrisi, pH, dan lakukan pemantauan hama serta kebersihan wick.'],
    [1, 26, 'Pagi dan Siang', 'Cek harian nutrisi, pH, dan lakukan pemantauan hama serta kebersihan wick.'],
    [1, 27, 'Pagi dan Siang', 'Cek harian nutrisi, pH, dan lakukan pemantauan hama serta kebersihan wick.'],
    [1, 28, 'Pagi', 'Buang larutan lama dan ganti dengan larutan baru.'],
    [1, 29, 'Pagi dan Siang', 'Cek nutrisi, pH, dan pastikan tanaman tumbuh seimbang dengan rotasi posisi jika diperlukan.'],
    [1, 30, 'Pagi dan Siang', 'Cek nutrisi, pH, dan pastikan tanaman tumbuh seimbang dengan rotasi posisi jika diperlukan.'],
    [1, 31, 'Pagi dan Siang', 'Cek nutrisi, pH, dan pastikan tanaman tumbuh seimbang dengan rotasi posisi jika diperlukan.'],
    [1, 32, 'Pagi dan Siang', 'Cek nutrisi, pH, dan pastikan tanaman tumbuh seimbang dengan rotasi posisi jika diperlukan.'],
    [1, 33, 'Pagi dan Siang', 'Cek nutrisi, pH, dan pastikan tanaman tumbuh seimbang dengan rotasi posisi jika diperlukan.'],
    [1, 34, 'Pagi dan Siang', 'Cek nutrisi, pH, dan pastikan tanaman tumbuh seimbang dengan rotasi posisi jika diperlukan.'],
    [1, 35, 'Pagi', 'Ganti dengan larutan nutrisi baru. Pastikan konsentrasi dan pH sesuai.'],
    [1, 36, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 37, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 38, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 39, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 40, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 41, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 42, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 43, 'Pagi dan Siang', 'Pantau harian nutrisi, pH, cek wick, dan amati tanda-tanda tanaman siap panen (daun besar dan batang kokoh).'],
    [1, 44, 'Pagi', 'Panen tanaman sawi dengan cara memotong bagian pangkal atau mencabut seluruh tanaman.'],

    [2, 0, "Pagi", "Penyemaian benih: Siapkan benih selada, tanam di rockwool basah, tempatkan di tempat lembab."],
    [2, 1, "Pagi", "Penyemaian benih: Siapkan benih selada, tanam di rockwool basah, tempatkan di tempat lembab."],
    [2, 2, "Pagi", "Pemeliharaan benih: Semprot rockwool dengan air bersih untuk menjaga kelembapannya."],
    [2, 3, "Pagi", "Pemeliharaan benih: Semprot rockwool dengan air bersih untuk menjaga kelembapannya."],
    [2, 4, "Pagi", "Pemeliharaan benih: Semprot rockwool dengan air bersih untuk menjaga kelembapannya."],
    [2, 5, "Pagi", "Pemeliharaan benih: Semprot rockwool dengan air bersih untuk menjaga kelembapannya."],
    [2, 6, "Pagi", "Pemeliharaan benih: Semprot rockwool dengan air bersih untuk menjaga kelembapannya."],
    [2, 7, "Pagi", "Pemeliharaan benih: Semprot rockwool dengan air bersih untuk menjaga kelembapannya."],
    [2, 8, "Pagi", "Pemeriksaan kecambah: Pastikan benih telah berkecambah dan memiliki 2 daun sejati."],
    [2, 9, "Pagi", "Menyiapkan sistem Wick: Pasang sumbu (kain flanel/kapas) dari net pot ke larutan nutrisi."],
    [2, 10, "Siang", "Pindahkan bibit ke net pot: Letakkan bibit dalam net pot yang berisi rockwool, lalu letakkan di sistem Wick."],
    [2, 11, "Pagi", "Menyiapkan larutan nutrisi: Isi wadah nutrisi dengan larutan."],
    [2, 12, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 13, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 14, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 15, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 16, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 17, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 18, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 19, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 20, "Pagi", "Pengecekan sistem dan pH: Cek kondisi tanaman dan pH larutan nutrisi (idealnya 5,5-6,5)."],
    [2, 21, "Pagi", "Penambahan larutan nutrisi: Tambah larutan jika volume berkurang dan sesuaikan dosisnya."],
    [2, 22, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 23, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 24, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 25, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 26, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 27, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 28, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 29, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 30, "Pagi", "Pemantauan pertumbuhan tanaman: Cek pertumbuhan daun dan batang, pastikan tanaman sehat."],
    [2, 31, "Siang", "Pemupukan lanjutan: Tambahkan larutan nutrisi jika volume berkurang (cek pH dan EC)."],
    [2, 32, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 33, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 34, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 35, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 36, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 37, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 38, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 39, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 40, "Pagi", "Pemeliharaan rutin: Lakukan pemeriksaan pH dan tambahkan air jika larutan mulai berkurang."],
    [2, 41, "Pagi", "Panen: Periksa apakah selada sudah cukup besar untuk dipanen."],
    [2, 42, "Siang", "Pembersihan sistem: Bersihkan wadah, sumbu, dan seluruh komponen hidroponik."],
  ];
  
    try {
      const query = `
          INSERT INTO planting (plant_id, day, timeofday, actifity) 
          VALUES ?
        `;
  
      await db.query(query, [plantingData]);
      console.log("Planting successfully seeded.");
    } catch (error) {
      console.error("Error seeding Planting:", error);
    }
  };
  
  export default seedPlanting;
  