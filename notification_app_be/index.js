import express from "express";
import cors from "cors";
import { Log } from "../logging_middleware/log.js";

const app = express();

Log("backend", "info", "controller", "checking debugger working");

app.listen(3000, () => {
  console.log("The server is running on http://localhost:3000");
});