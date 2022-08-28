const express = require("express");
const router = express.Router();
const {getAnimal}=require("../controllers/animals")
const customHeader = require("../middleware/customHeader");
const{ validatorGetAnimals} = require("../validators/animals")



router.get("/",customHeader, validatorGetAnimals, getAnimal);


module.exports = router;
