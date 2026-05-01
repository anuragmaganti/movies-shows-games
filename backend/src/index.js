import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/mediaRoutes.js";

const PORT = 3000;
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/media", router);

app.listen(PORT, () => {
  console.log(`Backend running on port: ${PORT}`);
});
