const { Contact } = require("../../model/contact");

const updeteContact = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    return res.json({ messsage: `Contact with id=${id} Not Found` });
  }

  res.json({ result, message: "success" });
};

module.exports = updeteContact;
