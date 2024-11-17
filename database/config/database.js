import { createConnection } from 'mysql'
import dotenv from "dotenv";

dotenv.config()

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

export default connection