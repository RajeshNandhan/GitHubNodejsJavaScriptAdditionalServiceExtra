const {fetchPersonsFromMongoDB, fetchPersonByIdFromMongoDB, modifyPersonByIdInMongoDB,
    createPersonInMongoDB, removePersonByIdInMongoDB} = require('../repository/PersonRepositoryMongodb');

const getPersonsMongoDBEndPoint = async (req, res) => {
    await fetchPersonsFromMongoDB()
    .then(result => {
        res.status(200).json(result); // Respond with the fetched persons
    })
    .catch(error => {
        console.error('Error fetching persons:', error); // Log the error
        res.status(500).send('Internal Server Error'); // Send a generic error message
    });
};

const getPersonsByIdMongoDBEndPoint = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    await fetchPersonByIdFromMongoDB(id)
        .then(result => {
            if (!result) {
                return res.status(404).send('Person not found'); // Handle case where no person is found
            }
            res.status(200).json(result); // Return the single person
        })
        .catch(error => {
            console.error('Error fetching person by ID:', error); // Log the error
            res.status(500).send('Internal Server Error'); // Send a generic error message
        });
};

const modifyPersonsByIdMongoDBEndPoint = async (req, res) => {
    const id = parseInt(req.params.id);
    const {Id, personId, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, dateCreated, dateCurrent} = req.body;

    await modifyPersonByIdInMongoDB(Id, personId, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, dateCreated, dateCurrent)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            console.error('Error modifying person:', error);
            res.status(500).send('Internal Server Error');
        });
};

const createPersonsMongoDBEndPoint = async (req, res) => {
    const {firstName, lastName, rank, category, dateOfBirth, isPlayCricket} = req.body;

    await createPersonInMongoDB(1, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, '2024-04-04', '2024-04-04')
        .then(() => {
            res.status(201).json('Person created successfully');
        })
        .catch(error => {
            console.error('Error creating person:', error);
            res.status(500).send('Internal Server Error');
        });
};

const removePersonsByIdMongoDBEndPoint = async (req, res) => {
    const id = parseInt(req.params.id);
    let personExistErrorMessage = null;
    let personExistErrorMessageCode = null;

    await fetchPersonByIdFromMongoDB(id).then(result => {
        if(!result){
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
        await removePersonByIdInMongoDB(id)
            .then((result) => {
                console.log(result)
                res.status(200).send(result.toString());
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
    getPersonsMongoDBEndPoint,
    getPersonsByIdMongoDBEndPoint,
    removePersonsByIdMongoDBEndPoint,
    createPersonsMongoDBEndPoint,
    modifyPersonsByIdMongoDBEndPoint
};