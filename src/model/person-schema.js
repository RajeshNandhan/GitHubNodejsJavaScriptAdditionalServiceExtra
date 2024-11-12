const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var personSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    personId: Number,
    firstName: String,
    lastName: String,
    rank: Number,
    category: String,
    dateOfBirth: Date,
    isPlayCricket: Boolean,
    dateCreated: Date,
    dateCurrent: Date
});

var PersonModel = mongoose.model('Person', personSchema,'Person');

module.exports = {
    PersonModel,
};