const {fetchBooksFromMongoDB, fetchBookByIdFromMongoDB, modifyBookByIdInMongoDB,
    createBookInMongoDB, removeBookByIdInMongoDB} = require('../repository/BookRepositoryMongodb');

const getBooksMongoDBEndPoint = async (req, res) => {
    await fetchBooksFromMongoDB()
    .then(result => {
        res.status(200).json(result); // Respond with the fetched books
    })
    .catch(error => {
        console.error('Error fetching books:', error); // Log the error
        res.status(500).send('Internal Server Error'); // Send a generic error message
    });
};

const getBooksByIdMongoDBEndPoint = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    await fetchBookByIdFromMongoDB(id)
        .then(result => {
            if (!result) {
                return res.status(404).send('Book not found'); // Handle case where no book is found
            }
            res.status(200).json(result); // Return the single book
        })
        .catch(error => {
            console.error('Error fetching book by ID:', error); // Log the error
            res.status(500).send('Internal Server Error'); // Send a generic error message
        });
};

const modifyBooksByIdMongoDBEndPoint = async (req, res) => {
    const id = parseInt(req.params.id);
    const {Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent} = req.body;
    
    await modifyBookByIdInMongoDB(Id, bookId, personId, bookCategory, bookName, personName, edition, image, price, dateCreated, dateCurrent)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            console.error('Error modifying book:', error);
            res.status(500).send('Internal Server Error');
        });
};

const createBooksMongoDBEndPoint = async (req, res) => {
    const {bookId, personId, bookCategory, bookName, personName, edition, image, price} = req.body;

    await createBookInMongoDB(1, 1, bookCategory, bookName, '', edition, image, price, '2024-04-04', '2024-04-04')
        .then(() => {
            res.status(201).json('Book created successfully');
        })
        .catch(error => {
            console.error('Error creating book:', error);
            res.status(500).send('Internal Server Error');
        });
};

const removeBooksByIdMongoDBEndPoint = async (req, res) => {
    const id = parseInt(req.params.id);
    let bookExistErrorMessage = null;
    let bookExistErrorMessageCode = null;

    await fetchBookByIdFromMongoDB(id).then(result => {
        if(!result){
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
        await removeBookByIdInMongoDB(id)
            .then((result) => {
                console.log(result)
                res.status(200).send(result.toString());
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
    getBooksMongoDBEndPoint,
    getBooksByIdMongoDBEndPoint,
    removeBooksByIdMongoDBEndPoint,
    createBooksMongoDBEndPoint,
    modifyBooksByIdMongoDBEndPoint
};