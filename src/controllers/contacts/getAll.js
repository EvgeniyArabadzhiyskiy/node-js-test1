const { Contact } = require("../../model/contact");

const getAll = async () => {
    console.log('hello');
  return await Contact.find({});

};

module.exports = getAll;
