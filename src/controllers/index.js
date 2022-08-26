const getAll = require('./contacts/getAll');
const addcontact = require('./contacts/addcontact');
const getContactById = require('./contacts/getContactById');
const changeContact = require('./contacts/changeContact');
const deleteContact = require('./contacts/deleteContact');

module.exports = {
    getAll,
    addcontact,
    getContactById,
    changeContact,
    deleteContact
};