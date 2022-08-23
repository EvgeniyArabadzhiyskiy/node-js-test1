const getAllContats = require("./getAllContats");
const updateContactsList = require("./updateContactsList");

const changeContats = async (data, id) => {
  const contacts = await getAllContats();

  const findIdx = contacts.findIndex((contact) => contact.id === id);

  if (findIdx === -1) {
    return null;
  }

  contacts[findIdx] = {
    id,
    ...data,
  };

  updateContactsList(contacts);
  return contacts[findIdx];
};

module.exports = changeContats;
