var express = require('express');
var router = express.Router();

router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    if (errors) {
        res.render('register', { errors: errors });
    } else {
        req.flash('success_msg', 'Account Registered!');
        res.redirect('/users/login');
    }
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', function(req, res) {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;