import connection from "../config/database.js";

const getUserById = async (id) => {
  const sql = "SELECT * FROM users WHERE id = ?";
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
    console.error("Terjadi kesalahan dalam getUserById:", error);
  }
};

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

const createUser = async (fullname, email, password) => {
  const sql = "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, [fullname, email, password], (error, results) => {
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

export { getUserById, getUserByUsername, getUserByEmail, createUser };
