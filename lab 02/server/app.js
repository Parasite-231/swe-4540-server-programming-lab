const express = require("express");
const path = require("path");
const app = express();

const userCVInformationRouter = require("./routers/cv section/userCVInformationRouter");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

//include illustrations
app.use("/public/images/", express.static("./public/images"));
app.use("/public/styles/", express.static("./public/styles"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config({ path: "./.env" });
server_port = process.env.SEVER_PORT;

// Router Middleware
app.use("/", userCVInformationRouter);

app.listen(server_port, () => {
  console.log(`SERVER PORT RUNNING AT ${server_port}`);
});
