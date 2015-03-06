'use strict';

function getTemplate(request, reply) {
  console.log(request.params.templateId);
  reply('Heres a template');
}

function putTemplate(request, reply) {
  console.log(request.params.templateId);
  reply('Oooohhhh, new template');
}

function deleteTemplate(request, reply) {
  console.log(request.params);
  reply('Oooohhhh, This template is so gone');
}

function getTemplates(request, reply) {
  console.log(request.params);
  reply('Heres all the template');
}

function getForm(request, reply) {
  console.log(request.params.formId);
  reply('Heres the form');
}

function putForm(request, reply) {
  console.log(request.params.formId);
  reply('Oooohhhh, new efrm added');
}

function deleteForm(request, reply) {
  console.log(request.params);
  reply('Oooohhhh, This template is so gone');
}

function getForms(request, reply) {
  console.log(request.params);
  reply('Heres all the forms');
}

module.exports.getTemplate = getTemplate;

module.exports.putTemplate = putTemplate;

module.exports.deleteTemplate = deleteTemplate;

module.exports.getTemplates = getTemplates;
