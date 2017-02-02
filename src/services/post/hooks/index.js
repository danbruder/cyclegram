'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [
    hooks.populate('user', {
      service: 'users',
      field: '_id'
    })
  ],
  get: [
    hooks.populate('user', {
      service: 'users',
      field: 'user_id'
    })
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
};
