import { getUserByUsername } from "../../database/models/users.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await getUserByUsername(username);

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRED_JWT_TOKEN,
    });
    return res.status(200).json({
      status: "success",
      message: "login success!",
      token: token,
    });
  } else {
    return res.status(401).json({
      status: "error",
      message: "login failed!",
      token: null,
    });
  }
};
