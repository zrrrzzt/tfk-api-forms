'use strict';

function addTemplate(request, reply) {
  console.log(request.params.templateId);
  reply('Oooohhhh, new template');
}

function getTemplate(request, reply) {
  console.log(request.params.templateId);
  reply('Heres a template');
}

function updateTemplate(request, reply) {
  console.log(request.params.templateId);
  reply('Template updated, sir');
}

function deleteTemplate(request, reply) {
  console.log(request.params);
  reply('Oooohhhh, This template is so gone');
}

function getTemplates(request, reply) {
  console.log(request.params);
  reply('Heres all the templates');
}

function addForm(request, reply) {
  console.log(request.params.formId);
  reply('Oooohhhh, new form added');
}

function getForm(request, reply) {
  console.log(request.params.formId);
  reply('Heres the form');
}

function updateForm(request, reply) {
  console.log(request.params.formId);
  reply('Form updated, madam');
}

function deleteForm(request, reply) {
  console.log(request.params);
  reply('Oooohhhh, This form is so gone');
}

function getForms(request, reply) {
  console.log(request.params);
  reply('Heres all the forms');
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
