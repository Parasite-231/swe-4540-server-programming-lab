const express = require("express");
const path = require("path");
const app = express();

const userCVInformationRouter = require("./routers/cv section/userCVInformationRouter");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

//include illustrations
app.use("/public/images/", express.static("./public/images"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config({ path: "./.env" });
server_port = process.env.SEVER_PORT;

// Router Middleware
app.use("/users", userCVInformationRouter);

app.listen(server_port, () => {
  console.log(`SERVER RUNNING AT PORT NUMBER :  ${server_port}`);
});
