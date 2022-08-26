const { Contact } = require("../../model/contact");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  res.json({ result, message: "success" });
};

module.exports = getContactById;
