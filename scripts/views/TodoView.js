'use strict';

var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var TodoModel = require('../models/TodoModel');

module.exports = Backbone.View.extend({
    tagName: 'div',
    initialize: function() {
        console.log('data initialized');
        _.bindAll (
            this,
            'onTodoButtonClick',
            'render',
            'remove'
        );
        this.model.on('change', this.render);
        this.$el.on('click', this.onTodoButtonClick);
        this.render();
    },
    render: function() {
        var todoItem = this.model.get('todoItem');
        this.$el.html('<span>' + todoItem + '</span><button>delete</button>');
        if(!this.model.get('completed')) {
            this.$el.css('text-decoration', 'line-through');
        }
        else {
            this.$el.css('text-decoration', 'none');
        }
        this.$el.find('button').on('click', this.remove);
    },
    onTodoButtonClick: function() {
        console.log('Submit button was clicked');
        var newTodoItem = this.model.get('todoItem');
        this.$el.set({completed: true});
    },
    toggleCompletion: function() {
        this.model.set({
            completed: !this.model.get('completed')
        });
    },
    remove: function() {
        this.$el.remove();
    }
});
