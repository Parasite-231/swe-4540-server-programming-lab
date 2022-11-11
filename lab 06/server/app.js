// const express = require('express');
// const bodyParser = require('body-parser');
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const multer = require('multer');
// const path = require("path");
// // const bookSectionRouter = require("./routers/routes");



// const app = express();


require("dotenv").config({ path: "./.env" });
server_port = process.env.SEVER_PORT;


//   app.listen(SEVER_PORT, () => {
//     console.log(`SERVER PORT RUNNING AT ${SEVER_PORT}`);
//   });


const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()
const router = require("./routers/routes");

// View Engine Setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));

app.set("view engine","ejs")
	

	



app.use(router)

app.listen(server_port,function(error) {
	if(error) throw error
		console.log(`SERVER PORT RUNNING AT ${server_port}`)
})
