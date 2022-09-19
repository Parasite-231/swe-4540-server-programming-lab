const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync(
    "C:/Users/pc/Documents/3-1/server programming/labs/190042136_md_muktadir_mazumder/lab 03/server/models/educationData",
    {
      encoding: "utf-8",
    }
  );
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  skills = fs.readFileSync(
    "C:/Users/pc/Documents/3-1/server programming/labs/190042136_md_muktadir_mazumder/lab 03/server/models/skillData",
    { encoding: "utf-8" }
  );

  skills = JSON.parse(String(skills));

  skillContainer = [];

  for (let key in skills) {
    skillContainer.push(skills[key]);
  }
  res.render("cvLayout", {
    name: "Md Muktadir Mazumder",
    educations: edus,
    skills: skillContainer,
  });
};

module.exports = { getCV: getCV };
