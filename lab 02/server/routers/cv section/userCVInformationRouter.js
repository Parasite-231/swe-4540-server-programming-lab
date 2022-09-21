const express = require("express");

const { getCV } = require("../../controllers/cvController");
const {
  getCVProfileForm,
} = require("../../controllers/cvProfileFormController");

const userCVInformationRouter = express.Router();
userCVInformationRouter.use(express.json());

const fs = require("fs");

const bodyParser = require("body-parser");

const urlEncodedBody = bodyParser.urlencoded({ extended: false });

userCVInformationRouter.get("/", (req, res) => {
  res.send("Home");
});
userCVInformationRouter.get("/my-cv", getCV);
userCVInformationRouter.post("/profile-form", urlEncodedBody, getCV);
userCVInformationRouter.get("/form", (req, res) => {
  res.render("cvProfileForm");
});
// userCVInformationRouter.get("/cvProfileForm", getCVProfileForm);
// userCVInformationRouter.post("/cvProfileForm", (req, res) => {
//   // res.send("form submitted");
//   console.log(req.body);

//   res.render("cvLayout", {
//     email: req.body.email,
//   });
//   // fs.writeFileSync("data/form", JSON.stringify(req.body));
//   res.redirect("/my-cv");
// });

module.exports = userCVInformationRouter;
