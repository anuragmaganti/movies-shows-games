import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Media route working",
  });
});

router.get("/movies", (req, res) => {
  res.json({
    message: "Movie route working",
  });
});

router.get("/tv-shows", (req, res) => {
  res.json({ message: "TV show route working" });
});

router.get("/games", (req, res) => {
  res.json({ message: "Game route working" });
});

export default router;
