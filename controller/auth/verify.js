import jwt from "jsonwebtoken";
import { getUserById } from "../../database/models/users.js";

export const verify = async (req, res) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Access denied",
      data: null,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    const user = await getUserById(req.userId);
    return res.status(200).json({
      status: "success",
      message: "Token valid",
      data: user,
    });
  } catch (error) {
    res.status(401).json({
      status: "error",
      message: "Invalid token",
      data: null,
    });
  }
};
