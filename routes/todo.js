var express = require('express');
var router = express.Router();

var list = [{ item: 'buy milk' }, { item: 'walk dog' }, { item: 'shopping' }];

router.get('/', function(req, res) {
    res.render('todo', { list: list });
});

router.post('/', function(req, res) {
    var data = { item: req.body.item };
    list.push(data);
    res.redirect('/todo');
});

router.delete('/:item', function(req, res) {
    list = list.filter(function(todo) {
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(list);
});

module.exports = router;