const fs = require("fs");

const homeContent = fs.readFileSync('../public/index.html',"utf-8")


const loadContents = {
    'homeData': homeContent
}

module.exports = {loadContents}