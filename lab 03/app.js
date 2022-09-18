const express = require('express');
const app = express()
app.use(express.json());


require("dotenv").config({ path: "./.env" });
server_port = process.env.SERVER_PORT;




app.listen(server_port, () => {
    console.log(`SERVER PORT LISTENING AT ${server_port}`);
  });