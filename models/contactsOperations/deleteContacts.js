const getAllContats = require("./getAllContats");
const updateContactsList = require("./updateContactsList");

const deleteContact = async (id) => {
  try {
    const contacts = await getAllContats();
    const findIdx = contacts.findIndex((contact) => contact.id === id);
    if (findIdx === -1) {
      return null;
    }

    const deletedContact = contacts.splice(findIdx, 1);

    updateContactsList(contacts);
    return deletedContact;
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteContact;
