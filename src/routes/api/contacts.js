const express = require("express");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const {getAll} = require('../../controllers');
// console.log("getAll", getAll);

const router = express.Router()

router.get("/",async () => {
    console.log('hello');
//   return await Contact.find({});

})
router.get("/",ctrlWrapper())
router.post("/",ctrlWrapper())

module.exports = router