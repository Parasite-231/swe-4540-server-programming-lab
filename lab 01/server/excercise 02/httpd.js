const http = require('http');
const fs = require('fs');
const loadWebPage = require('./loadPageContents');
require("dotenv").config({ path: "../dependency/.env" });


const server = http.createServer((req,res)=>{

    res.writeHead(200, {"Content-type":"text/html"})
    res.write(loadWebPage.loadPageContents.webPageData)
    res.end();

})

server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`SERVER IS LISTENING TO PORT : ${process.env.SERVER_PORT}`)
})