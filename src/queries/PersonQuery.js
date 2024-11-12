const getPersonsQuery = 'SELECT "Id", "personId", "firstName", "lastName", rank, category, "dateOfBirth", "isPlayCricket" FROM "Persons"';
const getPersonByIdQuery = 'SELECT "Id", "personId", "firstName", "lastName", rank, category, "dateOfBirth", "isPlayCricket" FROM "Persons" WHERE "personId" = $1';
const createPersonQuery = 'INSERT INTO "Persons"("Id", "personId", "firstName", "lastName", rank, category, "dateOfBirth", "isPlayCricket", "dateCreated", "dateCurrent")' +
	'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);';
const modifyPersonQuery='UPDATE "Persons" SET "firstName"=$1, "lastName"=$2, rank=$3, category=$4, "dateOfBirth"=$5, "isPlayCricket"=$6 WHERE "personId" = $7';
const removePersonQuery='DELETE FROM "Persons" WHERE "personId" = $1';

module.exports = {
    getPersonsQuery,
    getPersonByIdQuery,
    createPersonQuery,
    modifyPersonQuery,
    removePersonQuery
};







