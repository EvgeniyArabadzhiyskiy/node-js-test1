const { Contact } = require("../../model/contact");

const deleteContact = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    return res.json({ messsage: `Contact with id=${id} Not Found` });
  }

  res.json({ result, message: "success" });
};

module.exports = deleteContact;
