import axios from "axios";

const headers = {
  Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
};

export const getVehicles = async () => {
  const response = await axios.get(process.env.VEHICLE_API, {
    headers,
  });

  return response.data;
};

export const getDepots = async () => {
  const response = await axios.get(process.env.DEPOT_API, {
    headers,
  });

  return response.data;
};
