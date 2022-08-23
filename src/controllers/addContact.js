const contactsOperations = require("../../models");

// const addContact = async (req, res, next) => {
//   try {
//     const result = await contactsOperations.addContact(req.body);
//     res.status(201).json({ data: result });
//   } catch (error) {
//     next(error);
//   }
// };

const addContact = async (req, res, next) => {
  const result = await contactsOperations.addContact(req.body);
  res.status(201).json({ data: result });
};

module.exports = addContact;
