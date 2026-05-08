import express from "express";

const router = express.Router();

router.get("/schedule", getSchedule);

export default router;