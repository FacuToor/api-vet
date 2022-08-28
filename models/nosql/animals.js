const mongoose = require("mongoose");

const Animals = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    tipo: {
      type: String,
    },
    raza: {
      type: String,
    },
    edad: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("animals", Animals);
