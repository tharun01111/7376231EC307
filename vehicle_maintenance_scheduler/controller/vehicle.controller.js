import { getVehicles, getDepots } from "../services/apiService.js";

export const getSchedule = async (req, res) => {
  try {
    const depotData = await getDepots();
    const vehicleData = await getVehicles();

    const tasks = vehicleData.vehicles;

    let maxHours = 15;

    if (depotData.maxHours) {
      maxHours = depotData.maxHours;
    }

    const selectedTasks = [];

    let totalHours = 0;

    tasks.sort((a, b) => b.Impact - a.Impact);

    for (let i = 0; i < tasks.length; i++) {
      const currentTask = tasks[i];

      if (
        totalHours + currentTask.Duration <=
        maxHours
      ) {
        selectedTasks.push(currentTask);

        totalHours =
          totalHours + currentTask.Duration;
      }
    }

    let totalImpact = 0;

    for (let i = 0; i < selectedTasks.length; i++) {
      totalImpact =
        totalImpact + selectedTasks[i].Impact;
    }

    res.status(200).json({
      success: true,
      availableHours: maxHours,
      totalHours,
      totalImpact,
      selectedTasks,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};