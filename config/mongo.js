const mongoose = require("mongoose");

const dbConnect = () => {
  const { MONGODB_HOST, MONGODB_DATABASE } = process.env;
  const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;
  mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("CONEXION CORRECTA");
      } else {
        console.log("ERROR DE CONEXION");
      }
    }
  );
};

module.exports = dbConnect;
