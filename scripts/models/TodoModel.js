'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        todoItem: '',
        completed: false
    },
    urlRoot: 'http://tiyfe.herokuapp.com/collections/mike_m_backbone-todo',
    idAttribute: '_id'
});
