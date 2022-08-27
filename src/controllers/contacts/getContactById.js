const { Contact } = require("../../model/contact");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    return res.json({ messsage: `Contact with id=${id} Not Found` });
  }
  res.json({ result, message: "success" });
};

module.exports = getContactById;
