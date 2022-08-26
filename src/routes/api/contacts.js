const express = require("express");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const {
  getAll,
  addcontact,
  getContactById,
  changeContact,
  deleteContact,
} = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));
router.get("/:id", ctrlWrapper(getContactById));
router.post("/", ctrlWrapper(addcontact));
router.put("/:id", ctrlWrapper(changeContact));
router.delete("/:id", ctrlWrapper(deleteContact));

module.exports = router;
