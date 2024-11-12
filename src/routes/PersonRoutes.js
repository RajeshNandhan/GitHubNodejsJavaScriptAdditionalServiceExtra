const { Router } = require("express");
const personPostgresqlController = require("../controllers/PersonPostgresqlController");
const personInMemoryController = require("../controllers/PersonInMemoryController");
const personMongodbController = require("../controllers/PersonMongodbController")
const router = Router();
const CurrentConnectionStrings = process.env.DB;

if (CurrentConnectionStrings === 'POSTGRESQL') {
    router.get("/", personPostgresqlController.getPersonsPostgreSqlEndPoint);
    router.get("/:id", personPostgresqlController.getPersonByIdPostgreSqlEndPoint);
    router.post("/", personPostgresqlController.createPersonsPostgreSqlEndPoint);
    router.delete("/:id", personPostgresqlController.removePersonsByIdPostgreSqlEndPoint);
    router.put("/:id", personPostgresqlController.modifyPersonsByIdPostgreSqlEndPoint);
}
if(CurrentConnectionStrings === 'MONGODB'){
    router.get("/", personMongodbController.getPersonsMongoDBEndPoint);
    router.get("/:id", personMongodbController.getPersonsByIdMongoDBEndPoint);
    router.post("/", personMongodbController.createPersonsMongoDBEndPoint);
    router.delete("/:id", personMongodbController.removePersonsByIdMongoDBEndPoint);
    router.put("/:id", personMongodbController.modifyPersonsByIdMongoDBEndPoint);
} 
else {
    router.get("/", personInMemoryController.getPersonsInMemoryEndPoint);
    router.get("/:id", personInMemoryController.getPersonsByIdInMemoryEndPoint);
}

module.exports = router;