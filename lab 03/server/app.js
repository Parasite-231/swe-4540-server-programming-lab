const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const bookList = require("./models/book");
const BookList = new mongoose.model("BookList", bookList);


const app = express();
const PORT = 3490;

dotenv.config();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//database connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully!!!"))
  .catch((err) => console.log(err));

 


  app.get("/", async (req, res) => {
    const bookList = await BookList.find({});
    res.render("index", { bookList });
  });

  app.post("/", async (req, res) => {
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

//   app.get("/", async (req, res) => {
//     res.send("Hello World");
//   });


app.listen(PORT, () => {
    console.log(`SERVER PORT RUNNING AT ${PORT}`);
  });