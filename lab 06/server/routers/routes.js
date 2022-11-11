const express = require("express");
const router = express.Router();
// const bookController = require("../controllers/bookController");
//  const homeController = require('../controllers/homeController');
const imageController = require("../controllers/imageController");
const multer = require("multer")
const path = require("path");



 router.get("/", imageController.getImage);
 router.get("/slideshow", imageController.getSlideShow);
 router.post("/uploadProfilePicture", imageController.postImage);

 	
// var upload = multer({ dest: "Upload_folder_name" })
	
// var storage = multer.diskStorage({
// 	destination: function (req, file, cb) {

// 		cb(null, "uploads")
// 	},
// 	filename: function (req, file, cb) {
// 	cb(null, file.fieldname + "-" + Date.now()+".jpg")
// 	}
// })

// const maxSize = 1 * 1000 * 1000;
	
// var upload = multer({
// 	storage: storage,
// 	limits: { fileSize: maxSize },
// 	fileFilter: function (req, file, cb){
	
// 		var filetypes = /jpeg|jpg|png/;
// 		var mimetype = filetypes.test(file.mimetype);

// 		var extname = filetypes.test(path.extname(
// 					file.originalname).toLowerCase());
		
// 		if (mimetype && extname) {
// 			return cb(null, true);
// 		}
	
// 		cb("Error: File upload only supports the "
// 				+ "following filetypes - " + filetypes);
// 	}

// }).single("mypic");	

// router.post("/uploadProfilePicture",function (req, res, next) {
	
// 	upload(req,res,function(err) {

// 		if(err) {

			
// 			res.send(err)
// 		}
// 		else {

// 			res.send("Success, Image uploaded!")
// 		}
// 	})
// })
// router.post()
// router.get("/",homeController.getHome)
// router.get("/booklists",bookController.getBookList)
// router.post("/add-booklists",bookController.postBook)

module.exports = router;