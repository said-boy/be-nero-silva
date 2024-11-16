import { getPlants } from "../../database/models/plant.js";

export const plant = async (req, res) => {
  const plantData = await getPlants();
  return res.status(200).json({
    status: "success",
    message: "success get plant!",
    data: plantData,
  });
};
