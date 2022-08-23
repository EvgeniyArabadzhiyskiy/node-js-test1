const express = require("express");
require("dotenv").config();

const contactsRoutes = require('.');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.listen(PORT, (err) => {
  console.log(`Port running in PORT ${PORT}`);
});


// npx nodemon server.js
