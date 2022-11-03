const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
 const homeController = require('../controllers/homeController');

// router.get("/", homeController.getHome);
// router.get("/book-list", bookController.getBookList);
// router.get("/books", bookController.getBook);
// router.post("/books", bookController.postBook);
// router.get("/books-delete/:id", bookController.deleteBook);
// router.get("/books-update/:id", bookController.getUpdateBook);
// router.post("/books-update/:id", bookController.updateBook);
router.get("/",homeController.getHome)
router.get("/booklists",bookController.getBookList)
router.post("/add-booklists",bookController.postBook)

module.exports = router;