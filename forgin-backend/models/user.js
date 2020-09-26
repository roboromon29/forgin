'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = Schema({
    name: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    province: String,
    canton: String,
    distric: String
});

module.exports = mongoose.model('User', UsersSchema);