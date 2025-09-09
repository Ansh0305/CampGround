const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMon = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMon);

module.exports = mongoose.model('User', UserSchema);