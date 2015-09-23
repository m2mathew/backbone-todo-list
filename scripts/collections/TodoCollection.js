'use strict';

var Backbone = require('backbone');
var TodoModel = require('../models/TodoModel');

module.exports = Backbone.Collection.extend({
    model: TodoModel,
    url: 'http://tiyfe.herokuapp.com/collections/mike_m_backbone-todo'
});
