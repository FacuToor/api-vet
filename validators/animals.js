const { check } = require("express-validator");
const validationResults = require("../utils/handleValidator");

const validatorCreateAnimals = [
  check("nombre").exists().notEmpty(),
  check("tipo").exists().notEmpty(),
  check("raza").exists().notEmpty(),
  check("edad").exists().notEmpty(),
  (req, res, next) => {
    return validationResults(req, res, next);
  },
];

const validatorGetAnimals = [
    check("raza").exists().notEmpty(),
    check("tipo").exists().notEmpty(),
    check("edad").exists().notEmpty(),
    (req, res, next) => {
      return validationResults(req, res, next);
    },
  ];

  const validatorGetRaza = [
    check("raza").exists().notEmpty(),
    (req, res, next) => {
      return validationResults(req, res, next);
    },
  ];
  const validatorGetTipo = [
    check("tipo").exists().notEmpty(),
    (req, res, next) => {
      return validationResults(req, res, next);
    },
  ];
  const validatorGetId = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
      return validationResults(req, res, next);
    },
  ];
  
  module.exports = {validatorGetRaza, validatorGetTipo, validatorCreateAnimals , validatorGetAnimals, validatorGetId};
  
