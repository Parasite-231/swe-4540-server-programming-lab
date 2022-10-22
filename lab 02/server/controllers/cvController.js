const fs = require("fs");

const getCV = (req, res) => {
  //education section read
  educations = fs.readFileSync("models/educationData", {
    encoding: "utf-8",
  });
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  skills = fs.readFileSync("models/skillData", { encoding: "utf-8" });

  skills = JSON.parse(String(skills));

  skillContainer = [];

  for (let key in skills) {
    skillContainer.push(skills[key]);
  }

  //language section read
  knownLanguage = fs.readFileSync("models/languageData", { encoding: "utf-8" });

  knownLanguage = JSON.parse(String(knownLanguage));

  languageContainer = [];

  for (let key in knownLanguage) {
    languageContainer.push(knownLanguage[key]);
  }

  //work experience section  read
  experience = fs.readFileSync("models/experienceData", { encoding: "utf-8" });

  experience = JSON.parse(String(experience));

  experienceContainer = [];

  for (let key in experience) {
    experienceContainer.push(experience[key]);
  }

  res.render("cvLayout", {
    name: req.body.name,
    designation: req.body.designation,
    address: req.body.address,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    educations: edus,
    skills: skillContainer,
    knownLanguage: languageContainer,
    experience: experienceContainer,
  });
};

module.exports = { getCV: getCV };
