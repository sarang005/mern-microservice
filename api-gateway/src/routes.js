const express = require("express");
const router = express.Router();

// Example route handled directly by gateway
router.get("/health", (req, res) => {
  res.json({ status: "API Gateway is healthy" });
});

module.exports = router;
