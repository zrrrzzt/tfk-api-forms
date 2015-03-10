'use strict';

var wreck = require('supertest');
var server = require('../server');
var config = require('../config');
var form = require('./data/form.json');

wreck = wreck('http://localhost:' + config.SERVER_PORT);

describe('forms', function() {

  before(function() {
    server.start();
  });

  after(function() {
    server.stop();
  });

  describe('GET /forms', function() {
    it('responds with json', function(done) {
      wreck
        .get('/forms')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /form/54ff007401b742f8f20647d9', function() {
    it('responds with json', function(done) {
      wreck
        .get('/form/54ff007401b742f8f20647d9')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('DELETE /form/54ff007401b742f8f20647d9', function() {
    it('responds with json', function(done) {
      wreck
        .delete('/form/54ff007401b742f8f20647d9')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('POST /forms', function() {
    it('responds with json', function(done) {
      wreck
        .post('/forms', form)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('PUT /form/54ff007401b742f8f20647d9', function() {
    it('responds with json', function(done) {
      wreck
        .put('/form/54ff007401b742f8f20647d9', form)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

});
