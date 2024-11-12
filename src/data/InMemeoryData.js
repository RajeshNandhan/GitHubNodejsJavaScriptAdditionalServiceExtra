const crypto = require("crypto");

const getPersonsData = () => {
  return [
    { firstName : "Pete", lastName : "Sampras", personId : 8, rank : 1, category : "Tennis", dateOfBirth : new Date("11/11/1981"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date()},
    { firstName : "Rahul", lastName : "Dravid", personId : 9, rank : 2, category : "Cricket", dateOfBirth : new Date ("11/11/1981"), isPlayCricket : true , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Brain", lastName : "Lara", personId : 10, rank : 3, category : "Cricket", dateOfBirth : new Date ("11/11/1981"), isPlayCricket : true , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Roger", lastName : "Federer", personId : 11, rank : 4, category : "Tennis", dateOfBirth : new Date ("11/11/1981"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Diego", lastName : "Maradona", personId : 12, rank : 5, category : "Socker", dateOfBirth : new Date ("11/11/1981"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Michael", lastName : "Schumacher", personId : 13, rank : 6, category : "F1", dateOfBirth : new Date ("11/11/1981"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Michelle ", lastName : "Obama", personId : 1, rank : 1, category : "Lawyer", dateOfBirth : new Date ("17 January 1964"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Khaled", lastName : "Hosseini", personId : 2, rank : 2, category : "Physician", dateOfBirth : new Date ("4 March 1965"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Johnny", lastName : "B. Laughing", personId : 3, rank : 3, category : "", dateOfBirth : new Date ("11/11/1900"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Fredrik ", lastName : "Backman", personId : 4, rank : 4, category : "Columnist", dateOfBirth : new Date ("2 June 1981"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Chetan", lastName : "Bhagat", personId : 5, rank : 5, category : "Columnist", dateOfBirth : new Date ("22 April 1974"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Sheryl", lastName : "Sandberg", personId : 6, rank : 6, category : "Billionaire technology executive", dateOfBirth : new Date ("28 August 1969"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "Periyar", lastName : "EVR", personId : 7, rank : 6, category : "Social Refiner", dateOfBirth : new Date ("17 September 1879"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
   
    { firstName : "first Name1", lastName : "lastName 1", personId : 14, rank : 666, category : "category 1", dateOfBirth : new Date ("17 September 1879"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "first Name2", lastName : "lastName 2", personId : 15, rank : 666, category : "category 2", dateOfBirth : new Date ("17 September 1879"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { firstName : "first Name3", lastName : "lastName 3", personId : 16, rank : 666, category : "category 3", dateOfBirth : new Date ("17 September 1879"), isPlayCricket : false , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
  ];
};

const getBooksData = () => {
  return [
    { bookId : 1, personId : 1, bookCategory : "Adventure", bookName : "Becoming", edition : "Kindle", price : 649, image : "/assets/img/150.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 2, personId : 4, bookCategory : "History", bookName : "A Thousand Splendid Suns", edition : "Paperback", price : 349, image : "/assets/img/150.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 3, personId : 6, bookCategory : "Humour", bookName : "100+ Knock Knock Jokes", edition : "Paperback", price : 479, image : "/assets/img/150.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 4, personId : 7, bookCategory : "Humour", bookName : "A Man Called Ove", edition : "Paperback", price : 270, image : "/assets/img/150.png", id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 5, personId : 8, bookCategory : "Crime", bookName : "The Girl in Room 105", edition : "Paperback", price : 89, image : "/assets/img/150.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 6, personId : 2, bookCategory : "History", bookName : "Lean In: Women, Work, and the Will to Lead", edition : "Paperback", price : 370, image : "/assets/img/150.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 7, personId : 3, bookCategory : "History", bookName : "Kudiarasu 1925 Periyarin Ezhuthum Pechum", edition : "Kindle", price : 99, image : "/assets/img/150.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },

    { bookId : 8, personId : 14, bookCategory : "TestCategory", bookName : "Test Book 1", edition : "TestEdition1", price : 99, image : "/assets/img/TestEdition1.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 9, personId : 14, bookCategory : "TestCategory", bookName : "Test Book 2", edition : "TestEdition2", price : 99, image : "/assets/img/TestEdition2.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
    { bookId : 10, personId : 14, bookCategory : "TestCategory", bookName : "Test Book 3", edition : "TestEdition3", price : 99, image : "/assets/img/TestEdition3.png" , id: crypto.randomBytes(16).toString("hex"), dateCreated: new Date() },
  ];
};

module.exports = {
  getPersonsData,
  getBooksData
};
