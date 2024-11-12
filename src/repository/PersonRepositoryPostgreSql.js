const dbPool = require('../config/PostgreSQLDb');
const personQuery = require('../queries/PersonQuery');

const fetchPersonsFromPostgreSqlDB = () => {
    return dbPool.query(personQuery.getPersonsQuery);
};

const fetchPersonByIdFromPostgreSqlDB = (id) => {
    return dbPool.query(personQuery.getPersonByIdQuery,[id]);
};

const modifyPersonsByIdFromPostgreSqlDB = (Id, personId, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, dateCreated, dateCurrent) => {
    return dbPool.query(personQuery.modifyPersonQuery,[firstName, lastName, rank, category, dateOfBirth, isPlayCricket, personId]);
};

const createPersonsFromPostgreSqlDB = (Id, personCategory, personname, edition, image, price) => {
    return dbPool.query(personQuery.createPersonQuery,[Id, 1, 1, personCategory, personname,'', edition, image, price, dateCreated, dateCurrent]);
};

const removePersonsByIdFromPostgreSqlDB = (id) => {
    return dbPool.query(personQuery.removePersonQuery,[id]);
};

module.exports = {
    fetchPersonsFromPostgreSqlDB,
    fetchPersonByIdFromPostgreSqlDB,
    removePersonsByIdFromPostgreSqlDB,
    createPersonsFromPostgreSqlDB,
    modifyPersonsByIdFromPostgreSqlDB
};