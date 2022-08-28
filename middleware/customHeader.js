const customHeader = (req, res, next) => {
    try {
      const apiKey = req.headers.api_key;
      if (apiKey === "algo") {
        next();
      } else {
        res.status(403);
        res.send({ error: "API_KEY_INVALIDA" });
      }
    } catch (e) {
      res.status(403);
      res.send({ error: "ALGO PASO" });
    }
  };
  module.exports = customHeader;
  