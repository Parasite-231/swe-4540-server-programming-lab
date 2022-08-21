const http = require('http');
require("dotenv").config({ path: "../dependency/.env" });


const server = http.createServer((req,res)=>{

    console.log(req.method + " " + req.url + " " + req.httpVersion);
    res.end();

})

server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`SERVER IS LISTENING TO PORT : ${process.env.SERVER_PORT}`)
})