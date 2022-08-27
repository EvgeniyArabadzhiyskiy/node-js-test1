const getAll = require('./contacts/getAll');
const addcontact = require('./contacts/addcontact');
const getContactById = require('./contacts/getContactById');
const updeteContact = require('./contacts/updateContact');
const deleteContact = require('./contacts/deleteContact');

module.exports = {
    getAll,
    addcontact,
    getContactById,
    updeteContact,
    deleteContact
};