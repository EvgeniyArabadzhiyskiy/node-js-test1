const getAll = require('./contacts/getAll');
const addcontact = require('./contacts/addcontact');
const getContactById = require('./contacts/getContactById');
const updeteContact = require('./contacts/updateContact');
const changeContact = require('./contacts/changeContact');
const deleteContact = require('./contacts/deleteContact');

module.exports = {
    getAll,
    addcontact,
    getContactById,
    updeteContact,
    changeContact,
    deleteContact
};