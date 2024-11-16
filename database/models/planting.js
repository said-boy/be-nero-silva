import connection from "../config/database.js";

const getPlantingByPlantId = async (plant_id) => {
  const sql = "SELECT * FROM planting WHERE plant_id = ?";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [plant_id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    return result || null;
  } catch (error) {
    console.error("Terjadi kesalahan dalam getPlantingByPlantId:", error);
  }
};

export { getPlantingByPlantId };
