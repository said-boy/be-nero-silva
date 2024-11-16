const plan = async (db) => {
  const query = `
      CREATE TABLE IF NOT EXISTS plan (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INTEGER NOT NULL,
        plant_id INTEGER NOT NULL,
        count INTEGER NOT NULL,
        started_at DATE DEFAULT (CURRENT_DATE),
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (plant_id) REFERENCES plant(id)
      )ENGINE=InnoDB;
    `;
  await db.query(query);
  console.log("Tabel 'plan' berhasil dibuat.");
};

export default plan;
