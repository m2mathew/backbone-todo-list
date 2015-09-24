'use strict';

var $ = require('jquery');
var TodoModel = require('./models/TodoModel');
var TodoCollection = require('./collections/TodoCollection');
var _ = require('backbone/node_modules/underscore');
var TodoView = require('./views/TodoView');

$(document).ready(function(){

    // 1a. Target the element
    var $doLabel = $('#do-label');
    var $addButton = $('#add-button');
    var $form = $('.user-text');
    var $todoList = $('#main-list');
    var todoTemplate = _.template($('#todo-row').html());
    var $checkButton = $('#check-off');
    var $deleteAllButton = $('#delete-all-button');

    // 1b. Create a new instance of backbone collection
    var todoItems = new TodoCollection();

    // 2a. function to run when jQuery event happens - add likes to the model
        // event: submit
        // action: get data and store it in the collection
    function onFormSubmit(e) {
        e.preventDefault();
        var newTodoItem = $doLabel.val();
        todoItems.add({
            todoItem: newTodoItem
        });
        $doLabel.val('');
    }

    // 2b. function to run when model or collection event happens
        // use jQuery to update the page
    function onTodoItemAdded(newTodoItem) {
        newTodoItem.save();
        var todoItem1 = new TodoView({model: newTodoItem});
        var newHtml = todoTemplate(newTodoItem.toJSON());
        $todoList.append(newHtml);
    }

    // function purgeTodoItem() {
    //     todoItem.destroy({success: function(model, response) {

    //         }
    //     });
    // }

    // 3a. connect jQuery like button element with onButtonClick function
        // element: form
        // event: submit
    $form.on('submit', onFormSubmit);
    // $checkButton.on('click', purgeTodoItem);

    // 3b. connect Backbone todo model with onTodoItemAdded function
    todoItems.on('add', onTodoItemAdded);
    todoItems.fetch();
    setInterval(function() {
        todoItems.fetch();
        }, 10000);
});
