const express = require("express");
const router = express.Router();
const auth = require("./auth");

router.get("/", (req, res) => {
  res.json("ROUTES API");
});

router.use("/auth", auth);

module.exports = router;
