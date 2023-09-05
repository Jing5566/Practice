const mongoose = require('mongoose');

const FirstAndLastSchema = mongoose.Schema({
    First_Name: String,
    Last_Name: String
});

module.exports = mongoose.model("firstlastdata", FirstAndLastSchema);