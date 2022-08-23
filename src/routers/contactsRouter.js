const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.json('helle Djon')
})

module.exports = router