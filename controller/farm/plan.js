import {
  createPlan,
  getPlanByUserIdPlanIdDate,
  getPlanByUserId,
  getPlanOnlyByIdUser,
} from "../../database/models/plan.js";
import { getPlantsByPlantId } from "../../database/models/plant.js";
import { getPlantingByPlantId } from "../../database/models/planting.js";

const plan = async (req, res) => {
  const { user_id, plant_id, count } = req.body;
  const started_at = new Date().toISOString().split("T")[0];

  if (user_id == "" || plant_id == "" || count == "") {
    return res.status(400).json({
      status: "error",
      message: "error create plan!",
      data: null,
    });
  }

  const alreadyFarmForToday = await getPlanByUserIdPlanIdDate(
    user_id,
    plant_id,
    started_at
  );

  if (alreadyFarmForToday != null) {
    return res.status(400).json({
      status: "error",
      message: "You have made the plan for today!",
      data: null,
    });
  }

  const createdPlan = await createPlan(user_id, plant_id, count);

  if (typeof createdPlan != "undefined" && createdPlan.affectedRows > 0) {
    const plan = await getPlanByUserId(user_id);

    if (plan != null) {
      const data = [];
      for (const element of plan) {
        const plant = await getPlantsByPlantId(element.plant_id);
        const planting = await getPlantingByPlantId(plant.id);

        data.push({
          id: element.id,
          count: element.count,
          started_at: element.started_at,
          plant: {
            name: plant.name,
          },
          planting: planting,
        });
      }

      return res.status(200).json({
        status: "success",
        message: "get plan success!",
        data: data,
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "created plan failed!",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      status: "error",
      message: "created plan failed!",
      data: null,
    });
  }
};

const getPlanById = async (req, res) => {
  const user_id = parseInt(req.params.id, 10);
  if (isNaN(user_id)) {
    return res.status(400).json({
      status: "error",
      message: "ID harus berupa angka",
      data: null,
    });
  }

  if (user_id == null) {
    return res.status(400).json({
      status: "error",
      message: "get plan failed!",
      data: null,
    });
  }

  const plan = await getPlanByUserId(user_id);

  if (plan != null) {
    const data = [];
    // Looping over the plan using 'for...of'
    for (const element of plan) {
      // Mendapatkan data plant dengan await
      const plant = await getPlantsByPlantId(element.plant_id);

      // Mendapatkan data planting setelah mendapatkan plant.id
      const planting = await getPlantingByPlantId(plant.id);

      data.push({
        id: element.id,
        count: element.count,
        started_at: element.started_at,
        plant: {
          name: plant.name,
        },
        planting: planting,
      });
    }

    return res.status(200).json({
      status: "success",
      message: "get plan success!",
      data: data,
    });
  } else {
    return res.status(400).json({
      status: "error",
      message: "your plan not exist!",
      data: null,
    });
  }
};

const getAllPlanByUserid = async (req, res) => {
  const user_id = parseInt(req.params.id, 10);
  const planByUserId = await getPlanOnlyByIdUser(user_id)
  return res.status(200).json({
    status: "success",
    message: "get plan success!",
    data: planByUserId,
  });
}

export { plan, getPlanById, getAllPlanByUserid };
