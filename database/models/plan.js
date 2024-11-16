import connection from "../config/database.js";

const createPlan = async (user_id, plant_id, count) => {
  const sql =
    "INSERT INTO plan (user_id, plant_id, count) VALUES (?, ?, ?)";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(
        sql,
        [user_id, plant_id, count],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });

    return result;
  } catch (error) {
    console.error("Terjadi kesalahan dalam createUser:", error);
  }
};

const getPlanByUserIdPlanIdDate = async (user_id, plant_id, started_at) => {
  const sql = "SELECT * FROM plan WHERE user_id = ? AND plant_id = ? AND started_at = ?";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [user_id, plant_id, started_at], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    return result[0] || null;
  } catch (error) {
    console.error("Terjadi kesalahan dalam getUserByEmail:", error);
  }
};

const getPlanByUserId = async (user_id) => {
  const sql = "SELECT * FROM plan WHERE user_id = ?";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [user_id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    return result || null;
  } catch (error) {
    console.error("Terjadi kesalahan dalam getPlanByUserId:", error);
  }
};

export { createPlan, getPlanByUserIdPlanIdDate, getPlanByUserId };
