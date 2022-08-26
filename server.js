const express = require("express");
require("dotenv").config();
const mongoose = require('mongoose');

const { routerContact } = require("./src/routes");
const { PORT, MONGO_DB } = process.env;


const app = express();
app.use(express.json())

app.use('api/contats',routerContact)

const start = async () => {

    try {
        await mongoose.connect(MONGO_DB)
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }

    app.listen(PORT);
}

start()




