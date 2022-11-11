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

 	

// router.post()
// router.get("/",homeController.getHome)
// router.get("/booklists",bookController.getBookList)
// router.post("/add-booklists",bookController.postBook)

module.exports = router;