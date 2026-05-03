import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/mediaRoutes.js";
import { pool } from "./db/db.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api/db-test", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows[0]);
});

app.use("/api/media", router);

app.listen(PORT, () => {
  console.log(`Backend running on port: ${PORT}`);
});
