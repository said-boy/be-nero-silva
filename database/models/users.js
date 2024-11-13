import connection from "../config/database.js";

const getUserByUsername = async (username) => {
  const sql = "SELECT * FROM users WHERE username = ?";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [username], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    return result[0] || null;
  } catch (error) {
    console.error("Terjadi kesalahan dalam getUserByUsername:", error);
  }
};

const getUserByEmail = async (email) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [email], (error, results) => {
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

const createUser = async (username, email, password) => {
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [username, email, password], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    return result;
  } catch (error) {
    console.error("Terjadi kesalahan dalam createUser:", error);
  }
};

export { getUserByUsername, getUserByEmail, createUser };
