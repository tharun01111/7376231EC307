import dotenv from "dotenv"
dotenv.config();

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (stack, level, pkg, message) => {
  try {
    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message: `${message}`,
      }),
    });
    console.log(process.env.ACCESS_TOKEN);
    if (!response.ok) {
      console.log("Failed to send log");
    } else {
      console.log("Log sent successfully");
    }
  } catch (error) {
    console.error("Logger Error:", error.message);
  }
};
