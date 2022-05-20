const path = require('path');
// const cors = require('cors')
const express = require('express');
const router = express.Router();
var axios = require("axios")


module.exports = router;


router.get('/minter', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/app4.html'));
});
router.get('/', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/index.html'));
});
router.get('/stats', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/stats.html'));
});


