
const {getBookByIdFromInMemory, getBookFromInMemory} = require("../repository/BookRepositoryInMemory");

const getBooksInMemoryEndPoint = (req, res) => {
    const result = getBookFromInMemory();
    res.status(200).json(result);
};

const getBooksByIdInMemoryEndPoint = (req, res) => {

    const id = parseInt(req.params.id, 10);
    const result = getBookByIdFromInMemory(id);
    res.status(200).json(result);
};

module.exports = {
    getBooksInMemoryEndPoint,
    getBooksByIdInMemoryEndPoint,
};