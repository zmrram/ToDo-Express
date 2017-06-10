var express = require('express');
var router = express.Router();

router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', function(req, res) {
    console.log(req.body);
})
module.exports = router;