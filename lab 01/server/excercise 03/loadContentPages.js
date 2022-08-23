const fs = require("fs");

const formPageContent = fs.readFileSync('../public/form.html',"utf-8")
const successPageContent = fs.readFileSync('../public/successSubmission.html',"utf-8")
const errorPageContent = fs.readFileSync('../public/errorSubmissionPage.html',"utf-8")


const loadPageContents = {
    'formPageData': formPageContent,
    'successPageData':successPageContent,
    'errorPageData':errorPageContent
}

module.exports = {loadPageContents}