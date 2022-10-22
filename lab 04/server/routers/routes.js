const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
 const homeController = require('../controllers/homeController');

router.get("/",homeController.getHome)
router.get("/booklists",bookController.getBookList)
router.post("/add-booklists",bookController.postBook)

module.exports = router;