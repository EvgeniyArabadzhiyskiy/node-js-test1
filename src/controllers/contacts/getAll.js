const { Contact } = require("../../model/contact");

const getAll = async (req, res) => {
  const result = await Contact.find({});
  res.json({ result, message: "success" });
};

module.exports = getAll;
