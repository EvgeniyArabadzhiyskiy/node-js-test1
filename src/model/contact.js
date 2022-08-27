const Joi = require("joi");
const { Schema, model } = require("mongoose");

const contactSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favorites: {
    type: Boolean,
    default: false,
  },
});

const Contact = model("contact", contactSchema);


const joiSchema = Joi.object({
  name:Joi.string().min(3).max(30).required(),
  email: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(3).max(30).required(),
  favorites: Joi.bool()
})

// const {error} = joiSchema.validate();

module.exports = {
  Contact,
  joiSchema,
};
