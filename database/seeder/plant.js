const seedPlant = async (db) => {
    const plantData = [
      ["Sawi"],
      ["Selada"],
    ];
  
    try {
      const query = `
          INSERT INTO plant (name) 
          VALUES ?
        `;
  
      await db.query(query, [plantData]);
      console.log("Plant successfully seeded.");
    } catch (error) {
      console.error("Error seeding Plant:", error);
    }
  };
  
  export default seedPlant;
  