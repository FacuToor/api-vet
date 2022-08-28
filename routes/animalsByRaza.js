const express = require("express");
const router = express.Router();
const { getAnimalsRaza } = require("../controllers/animals");
const customHeader = require("../middleware/customHeader");
const { validatorGetRaza } = require("../validators/animals");

router.get("/:raza",customHeader, validatorGetRaza, getAnimalsRaza);

module.exports = router;
