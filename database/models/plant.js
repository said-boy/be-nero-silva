import connection from "../config/database.js";

const getPlants = async () => {
  const sql = "SELECT * FROM plant";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    return result || null;
  } catch (error) {
    console.error("Terjadi kesalahan dalam getPlants:", error);
  }
};

const getPlantsByPlantId = async (id) => {
  const sql = "SELECT * FROM plant WHERE id = ?";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    return result[0] || null;
  } catch (error) {
    console.error("Terjadi kesalahan dalam getPlants:", error);
  }
};

export { getPlants, getPlantsByPlantId };
