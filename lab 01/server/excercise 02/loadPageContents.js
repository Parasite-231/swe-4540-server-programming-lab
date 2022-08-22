const fs = require("fs");

const webPageContent = fs.readFileSync('../public/index.html',"utf-8")


const loadPageContents = {
    'webPageData': webPageContent
}

module.exports = {loadPageContents}