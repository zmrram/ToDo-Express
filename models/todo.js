var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    item: {
        type: String,
        require: true
    }
});

var userListSchema = mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    list: [todoList]
});

var UserList = module.exports = mongoose.model('UserList', userListSchema);
var TodoList = module.exports = mongoose.model('TodoList', todoSchema);