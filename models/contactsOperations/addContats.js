const shortid = require("shortid");

const getAllContats = require("./getAllContats");
const updateContactsList = require("./updateContactsList");

const addContacts = async (data) => {
  try {
    const contacts = await getAllContats();

    const newContact = {
      id: shortid(),
      ...data,
    };

    contacts.push(newContact);
    updateContactsList(contacts);

    return newContact;
  } catch (error) {
    console.error(error);
  }
};

module.exports = addContacts;
