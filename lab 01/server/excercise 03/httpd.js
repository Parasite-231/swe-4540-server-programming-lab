const http = require('http');
const fs = require('fs');
const loadWebPage = require('./loadContentPages');
require("dotenv").config({ path: "../dependency/.env" });


const server = http.createServer((req,res)=>{

    if(req.url === '/index.html'  ){

        res.writeHead(200, {"Content-type":"text/html"})
        res.write(loadWebPage.loadPageContents.formPageData)
        res.end();

   }
    else if (req.url === '/' && req.method === 'POST') {

        req.on('data',(chunkOfData)=>{
            console.log("Your Submitted Data : "+ chunkOfData.toString());
        })
        res.writeHead(200, {"Content-type":"text/html"})
        res.write(loadWebPage.loadPageContents.successPageData)
        res.end();

    }
    else {
        // res.statusCode(400).send('Wrong url');
        res.writeHead(404, {"Content-type":"text/html"})
        res.write(loadWebPage.loadPageContents.errorPageData)
        res.end();
    }

})

server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`SERVER IS LISTENING TO PORT : ${process.env.SERVER_PORT}`)
})