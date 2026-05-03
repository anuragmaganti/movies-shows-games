import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const { type } = req.query;
  res.json({
    message: "Media route working",
    type,
  });
});

export default router;
