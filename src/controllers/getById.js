const contactsOperations = require("../../models");

// const getById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await contactsOperations.getContactsById(id);
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

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsOperations.getContactsById(id);
  if (!result) {
    return res.status(404).json({ message: `Contact with id=${id} Not Found` });
  }

  res.json({ data: result });
};

module.exports = getById;
