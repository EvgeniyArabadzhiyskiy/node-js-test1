const express = require("express");

const { validation, ctrlWrapper } = require("../middlewares");
const contactSchema = require("../schemas/contactsSchema");
const contactCtrl = require("../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(contactCtrl.getAll));
router.get("/:id", ctrlWrapper(contactCtrl.getById));
router.post("/", validation(contactSchema), ctrlWrapper(contactCtrl.addContact));
router.put("/:id", validation(contactSchema), ctrlWrapper(contactCtrl.changeContact));
router.delete("/:id", ctrlWrapper(contactCtrl.deleteContact));

module.exports = { contactsRoutes: router };
