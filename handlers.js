'use strict';

var mongojs = require('mongojs');
var config = require('./config');
var db = mongojs(config.DB);
var forms = db.collection('forms');
var templates = db.collection('formtemplates');

function addTemplate(request, reply) {
  templates.save(request.payload, function(err, docs) {
    if (err) {
      reply(err);
    } else {
      reply(docs);
    }
  });
}

function getTemplate(request, reply) {
  var id = mongojs.ObjectId(request.params.templateId);
  templates.find({_id: id}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function updateTemplate(request, reply) {
  var id = mongojs.ObjectId(request.params.templateId);
  templates.update({_id:id}, request.payload, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function deleteTemplate(request, reply) {
  var id = mongojs.ObjectId(request.params.templateId);
  templates.remove({_id: id}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function getTemplates(request, reply) {
  templates.find({}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function addForm(request, reply) {
  forms.save(request.payload, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function getForm(request, reply) {
  var id = mongojs.ObjectId(request.params.formId);
  forms.find({_id:id}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function updateForm(request, reply) {
  var id = mongojs.ObjectId(request.params.formId);
  forms.update({_id:id}, request.payload, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function deleteForm(request, reply) {
  var id = mongojs.ObjectId(request.params.formId);
  forms.remove({_id: id}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function getForms(request, reply) {
  forms.find({}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

module.exports.addTemplate = addTemplate;

module.exports.getTemplate = getTemplate;

module.exports.updateTemplate = updateTemplate;

module.exports.deleteTemplate = deleteTemplate;

module.exports.getTemplates = getTemplates;

module.exports.addForm = addForm;

module.exports.getForm = getForm;

module.exports.updateForm = updateForm;

module.exports.deleteForm = deleteForm;

module.exports.getForms = getForms;
