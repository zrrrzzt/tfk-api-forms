'use strict';

function getTemplate(request, reply) {
  console.log(request.params.templateId);
  reply('Heres a template');
}

module.exports.getTemplate = getTemplate;
