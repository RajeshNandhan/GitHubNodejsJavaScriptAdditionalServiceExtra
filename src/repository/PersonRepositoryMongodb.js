const { mongoose } = require("mongoose");
const { PersonModel } = require("../model/person-schema.js");
const { Person } = require('../model/person.js')

const fetchPersonsFromMongoDB = async () => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

    var personsResult = [];

    await PersonModel.find()
        .exec()
        .then(doc => {
            if(doc) {
                doc.forEach(personDoc => {
                    const person = new Person();
                    person.id = personDoc._id;
                    person.personId = personDoc.personId;
                    person.firstName = personDoc.firstName;
                    person.lastName = personDoc.lastName;
                    person.rank = personDoc.rank;
                    person.category = personDoc.category;
                    person.dateOfBirth = personDoc.dateOfBirth;
                    person.isPlayCricket = personDoc.isPlayCricket;
                    person.dateCreated = personDoc.dateCreated;
                    person.dateCurrent = new Date();

                    personsResult.push(person);
                });
                console.log('--> Number of Persons - ' + personsResult.length);
            }
        })
        .catch(err => {
            console.log(err);
            personsResult = null;
        })
        .finally(() => {
            mongoose.connection.close();
            console.log('mongoose connection closed');
        });

        return personsResult;
};

const fetchPersonByIdFromMongoDB = async (id) => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    var person;
    const query = { personId: id };

    await PersonModel.findOne(query)
        .exec()
        .then(personDoc => {
            if(personDoc)
            {
                person = new Person();
                person.id = personDoc._id;
                person.personId = personDoc.personId;
                person.firstName = personDoc.firstName;
                person.lastName = personDoc.lastName;
                person.rank = personDoc.rank;
                person.category = personDoc.category;
                person.dateOfBirth = personDoc.dateOfBirth;
                person.isPlayCricket = personDoc.isPlayCricket;
                person.dateCreated = personDoc.dateCreated;
                person.dateCurrent = new Date();

                console.log('--> Person Id - ' + person.id);
            } else {
                person = null;
            }
        })
        .catch(err => {
            console.log(err);
            person = null;
        })
        .finally(() => {
            mongoose.connection.close();
            console.log('mongoose connection closed');
        });

    return person;
};

const modifyPersonByIdInMongoDB = async (Id, personId, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, dateCreated, dateCurrent) => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    let updatedRowsCount = 0;

    var personDoc = {
        personId: personId,
        firstName: firstName,
        lastName: lastName,
        rank: rank,
        category: category,
        dateOfBirth: dateOfBirth,
        isPlayCricket: isPlayCricket,
        dateCreated: dateCreated,
        dateCurrent: dateCurrent
    };

    const doc = await PersonModel.findOne({
        personId: personId
    });

    if (doc !== null) {
        await doc.updateOne(personDoc)
            .then(result => {
                updatedRowsCount = result.modifiedCount;
                console.log('--> No of Updated Person - ' + updatedRowsCount);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                mongoose.connection.close();
                console.log('mongoose connection closed');
            });
    } else {
        console.log('--> Error - Person Not FOUND');
    }

    return updatedRowsCount;
};

const createPersonInMongoDB = async (personId, firstName, lastName, rank, category, dateOfBirth, isPlayCricket, dateCreated, dateCurrent) => {
   
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    var personResult;

    var personDoc = {
        personId: personId,
        firstName: firstName,
        lastName: lastName,
        rank: rank,
        category: category,
        dateOfBirth: dateOfBirth,
        isPlayCricket: isPlayCricket,
        dateCreated: dateCreated,
        dateCurrent: dateCurrent
    };

    personDoc._id = new mongoose.Types.ObjectId();

    await PersonModel.create(personDoc)
        .then(result => {
            personDoc.id = personDoc._id;
            personResult = personDoc;
            console.log('--> Person Created with Id - ' + result);
            console.log(personResult)
        })
        .catch(err => {
            console.log(err);
            personResult = null;
        })
        .finally(() => {
            mongoose.connection.close();
            console.log('mongoose connection closed');
        });

    return personResult;
};

const removePersonByIdInMongoDB = async (id) => {
    const connectionString = 'mongodb://localhost:27017/additionaldatabase';

    await mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    const query = { personId: id };

    let deletedRowsCount = 0;

    await PersonModel.deleteOne(query)
    .exec()
    .then(personDoc => {
        console.log(personDoc);
        deletedRowsCount = personDoc.deletedCount;
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
        console.log('mongoose connection closed');
    });

    return deletedRowsCount;
};

module.exports = {
    fetchPersonsFromMongoDB,
    fetchPersonByIdFromMongoDB,
    modifyPersonByIdInMongoDB,
    createPersonInMongoDB,
    removePersonByIdInMongoDB
};