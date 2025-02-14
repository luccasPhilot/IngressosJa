const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tipo: { type: String, require: true } //admin ou user
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema, 'users');
