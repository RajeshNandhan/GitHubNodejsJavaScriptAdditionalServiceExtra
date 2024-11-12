const {getPersonsData} = require("../data/InMemeoryData");

const getPersonFromInMemory = () => {
    return getPersonsData();
};

const getPersonByIdFromInMemory = (id) => {
    let persons =  getPersonsData();
    let personindex = persons.findIndex(person => person.personId === id);
    return persons[personindex];
};  

module.exports = {
    getPersonFromInMemory,
    getPersonByIdFromInMemory,
};