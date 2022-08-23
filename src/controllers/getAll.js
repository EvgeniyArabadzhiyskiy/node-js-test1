const contactsOperations = require("../../models");

// const getAll = async (req, res, next) => {
//   try {
//     const contacts = await contactsOperations.getAllContats();

//     res.json(contacts);
//   } catch (error) {
//     next(error);
//   }
// };

const getAll = async (req, res, next) => {
  const contacts = await contactsOperations.getAllContats();

  res.json(contacts);
};

module.exports = getAll;
