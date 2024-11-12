
const {getPersonByIdFromInMemory, getPersonFromInMemory } = require("../repository/PersonRepositoryInMemory");

const getPersonsInMemoryEndPoint = (req, res) => {
    const result = getPersonFromInMemory();
    res.status(200).json(result);
};

const getPersonsByIdInMemoryEndPoint = (req, res) => {

    const id = parseInt(req.params.id, 10);
    const result = getPersonByIdFromInMemory(id);
    res.status(200).json(result);
};

module.exports = {
    getPersonsInMemoryEndPoint,
    getPersonsByIdInMemoryEndPoint,
};