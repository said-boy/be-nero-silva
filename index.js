import express from "express";
import { login } from "./controller/auth/login.js";
import { register } from "./controller/auth/register.js";
import { verify } from "./controller/auth/verify.js";
import { home } from "./controller/home/index.js";
import verifyToken from "./middleware/auth.js";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow credentials like cookies
}));

app.use(express.json());

app.post("/login", login);
app.post("/register", register);
app.post("/verify", verify);

app.get("/", verifyToken, home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
