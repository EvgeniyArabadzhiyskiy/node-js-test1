const getAllContats = require("./contactsOperations/getAllContats");
const getContactsById = require("./contactsOperations/getContactById");
const addContact = require("./contactsOperations/addContats");
const changeContact = require("./contactsOperations/changeContats");
const deleteContact = require("./contactsOperations/deleteContacts");

const contactsOperations = {
  getAllContats,
  getContactsById,
  addContact,
  changeContact,
  deleteContact,
};

module.exports = contactsOperations;
