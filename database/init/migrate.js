import connection from "../config/database.js";
import users from "../migrations/users.js"; // Pastikan ini merujuk ke file yang tepat dan ekstensi .js
import plan from "../migrations/plan.js"; // Pastikan ini merujuk ke file yang tepat dan ekstensi .js
import plant from "../migrations/plant.js"; // Pastikan ini merujuk ke file yang tepat dan ekstensi .js
import planting from "../migrations/planting.js"; // Pastikan ini merujuk ke file yang tepat dan ekstensi .js
import foreignkey from "../migrations/foreignkey.js"; // Pastikan ini merujuk ke file yang tepat dan ekstensi .js

const migrate = async () => {
  try {
    connection.connect(); // Pastikan untuk menunggu koneksi ke database
    users(connection); // Panggil fungsi users dengan await untuk eksekusi yang benar
    plant(connection);
    plan(connection);
    planting(connection);
    foreignkey(connection);
    console.log("Migrasi berhasil.");
  } catch (error) {
    console.error("Terjadi kesalahan dalam migrasi:", error);
  } finally {
    connection.end(); // Pastikan koneksi ditutup setelah semua selesai
  }
};

await migrate(); // Export fungsi migrate
