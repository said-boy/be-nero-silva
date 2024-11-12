const users = async (db) => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )ENGINE=InnoDB;
  `;
  await db.query(query);
  console.log("Tabel 'users' berhasil dibuat.");
};

export default users;
