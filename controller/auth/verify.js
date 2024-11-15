import jwt from "jsonwebtoken";

export const verify = async (req, res) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Access denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    return res.status(200).json({
      status: "success",
      message: "Token valid",
    });
  } catch (error) {
    res.status(401).json({
      status: "error",
      message: "Invalid token",
    });
  }
};
