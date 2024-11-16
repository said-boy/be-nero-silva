import connection from "../config/database.js";
import seedUsers from "../seeder/users.js";
import seedPlant from "../seeder/plant.js";
import seedPlanting from "../seeder/planting.js";


const seed = async () => {
  try {
    connection.connect();
    seedUsers(connection);
    seedPlant(connection);
    seedPlanting(connection);
    console.log("Seeder berhasil.");
  } catch (error) {
    console.error("Terjadi kesalahan dalam migrasi:", error);
  } finally {
    connection.end(); // Pastikan koneksi ditutup setelah semua selesai
  }
};

await seed();
