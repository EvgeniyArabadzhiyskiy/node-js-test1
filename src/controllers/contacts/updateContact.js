const { Contact } = require("../../model/contact");

const updeteContact = async (req, res) => {
  const { id } = req.params;

  const Joi = require("joi");
  const joiSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(3).max(30).required(),
    favorites: Joi.bool(),
  });

  const { error } = joiSchema.validate(req.body);
  console.log("addcontact ~ error", error);

  if(error) {
    return res.json({message: error.message})
  }

  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    return res.json({ messsage: `Contact with id=${id} Noot Found` });
  }

  res.json({ result, message: "success" });
};

module.exports = updeteContact;
