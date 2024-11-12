const { Router } = require("express");
const bookPostgresqlController = require("../controllers/BookPostgresqlController");
const bookInMemoryController = require("../controllers/BookInMemoryController");
const bookMongodbController = require("../controllers/BookMongodbController");

const router = Router();
const CurrentConnectionStrings = process.env.DB;

if (CurrentConnectionStrings === 'POSTGRESQL') {
    router.get("/", bookPostgresqlController.getBooksPostgreSqlEndPoint);
    router.get("/:id", bookPostgresqlController.getBooksByIdPostgreSqlEndPoint);
    router.post("/", bookPostgresqlController.createBooksPostgreSqlEndPoint)
    router.delete("/:id", bookPostgresqlController.removeBooksByIdPostgreSqlEndPoint);
    router.put("/:id", bookPostgresqlController.modifyBooksByIdPostgreSqlEndPoint);
}
if (CurrentConnectionStrings === 'MONGODB') {
    router.get("/", bookMongodbController.getBooksMongoDBEndPoint);
    router.get("/:id", bookMongodbController.getBooksByIdMongoDBEndPoint);
    router.post("/", bookMongodbController.createBooksMongoDBEndPoint)
    router.delete("/:id", bookMongodbController.removeBooksByIdMongoDBEndPoint);
    router.put("/:id", bookMongodbController.modifyBooksByIdMongoDBEndPoint);
}
else {
    router.get("/", bookInMemoryController.getBooksInMemoryEndPoint);
    router.get("/:id", bookInMemoryController.getBooksByIdInMemoryEndPoint);
}

module.exports = router;