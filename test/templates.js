'use strict';

var wreck = require('supertest');
var server = require('../server');
var config = require('../config');
var template = require('./data/template.json');

wreck = wreck('http://localhost:' + config.SERVER_PORT);

describe('templates', function() {

  before(function() {
    server.start();
  });

  after(function() {
    server.stop();
  });

  describe('GET /forms/templates', function() {
    it('responds with json', function(done) {
      wreck
        .get('/forms/templates')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /forms/template/54feffa340b7ea9e71e5ef7c', function() {
    it('responds with json', function(done) {
      wreck
        .get('/forms/template/54feffa340b7ea9e71e5ef7c')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('DELETE /forms/template/54feffa340b7ea9e71e5ef7c', function() {
    it('responds with json', function(done) {
      wreck
        .delete('/forms/template/54feffa340b7ea9e71e5ef7c')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('POST /forms/templates', function() {
    it('responds with json', function(done) {
      wreck
        .post('/forms/templates', template)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('PUT /forms/template/54feffa340b7ea9e71e5ef7c', function() {
    it('responds with json', function(done) {
      wreck
        .put('/forms/template/54feffa340b7ea9e71e5ef7c', template)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

});
