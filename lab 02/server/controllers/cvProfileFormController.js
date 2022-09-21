// creating a controller for form
const fs = require("fs");
const bodyParser = require("body-parser");

const urlEncoded = bodyParser.urlencoded({ extended: false });

const getCVProfileForm = (req, res) => {
  res.render("cvLayout", urlEncoded, req.body);
};

module.exports = { getCVProfileForm: getCVProfileForm };
