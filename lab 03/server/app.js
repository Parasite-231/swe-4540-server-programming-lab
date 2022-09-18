const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config({ path: "./.env" });
server_port = process.env.SEVER_PORT;

app.listen(server_port, () => {
  console.log(`SERVER PORT RUNNING AT ${server_port}`);
});
