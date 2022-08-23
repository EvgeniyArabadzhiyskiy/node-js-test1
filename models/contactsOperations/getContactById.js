const getAllContats = require("./getAllContats");

const getContactsById = async (id) => {
  try {
    const contacts = await getAllContats();

    const findContact = contacts.find((contact) => contact.id === id);
    if (!findContact) {
      return null;
    }

    return findContact;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getContactsById;
