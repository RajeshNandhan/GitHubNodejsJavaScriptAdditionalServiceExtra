const {getBooksData} = require("../data/InMemeoryData");

const getBookFromInMemory = () => {
    const books = getBooksData();
    return books;
};

const getBookByIdFromInMemory = (id) => {
    let books =  getBooksData();
    let bookindex = books.findIndex(book => book.bookId === id);
    return books[bookindex];
};  

module.exports = {
    getBookFromInMemory,
    getBookByIdFromInMemory,
};