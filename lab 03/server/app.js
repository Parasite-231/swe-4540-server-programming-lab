const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const bookSectionRouter = require("./routers/bookSectionRouter");



const app = express();


dotenv.config();
SEVER_PORT = process.env.SEVER_PORT;

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

 

  app.use("/",bookSectionRouter)




  app.listen(SEVER_PORT, () => {
    console.log(`SERVER PORT RUNNING AT ${SEVER_PORT}`);
  });