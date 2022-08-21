const http = require('http');
require("dotenv").config({ path: "../dependency/.env" });


const server = http.createServer((req,res)=>{

    res.writeHead(200, {"Content-type":"text/html"})
    res.write('<h1>Hello World</h1>')
    res.end();

})

server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`SERVER IS LISTENING TO PORT : ${process.env.SERVER_PORT}`)
})