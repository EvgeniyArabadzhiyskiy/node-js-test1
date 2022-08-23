const express = require("express");
require("dotenv").config();

const { contactsRoutes } = require("./src/routers/contactsRouter");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/contacts", contactsRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Server Error' });
});

app.listen(PORT, (err) => {
  console.log(`Port running in PORT ${PORT}`);
});

// npx nodemon server.js
