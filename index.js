import express from "express";
import { login } from "./controller/auth/login.js";
import { register } from "./controller/auth/register.js";
import { verify } from "./controller/auth/verify.js";
import { plant } from "./controller/farm/plant.js";
import { plan, getPlanById, getAllPlanByUserid } from "./controller/farm/plan.js";
import { home } from "./controller/home/index.js";
import { showLog, createLog, updateLog, deleteLog } from "./controller/logs/logs.js";
import { calculate } from "./controller/logs/calculate.js";
import verifyToken from "./middleware/auth.js";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: process.env.FRONTEND_URL, // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow credentials like cookies
}));

app.use(express.json());

app.post("/login", login);
app.post("/register", register);
app.post("/verify", verify);

app.get("/plant", plant);
app.post("/plan", plan);
app.get("/plan/:id", getPlanById);
app.post("/planOnly/:id", getAllPlanByUserid);

app.get("/", verifyToken, home);

app.get("/log/:id", showLog);
app.post("/log/create", createLog);
app.put("/log/update/:id", updateLog);
app.delete("/log/user/:user_id/delete/:id", deleteLog);

app.get("/log/calculate/:id", calculate);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
