const { Contact } = require("../../model/contact");

const addcontact = async (req, res) => {
  const result = new Contact({ ...req.body });
  const contact = await result.save();

  res.json({ contact, message: "success" });
};

module.exports = addcontact;
