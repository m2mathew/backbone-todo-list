'use strict';

var $ = require('jquery');
var TodoModel = require('./models/TodoModel');
var TodoCollection = require('./collections/TodoCollection');
var _ = require('backbone/node_modules/underscore');

$(document).ready(function(){
    /*
     * WHO are the actors?
     */

    // 1a. Target the element
    var $doLabel = $('#do-label');
    var $addButton = $('#add-button');
    var $form = $('.user-text');
    var $todoList = $('#main-list');
    var todoTemplate = _.template($('#todo-row').html());

    // 1b. Create a new instance of backbone model
    var todoItems = new TodoCollection;

    /*
    * WHAT is going to happen? (functions)
    */

    // 2a. function to run when jQuery event happens - add likes to the model
        // event: submit
        // action: get data and store it in the collection
    function onFormSubmit(e) {
        e.preventDefault();
        var newTodoItem = $doLabel.val();
        todoItems.add({
            todoItem: newTodoItem
        });
    }

    // 2b. function to run when model or collection event happens
        // use jQuery to update the page
    function onTodoItemAdded(newTodoItem) {
        newTodoItem.save();
        var newHtml = todoTemplate(newTodoItem.toJSON());
        $todoList.append(newHtml);

        // $ingredientList.append('<li />' + newIngredient.get('ingredient'));
    }


    // /*
    //  * WHEN is it going to happen? (event listeners)
    //  */

    // 3a. connect jQuery like button element with onButtonClick function
        // element: form
        // event: submit
    $form.on('submit', onFormSubmit);


    // 3b. connect Backbone like model with onLikeModelChange function
    todoItems.on('add', onTodoItemAdded);
    todoItems.fetch();
});
