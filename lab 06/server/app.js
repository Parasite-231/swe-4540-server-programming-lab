// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const multer = require('multer');
// const path = require("path");
// // const bookSectionRouter = require("./routers/routes");



// const app = express();


// dotenv.config();
// SEVER_PORT = process.env.SEVER_PORT;


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
	
// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
	



app.use(router)

app.listen(8080,function(error) {
	if(error) throw error
		console.log("Server created Successfully on PORT 8080")
})
