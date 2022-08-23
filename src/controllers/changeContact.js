const contactsOperations = require("../../models");

// const changeContact = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await contactsOperations.changeContact(req.body, id);
//     if (!result) {
//       return res
//         .status(404)
//         .json({ message: `Contact with id=${id} Not Found` });
//     }

//     res.json({ data: result });
//   } catch (error) {
//     next(error);
//   }
// };

const changeContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsOperations.changeContact(req.body, id);
  if (!result) {
    return res.status(404).json({ message: `Contact with id=${id} Not Found` });
  }

  res.json({ data: result });
};

module.exports = changeContact;
