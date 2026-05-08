import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
import scheduleRoutes from "./routes/vehicle.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", scheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});