import express from "express";
import { login } from "./controller/auth/login.js";
import { register } from "./controller/auth/register.js";
import { home } from "./controller/home/index.js";
import verifyToken from "./middleware/auth.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/login", login);
app.post("/register", register);

app.get("/", verifyToken, home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
