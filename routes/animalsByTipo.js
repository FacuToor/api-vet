const express = require("express");
const router = express.Router();
const { getAnimalsTipo } = require("../controllers/animals");
const customHeader = require("../middleware/customHeader");
const { validatorGetTipo } = require("../validators/animals");

router.get("/:tipo",customHeader, validatorGetTipo, getAnimalsTipo);

module.exports = router;
