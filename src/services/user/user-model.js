'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: { type: String },
  facebook: { type: Schema.Types.Mixed },
  instagramId: { type: String },
  instagram: { type: Schema.Types.Mixed },
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  avatarUrl: { type: String },
  
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;