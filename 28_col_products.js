// Part of 28_API_with_Mongoose.js => main.

const mongoose = require('mongoose');
// require('./28_config');
const videosSchema = new mongoose.Schema({
    name:String,
    category:String,
    Player:String,
    Team:String
});
const videosModel = mongoose.model('videos',videosSchema);
module.exports = videosModel;