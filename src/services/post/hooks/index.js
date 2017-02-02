'use strict';

const process = require('./process');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const populateSender = hooks.populate('user', {
  service: 'users',
  field: 'userId'
});

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create:[process()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [populateSender],
  get: [populateSender],
  create: [],
  update: [],
  patch: [],
  remove: []
};
