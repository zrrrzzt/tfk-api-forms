'use strict';

var mongojs = require('mongojs');
var config = require('./config');
var db = mongojs(config.DB);
var form = require('./test/data/form.json');
var template = require('./test/data/template.json');


function handleCallback(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

function addDocument(options, callback) {
  var collection = db.collection(options.collection);

  collection.insert(options.document, function(err, data){
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, data);
    }
  });
}

db.createCollection('forms', handleCallback);

db.createCollection('formtemplates', handleCallback);

addDocument({collection:'forms', document:form}, handleCallback);

addDocument({collection:'formtemplates', document:template}, handleCallback);