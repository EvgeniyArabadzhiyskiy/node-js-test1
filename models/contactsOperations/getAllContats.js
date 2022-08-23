const fs = require("fs/promises");
const path = require("path");

const contactPath = path.resolve("models/data/contacts.json");

const getAllContats = async () => {
  try {
    const contacts = await fs.readFile(contactPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getAllContats;
