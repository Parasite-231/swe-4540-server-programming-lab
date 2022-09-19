const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync(
    "C:/Users/pc/Documents/3-1/server programming/labs/190042136_md_muktadir_mazumder/lab 03/server/models/educationData.json",
    {
      encoding: "utf-8",
    }
  );
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  res.render("cv", { name: "Md Muktadir Mazumder", educations: edus });
};

module.exports = { getCV: getCV };
