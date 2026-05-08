import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getDepots = async () => {
  const response = await axios.get(
    process.env.DEPOT_API,
    {
      headers: {
        Authorization:
          `Bearer ${process.env.ACCESS_TOKEN}`
      }
    }
  );

  return response.data;
};

export const getVehicles = async () => {
  const response = await axios.get(
    process.env.VEHICLE_API,
    {
      headers: {
        Authorization:
          `Bearer ${process.env.ACCESS_TOKEN}`
      }
    }
  );

  return response.data;
};