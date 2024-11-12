const crypto = require("crypto");
const {fetchBooksFromDatabase, fetchBookByIdFromDatabase, modifyBookByIdInDatabase, createBookInDatabase,
    removeBookByIdInDatabase} = require('../repository/BookRepositoryPostgreSql');

const getBooksPostgreSqlEndPoint = (req, res) => {
    fetchBooksFromDatabase()
    .then(result => {
        res.status(200).json(result.rows); // Respond with the fetched books
    })
    .catch(error => {
        console.error('Error fetching books:', error); // Log the error
        res.status(500).send('Internal Server Error'); // Send a generic error message
    });
};

const getBooksByIdPostgreSqlEndPoint = (req, res) => {

    const id = parseInt(req.params.id, 10);

    fetchBookByIdFromDatabase(id)
        .then(result => {
            if (result.rows.length === 0) {
                return res.status(404).send('Book not found'); // Handle case where no book is found
            }
            res.status(200).json(result.rows[0]); // Return the single book
        })
        .catch(error => {
            console.error('Error fetching book by ID:', error); // Log the error
            res.status(500).send('Internal Server Error'); // Send a generic error message
        });
};

const modifyBooksByIdPostgreSqlEndPoint = (req, res) => {
    const id = parseInt(req.params.id);
    const {Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent} = req.body;

    modifyBookByIdInDatabase(Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent)
        .then(result => {
            res.status(200).json(result.rowCount.toString());
        })
        .catch(error => {
            console.error('Error modifying book:', error);
            res.status(500).send('Internal Server Error');
        });
};

const createBooksPostgreSqlEndPoint = (req, res) => {

    const guid = crypto.randomBytes(16).toString("hex");
    const {Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent} = req.body;

    createBookInDatabase(guid, 1, 1, bookCategory, bookName, '', edition, image, price, '2024-04-04', '2024-04-04')
        .then(() => {
            res.status(201).json('Book created successfully');
        })
        .catch(error => {
            console.error('Error creating book:', error);
            res.status(500).send('Internal Server Error');
        });
};

const removeBooksByIdPostgreSqlEndPoint = (req, res) => {
    const id = parseInt(req.params.id);
    const bookExistErrorMessage = null;
    const bookExistErrorMessageCode = null;

    fetchBookByIdFromDatabase(id).then(result => {
        if(result.rows.length === 0){
            bookExistErrorMessage = 'Book does not exist in the database';
            bookExistErrorMessageCode = 404;
        }
    })
    .catch(error => {
        console.error('Error removing book:', error);
        bookExistErrorMessage = 'Internal Server Error';
        bookExistErrorMessageCode = 500
    });

    if(!bookExistErrorMessage){
        removeBookByIdInDatabase(id)
        .then((result) => {
            res.status(200).send(result.rowCount.toString());
        })
        .catch(error => {
            console.error('Error removing book:', error);
            res.status(500).send('Internal Server Error');
        });
    } else{
        res.status(bookExistErrorMessageCode).send(bookExistErrorMessage);
    }
};

module.exports = {
    getBooksPostgreSqlEndPoint,
    getBooksByIdPostgreSqlEndPoint,
    removeBooksByIdPostgreSqlEndPoint,
    createBooksPostgreSqlEndPoint,
    modifyBooksByIdPostgreSqlEndPoint
};