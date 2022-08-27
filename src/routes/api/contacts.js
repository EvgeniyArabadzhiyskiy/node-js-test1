const express = require("express");

const { joiSchema } = require("../../model/contact");
const validation = require("../../middlewares/validation");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");

const {
  getAll,
  addcontact,
  getContactById,
  updeteContact,
  deleteContact,
} = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));
router.get("/:id", ctrlWrapper(getContactById));
router.post("/", validation(joiSchema), ctrlWrapper(addcontact));
router.put("/:id", ctrlWrapper(updeteContact));
router.delete("/:id", ctrlWrapper(deleteContact));

module.exports = router;
