const planting = async (db) => {
  const query = `
      CREATE TABLE IF NOT EXISTS planting (
        id INT AUTO_INCREMENT PRIMARY KEY,
        day INTEGER NOT NULL,
        actifity VARCHAR(255) NOT NULL,
        timeofday VARCHAR(30) NOT NULL,
        plant_id INTEGER NOT NULL
      )ENGINE=InnoDB;
    `;
  await db.query(query);
  console.log("Tabel 'planting' berhasil dibuat.");
};

export default planting;
