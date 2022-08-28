const express = require("express");
const router = express.Router();
const {
  getAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animals");
const customHeader = require("../middleware/customHeader");
const {
  validatorCreateAnimals,
  validatorGetId,
} = require("../validators/animals");

router.get("/", customHeader, getAnimals);
router.post("/", customHeader, validatorCreateAnimals, createAnimal);
router.put(
  "/:id",
  customHeader,
  validatorGetId,
  validatorCreateAnimals,
  updateAnimal
);
router.delete("/:id", customHeader, validatorGetId, deleteAnimal);

module.exports = router;
