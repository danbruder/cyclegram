'use strict';
const post = require('./post');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;
  var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

  mongoose.connect(app.get('mongodb'), options);
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(post);
};
