var express = require('express');
var router = express.Router();

router.get('*', function(req, res) {
    res.status(404);
    res.render('404');
});

module.exports = router;