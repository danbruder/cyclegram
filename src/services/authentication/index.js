'use strict';

const authentication = require('feathers-authentication');

const InstagramStrategy = require('passport-instagram').Strategy;
const InstagramTokenStrategy = require('passport-instagram-token');

module.exports = function() {
  const app = this;

  let config = app.get('auth');
  
  config.instagram.strategy = InstagramStrategy;
  config.instagram.tokenStrategy = InstagramTokenStrategy;

  app.set('auth', config);
  app.configure(authentication(config));
};
