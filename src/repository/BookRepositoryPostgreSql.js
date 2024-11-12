const dbPool = require('../config/PostgreSQLDb');
const bookQuery = require('../queries/BookQuery');

const fetchBooksFromDatabase = () => {
    return dbPool.query(bookQuery.getBooksQuery);
};

const fetchBookByIdFromDatabase = (id) => {
    return dbPool.query(bookQuery.getBooksByIdQuery, [id]);
};

const modifyBookByIdInDatabase = (Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent) => {
    return dbPool.query(bookQuery.modifyBooksQuery, [bookCategory,bookName,edition,image,price, bookId]);
};

const createBookInDatabase = (Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent) => {
    return dbPool.query(bookQuery.createBooksQuery, [
        Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent
    ]);
};

const removeBookByIdInDatabase = (id) => {
    return dbPool.query(bookQuery.removeBooksQuery, [id]);
};

module.exports = {
    fetchBooksFromDatabase,
    fetchBookByIdFromDatabase,
    modifyBookByIdInDatabase,
    createBookInDatabase,
    removeBookByIdInDatabase
};