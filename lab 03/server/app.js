const express = require("express");
const path = require("path");
const app = express();
const router = require("./routers/router");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

//include illustrations
app.use("/public/images/", express.static("./public/images"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config({ path: "./.env" });
server_port = process.env.SEVER_PORT;

// app.get("/", (req, res) => {
//   res.send("Lab initiated now");
// });
app.use(router); // Router Middleware
app.listen(server_port, () => {
  console.log(`SERVER PORT RUNNING AT ${server_port}`);
});
