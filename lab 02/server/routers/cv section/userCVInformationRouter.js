const express = require("express");

const { getCV } = require("../../controllers/cvController");

const userCVInformationRouter = express.Router();
userCVInformationRouter.use(express.json());

const fs = require("fs");

userCVInformationRouter.get("/my-cv", getCV);

module.exports = userCVInformationRouter;
