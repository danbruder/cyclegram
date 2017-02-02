'use strict';

// src/services/post/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    // The authenticated user
    const user = hook.params.user;

    The actual message text
    const description = hook.data.description
    // Messages can't be longer than 400 characters
    .substring(0, 400)
    // Do some basic HTML escaping
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // Override the original data
    hook.data = {
      imageSrc: hook.data.imageSrc,
      description: description,
      userId: user._id,
    };
  };
};
