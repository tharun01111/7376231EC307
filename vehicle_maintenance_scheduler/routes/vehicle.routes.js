import express from "express";
import { getSchedule } from "../controller/vehicle.controller.js";

const router = express.Router();

router.get("/schedule", getSchedule);

export default router;
