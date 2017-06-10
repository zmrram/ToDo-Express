var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../models/user');
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
        var newUser = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name
        });
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                } else {
                    newUser.password = hash;
                    newUser.save(function(err) {
                        if (err) {
                            console.log(err);
                        } else {
                            req.flash('success_msg', 'Account Registered!');
                            res.redirect('/users/login');
                        }
                    });
                }
            });
        });
    }
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', function(req, res) {
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        res.render('login', { errors: errors });
    } else {
        console.log(req.body);
    }
});

module.exports = router;