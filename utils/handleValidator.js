const { validationResult } = require("express-validator");

const validationResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(400);
    res.send({error: "Datos invalidos"})
  }
};


module.exports = validationResults