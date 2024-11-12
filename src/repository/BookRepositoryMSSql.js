// const sql = require('mssql');

// // Configuration object for your database connection
// // const config = {
// //     user: 'your_username',          // SQL Server username
// //     password: 'your_password',      // SQL Server password
// //     server: '(localdb)\\mssqllocaldb',          // Server name or IP address
// //     database: 'your_database',      // Database name
// //     options: {
// //         encrypt: true,              // Use this if you're on Azure
// //         trustServerCertificate: true // Change to false in production
// //     }
// // };

// // Configuration object for your database connection
// let config = {
//     server: 'localhost\\MSSQLLocalDB',          // Server name or IP address
//     database: 'additionaldatabase',      // Database name
//     //server: 'localhost',
//     port: 1433, // Default SQL Server port
//     //pipeName: 'np:\\\\.\pipe\\LOCALDB#5760AFCB\\tsql\\query',
//     options: {
//         trustedConnection: true,     // Use Windows Authentication
//         encrypt: false,               // Set to true if using Azure
//         connectTimeout: 60000,
//         requestTimeout: 60000, 
//     }
// };

// const bookQuery = require('../queries/BookQuery');


// async function connectToDatabase() {
//     try {
//         debugger
//         // Connect to the database
//         let connection = new sql.ConnectionPool(config);
//         let req = new sql.Request(connection);

//         connection.connect((err)=>{
//             debugger
//             if(err){
//             console.error('SQL error', err);
//             connection.close()
//             } else{
//                 req.query(bookQuery.getBooksQuery,(err,data)=>{
//                     debugger
//                     if(err){
//                         console.error('SQL error', err);
//                         }
//                         else{
//                             console.log(data)
//                         }
//                         connection.close()
//                 });
//             }

            
//         })

//         // let pool = await sql.connect(config);
//         // console.log('Connected to SQL Server');

//         // // Example query
//         // let result = await pool.request().query(bookQuery.getBooksQuery);
//         // console.log(result.recordset); // Display the results

//         // // Close the connection
//         // await pool.close();
//     } catch (err) {
//         console.error('SQL error', err);
//     }
// }

// module.exports = {
//     connectToDatabase
// };


// if(CurrentConnectionStrings === 'MSSQL')
//     { connectToDatabase()
//         .then(result => {
//             res.status(200).json(result); // Respond with the fetched books
//         })
//         .catch(error => {
//             console.error('Error fetching books:', error); // Log the error
//             res.status(500).send('Internal Server Error'); // Send a generic error message
//         });
//     }