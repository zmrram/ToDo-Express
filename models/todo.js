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
    list: [todoSchema]
});

var UserList = module.exports.UserList = mongoose.model('UserList', userListSchema);
var TodoList = module.exports.TodoList = mongoose.model('TodoList', todoSchema);