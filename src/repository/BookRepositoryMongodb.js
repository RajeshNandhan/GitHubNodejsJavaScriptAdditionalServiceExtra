const { mongoose } = require("mongoose");
const { BookModel } = require("../model/book-schema.js");
const { Book } = require('../model/book.js')

const fetchBooksFromMongoDB = async () => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

    var booksResult = [];

    await BookModel.find()
        .exec()
        .then(doc => {
            if(doc) {
                doc.forEach(bookDoc => {
                    const book = new Book();
                    book.id = bookDoc._id;
                    book.bookId = bookDoc.bookId;
                    book.personId = bookDoc.personId;
                    book.bookName = bookDoc.bookName;
                    book.bookCategory = bookDoc.bookCategory;
                    book.edition = bookDoc.edition;
                    book.price = bookDoc.price;
                    book.image = bookDoc.image;
                    book.dateCreated = bookDoc.dateCreated;
                    book.dateCurrent = new Date();

                    booksResult.push(book);
                });
                console.log('--> Number of Books - ' + booksResult.length);
            }
        })
        .catch(err => {
            console.log(err);
            booksResult = null;
        })
        .finally(() => {
            mongoose.connection.close();
            console.log('mongoose connection closed');
        });

        return booksResult;
};

const fetchBookByIdFromMongoDB = async (id) => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';
    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    var book;
    const query = { bookId: id };

    await BookModel.findOne(query)
        .exec()
        .then(bookDoc => {
            if(bookDoc)
            {
                book = new Book();
                book.id = bookDoc._id;
                book.bookId = bookDoc.bookId;
                book.personId = bookDoc.personId;
                book.bookName = bookDoc.bookName;
                book.bookCategory = bookDoc.bookCategory;
                book.edition = bookDoc.edition;
                book.price = bookDoc.price;
                book.image = bookDoc.image;
                book.dateCreated = bookDoc.dateCreated;
                book.dateCurrent = new Date();

                console.log('--> Book Id - ' + book.id);
            } else {
                book = null;
            }
        })
        .catch(err => {
            console.log(err);
            book = null;
        })
        .finally(() => {
            mongoose.connection.close();
            console.log('mongoose connection closed');
        });

    return book;
};

const modifyBookByIdInMongoDB = async (Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent) => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    let updatedRowsCount = 0;

    var bookDoc = {
        bookId: bookId,
        personId: personId,
        bookName: bookName,
        bookCategory: bookCategory,
        edition: edition,
        price: price,
        image: image,
        dateCurrent: dateCurrent
    };

    const doc = await BookModel.findOne({
        bookId: bookId
    });

    if (doc !== null) {
        await doc.updateOne(bookDoc)
            .then(result => {
                updatedRowsCount = result.modifiedCount;
                console.log('--> No of Updated Book - ' + updatedRowsCount);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                mongoose.connection.close();
                console.log('mongoose connection closed');
            });
    } else {
        console.log('--> Error - Book Not FOUND');
    }

    return updatedRowsCount;
};

const createBookInMongoDB = async (bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent) => {
   
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    var bookResult;

    var bookDoc = {
        bookId: bookId,
        personId: personId,
        bookName: bookName,
        bookCategory: bookCategory,
        edition: edition,
        price: price,
        image: image,
        dateCreated: dateCreated,
        dateCurrent: dateCurrent
    };

    bookDoc._id = new mongoose.Types.ObjectId();

    await BookModel.create(bookDoc)
        .then(result => {
            bookDoc.id = bookDoc._id;
            bookResult = bookDoc;
            console.log('--> Book Created with Id - ' + result);
            console.log(bookResult)
        })
        .catch(err => {
            console.log(err);
            bookResult = null;
        })
        .finally(() => {
            mongoose.connection.close();
            console.log('mongoose connection closed');
        });

    return bookResult;
};

const removeBookByIdInMongoDB = async (id) => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    const query = { bookId: id };

    let deletedRowsCount = 0;

    await BookModel.deleteOne(query)
    .exec()
    .then(bookDoc => {
        console.log(bookDoc);
        deletedRowsCount = bookDoc.deletedCount;
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
        console.log('mongoose connection closed');
    });

    return deletedRowsCount;
};

module.exports = {
    fetchBooksFromMongoDB,
    fetchBookByIdFromMongoDB,
    modifyBookByIdInMongoDB,
    createBookInMongoDB,
    removeBookByIdInMongoDB
};