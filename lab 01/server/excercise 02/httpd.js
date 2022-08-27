require("dotenv").config({ path: "../dependency/.env" });
const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
    console.log(req.url);
    const assetsUrlPath = fs.readFileSync(`../public${req.url}`)
    const fileExtension = req.url.substring(req.url.lastIndexOf('.'));
    console.log(fileExtension)
    const mimeTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      "ico":"image/icon-x"
    }
    console.log("extension:" + fileExtension);
    res.writeHead(200, {
        'Content-Type': mimeTypes[fileExtension]
      });
    res.write(assetsUrlPath);
    res.end();
  
    console.log("req method : " + req.method + " " + "req url:"+ req.url + " " + req.httpVersion);

};
const server = http.createServer(requestListener);

server.listen(process.env.SERVER_PORT, ()=>{
  console.log(`SERVER IS LISTENING TO PORT : ${process.env.SERVER_PORT}`)
})

// var http = require('http');
// var fs = require("fs");
// var path = require('path');

// var server = http.createServer((req, res) => {
//   console.log(req.method + " " + req.url + " " + req.httpVersion);
//   if (req.url == '/'){
//     fs.readFile("../public/", "UTF-8", function(err, html){
//       res.writeHead(200, {"Content-Type": "text/html"});
//       res.end(html);
//   });
//   }
//   else if(req.url.match("/.css$")){
//     var cssPath = path.join(__dirname, 'public', req.url);
//     var fileStream = fs.createReadStream(cssPath, "UTF-8");
//     res.writeHead(200, {"Content-Type": "text/css"});
//     fileStream.pipe(res);

// }else if(req.url.match("/.js$")){
//     var imagePath = path.join(__dirname, 'public', req.url);
//     var fileStream = fs.createReadStream(imagePath);
//     res.writeHead(200, {"Content-Type": "text/javascript"});
//     fileStream.pipe(res);
// }
  
//   else{
//     res.write("CANNOT " + req.method + " " + req.url)
//     res.end()
//   }
// });

// server.listen(8000);