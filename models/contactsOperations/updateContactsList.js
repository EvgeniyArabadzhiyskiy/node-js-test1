const fs = require("fs").promises;
const path = require("path");

const contactPath = path.resolve("models/data/contacts.json");

const updateContactsList = (updateList) => {
  return fs.writeFile(contactPath, JSON.stringify(updateList));
};

module.exports = updateContactsList;
