import { getUserByEmail } from "../../database/models/users.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email == '' || password == '') {
    return res.status(401).json({
      status: "error",
      message: "login failed!",
      token: null,
    });
  }

  const user = await getUserByEmail(email);

  if (email === user.email && password === user.password) {
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
