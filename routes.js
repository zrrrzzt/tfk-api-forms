'use strict';

var handlers = require('./handlers');
var routes = [
  {
    method: 'GET',
    path: '/forms/template/{templateId}',
    handler: handlers.getTemplate
  }
];

module.exports = routes;
