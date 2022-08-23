const getAll = require("./getAll");
const getById = require("./getById");
const addContact = require("./addContact");
const changeContact = require("./changeContact");
const deleteContact = require("./deleteContact");

const contactCtrl = {
  getAll,
  getById,
  addContact,
  changeContact,
  deleteContact,
};

module.exports = contactCtrl;
