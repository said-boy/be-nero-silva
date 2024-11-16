const seedUsers = async (db) => {
  const usersData = [
    ["Admin", "admin@admin.com", "admin"],
    ["Muhammad Said Alkhudri", "alkhudrimsaid733@gmail.com", "123"],
  ];

  try {
    const query = `
        INSERT INTO users (fullname, email, password) 
        VALUES ?
      `;

    await db.query(query, [usersData]);
    console.log("Users successfully seeded.");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

export default seedUsers;
