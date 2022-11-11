const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const bookList = require("../models/book");
const BookList = new mongoose.model("BookList", bookList);
// const UserTasksModel = require("../../models/user models/user schema/userTasksSchema");

const bookSectionRouter = express.Router();
bookSectionRouter.use(express.json());



bookSectionRouter.get("/booklists", async (req, res) => {
    const bookList = await BookList.find({});
    res.render("index", { bookList });
  });

  bookSectionRouter.post("/add-booklists", async (req, res) => {
    //book object that will insert into database
    //new book object create
    //single document object insert way
    const name = req.body.name.trim();
    const author = req.body.author.trim();
    const genre = req.body.genre.trim();
    console.log(req.body)
    const createNewBook = new BookList({
      name: name,
      author: author,
      genre:genre
    });
    //actual document is created
    //newBook will enter in the database
    await createNewBook.save((err) => {
      //save is the instance method
      if (err) {
        res.status(500).send("There was a server error in saving Book List");
        res.end();
      } else {
        res.redirect("/booklists");
       
      }
    });
  });

module.exports = bookSectionRouter