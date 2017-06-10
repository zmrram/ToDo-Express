var express = require('express');
var router = express.Router();

router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {
    console.log(req.body);
    res.redirect('/');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', function(req, res) {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;