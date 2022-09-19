const fs = require("fs");

const getSkills = (req, res) => {
  skills = fs.readFileSync(
    "C:/Users/pc/Documents/3-1/server programming/labs/190042136_md_muktadir_mazumder/lab 03/server/models/skillData.json",
    {
      encoding: "utf-8",
    }
  );
  skills = JSON.parse(String(skills));

  skillContainer = [];

  for (let key in skills) {
    skillContainer.push(skills[key]);
  }
};

console.log(getSkills.skills[1]);

module.exports = {
  getSkills: getSkills,
};
