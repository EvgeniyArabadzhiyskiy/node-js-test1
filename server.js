const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const { routerContact } = require("./src/routes");
const { PORT, MONGO_DB } = process.env;

app.use(express.json());
app.use("/api/contacts", routerContact);

const start = async () => {
  try {
    await mongoose.connect(MONGO_DB);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log("PORT ", PORT);
  });
};

start();
