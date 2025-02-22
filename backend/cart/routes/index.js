const express = require("express");
const cartLimiter = require('../middleware/rateLimiter'); // Adjust the path as needed
const router = express.Router();
const auth = require("./auth");

// Apply the rate limiter to cart routes
router.use(cartLimiter);

router.get("/", (req, res) => {
  res.json("ROUTES API");
});

router.use("/auth", auth);

module.exports = router;
