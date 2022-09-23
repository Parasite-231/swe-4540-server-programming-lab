
  const express = require("express");
  const mongoose = require("mongoose");
  const bookList = require("./models/book");
  const bodyParser = require('body-parser');
  const BookList = new mongoose.model("BookList", bookList);
  const routes = express.Router();
    
routes.use(express.json());


  routes.get("/", async (req, res) => {
    const bookList = await BookList.find({});
    res.render("index", { bookList });
  });

  routes.post("/", async (req, res) => {
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
        res.redirect("/");
       
      }
    });
  });

  module.exports = {routes}