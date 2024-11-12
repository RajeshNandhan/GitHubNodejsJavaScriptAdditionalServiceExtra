const crypto = require("crypto");
const {fetchPersonsFromPostgreSqlDB, fetchPersonByIdFromPostgreSqlDB, removePersonsByIdFromPostgreSqlDB,
    createPersonsFromPostgreSqlDB, modifyPersonsByIdFromPostgreSqlDB} = require('../repository/PersonRepositoryPostgreSql');

const getPersonsPostgreSqlEndPoint = (req,res) => {
    fetchPersonsFromPostgreSqlDB()
    .then(result => {
        res.status(200).json(result.rows); // Respond with the fetched persons
    })
    .catch(error => {
        console.error('Error fetching persons:', error); // Log the error
        res.status(500).send('Internal Server Error'); // Send a generic error message
    });
};

const getPersonByIdPostgreSqlEndPoint = (req,res) => {

    const id = parseInt(req.params.id);

    fetchPersonByIdFromPostgreSqlDB(id)
        .then(result => {
            if (result.rows.length === 0) {
                return res.status(404).send('Person not found'); // Handle case where no Person is found
            }
            res.status(200).json(result.rows[0]); // Return the single Person
        })
        .catch(error => {
            console.error('Error fetching Person by ID:', error); // Log the error
            res.status(500).send('Internal Server Error'); // Send a generic error message
        });
};

const modifyPersonsByIdPostgreSqlEndPoint = (req,res) => {

    const id = parseInt(req.params.id);
    const {Id, personId, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, dateCreated, dateCurrent} = req.body;

    modifyPersonsByIdFromPostgreSqlDB(id, personId, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, dateCreated, dateCurrent)
    .then(result => {
        res.status(200).json(result.rowCount.toString());
    })
    .catch(error => {
        console.error('Error modifying person:', error);
        res.status(500).send('Internal Server Error');
    });
};

const createPersonsPostgreSqlEndPoint = (req,res) => {
    const guid = crypto.randomBytes(16).toString("hex");
    const {personCategory, personname, edition, image, price} = req.body;

    createPersonsFromPostgreSqlDB(guid, 1, 1, personCategory, personname,'', edition, image, price,'2024-04-04','2024-04-04')
    .then(() => {
        res.status(201).json('Person created successfully');
    })
    .catch(error => {
        console.error('Error creating person:', error);
        res.status(500).send('Internal Server Error');
    });
};

const removePersonsByIdPostgreSqlEndPoint = (req,res) => {
    const id = parseInt(req.params.id);
    const personExistErrorMessage = null;
    const personExistErrorMessageCode = null;
    fetchPersonByIdFromPostgreSqlDB(id).then(result => {
        if(result.rows.length === 0){
            personExistErrorMessage = 'Person does not exist in the database';
            personExistErrorMessageCode = 404;
        }
    })
    .catch(error => {
        console.error('Error removing person:', error);
        personExistErrorMessage = 'Internal Server Error';
        personExistErrorMessageCode = 500
    });

    if(!personExistErrorMessage){
        removePersonsByIdFromPostgreSqlDB(id)
        .then((result) => {
            console.log(result)
            res.status(200).send(result.rowCount.toString());
        })
        .catch(error => {
            console.error('Error removing person:', error);
            res.status(500).send('Internal Server Error');
        });
    } else{
        res.status(personExistErrorMessageCode).send(personExistErrorMessage);
    }
};

module.exports = {
    getPersonsPostgreSqlEndPoint,
    getPersonByIdPostgreSqlEndPoint,
    removePersonsByIdPostgreSqlEndPoint,
    createPersonsPostgreSqlEndPoint,
    modifyPersonsByIdPostgreSqlEndPoint
};