const logs = async (db) => {
  const query = `
      CREATE TABLE IF NOT EXISTS logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        plan_id INTEGER NOT NULL,
        succes INTEGER NOT NULL,
        fail INTEGER NOT NULL,
        FOREIGN KEY (plan_id) REFERENCES plan(id)
      )ENGINE=InnoDB;
    `;
  await db.query(query);
  console.log("Tabel 'logs' berhasil dibuat.");
};

export default logs;
