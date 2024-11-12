const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    bookId: Number,
    personId: Number,
    bookName: String,
    bookCategory: String,
    edition: String,
    price: Number,
    image: {type: String, default:""},
    dateCreated: Date,
    dateCurrent: Date
});

const BookModel = mongoose.model('Book', bookSchema,'Book');

//module.exports = mongoose.model('Person', PersonSchema);

module.exports = {
    BookModel,
};