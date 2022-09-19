const express = require("express");
const router = express.Router();

const { getCV } = require("../controllers/cvController");

const fs = require("fs");

router.get("/my-cv", getCV);

module.exports = router;
