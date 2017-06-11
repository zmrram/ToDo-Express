var express = require('express');
var router = express.Router();
var UserList = require('../models/todo').UserList;
var TodoList = require('../models/todo').TodoList;

router.get('/', function(req, res) {
    var query = {
        user_id: req.user._id
    };
    UserList.findOne(query, function(err, todolist) {
        if (err) {
            console.log(err);
        } else {
            if (!todolist) {
                newUserList = new UserList({
                    user_id: req.user._id,
                    list: []
                });
                newUserList.save(function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(newUserList);
                    }
                });
            }
            res.render('todo', { todolist: todolist });
        }
    });

});

router.post('/', function(req, res) {
    req.checkBody('item', 'Task is empty').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        res.render('/', { errors: errors });
    } else {
        newItem = new TodoList({
            item: req.body.item
        });
        var query = {
            user_id: req.user._id
        };
        UserList.findOne(query, function(err, todolist) {
            if (err) {
                console.log(err);
            } else {
                todolist.list.push(newItem);
                UserList.update(query, todolist, function(err) {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        req.flash('success_msg', 'New Task Added!!!');
                        res.redirect('/todo');
                    }
                });
            }
        });
    }
});

router.delete('/:item', function(req, res) {
    list = list.filter(function(todo) {
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(list);
});

module.exports = router;