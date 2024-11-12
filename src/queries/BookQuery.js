const getBooksQuery = 'SELECT  * FROM "Books"';
const getBooksByIdQuery = 'SELECT * FROM "Books" WHERE "bookId" = $1';
const createBooksQuery='INSERT INTO "Books"("Id", "bookId", "personId", "bookCategory", "bookName", "personName", edition, image, price, "dateCreated", "dateCurrent")'+
	'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
const modifyBooksQuery='UPDATE "Books" SET "bookCategory"=$1, "bookName"=$2, edition=$3, image=$4, price=$5 WHERE "bookId" = $6';
const removeBooksQuery='DELETE FROM "Books" WHERE "bookId" = $1';

module.exports = {
    getBooksQuery,
    getBooksByIdQuery,
    createBooksQuery,
    modifyBooksQuery,
    removeBooksQuery
};