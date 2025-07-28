const express = require("express");
const router = express.Router();
const { createMatch, getMatchesBySeason } = require("../controllers/matchController");

router.post("/", createMatch);
router.get("/season/:season", getMatchesBySeason);

module.exports = router;
