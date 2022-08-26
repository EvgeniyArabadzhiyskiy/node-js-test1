const { Contact } = require("../../model/contact");

const changeContact = async (req, res) => {
    const { id } = req.params;
    console.log("changeContact ~ id", id);


//   const result = new Contact({ ...req.body });
//   const contact = await result.save();

//   res.json({ contact, message: "success" });
};

module.exports = changeContact;