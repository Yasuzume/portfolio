const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/matlab', (req, res) => {
    res.render('matlab');
});

router.get('/java', (req, res) => {
    res.render('java');
});


module.exports = router;