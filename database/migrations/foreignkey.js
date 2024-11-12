const foreignkey = async (db) => {
  const query = `
        ALTER TABLE planting ADD FOREIGN KEY (plant_id) REFERENCES plant(id) ON DELETE RESTRICT ON UPDATE RESTRICT
      `;
  await db.query(query);
  console.log("'foreignkey' berhasil dibuat.");
};

export default foreignkey;
