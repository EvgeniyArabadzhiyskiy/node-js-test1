const { Contact } = require("../../model/contact");

const deleteContact = async (req, res) => {
    const { id } = req.params;
    console.log("deleteContact ~ id", id);


//   const result = new Contact({ ...req.body });
//   const contact = await result.save();

//   res.json({ contact, message: "success" });
};

module.exports = deleteContact;