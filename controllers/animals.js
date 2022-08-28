const { matchedData } = require("express-validator");
const { Animals } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getAnimals = async (req, res) => {
  try {
    const data = await Animals.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ANIMALS");
  }
};
const getAnimalsRaza = async (req, res) => {
  try {
    req = matchedData(req);
    const { raza } = req;
    const data = await Animals.find({
      raza: raza,
    });
    if (data !== null) {
      res.send({ data });
    } else {
      res.error();
    }
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ANIMALS");
  }
};
const getAnimalsTipo = async (req, res) => {
  try {
    req = matchedData(req);
    const { tipo } = req;
    const data = await Animals.find({
      tipo: tipo,
    });
    if (data !== null) {
      res.send({ data });
    } else {
      res.error();
    }
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ANIMALS");
  }
};

const getAnimal = async (req, res) => {
  try {
    req = matchedData(req);
    const { raza, tipo, edad } = req;
    const data = await Animals.findOne({
      raza: raza,
      tipo: tipo,
      edad: edad,
    });
    if (data !== null) {
      res.send({ data });
    } else {
      res.error();
    }
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ANIMAL");
  }
};

const createAnimal = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await Animals.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ANIMALS");
  }
};

const updateAnimal = async (req, res) => {
  try {
    const {id,...body} = matchedData(req);

    const data = await Animals.findOneAndUpdate(id, body);
    res.send({ data:"Datos modificados con éxito" });
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ANIMALS");
  }
};
const deleteAnimal = async(req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await Animals.deleteOne({_id:id});
    res.send({ data:"Datos borrados con éxito" });
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ANIMAL");
  }
};


module.exports = {
  getAnimals,
  getAnimal,
  getAnimalsRaza,
  getAnimalsTipo,
  createAnimal,
  deleteAnimal,
  updateAnimal
};
