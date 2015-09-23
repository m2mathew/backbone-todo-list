'use strict';

var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var TodoModel = require('../models/TodoModel');

module.exports = Backbone.View.extend({
    tagName: 'button',
    // events: {
    //     'click': 'onTodoButtonClick'  // shorthand version
    // },
    initialize: function() {
        _.bindAll (
            this,
            'onTodoButtonClick',
            'render'
        );
        console.log('the todo item was just created!');
        this.model = new TodoModel();
        this.$el.on('click', this.onTodoButtonClick);  // long version
        this.model.on('change');
        this.render();
    },
    render: function() {
        var todoItem = this.model.get('todoItem');
        this.$el.html(todoItem);
    },
    onTodoButtonClick: function() {
        console.log('Submit button was clicked');
        var newTodoItem = this.model.get('todoItem');
        this.model.set({
            todoItem: newTodoItem
        });
    }
});
