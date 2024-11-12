const sql = require('mssql');

// Configuration object for your database connection
const config = {
    user: 'your_username',          // SQL Server username
    password: 'your_password',      // SQL Server password
    server: 'your_server',          // Server name or IP address
    database: 'your_database',      // Database name
    options: {
        encrypt: true,              // Use this if you're on Azure
        trustServerCertificate: true // Change to false in production
    }
};

async function connectToDatabase() {
    try {
        // Connect to the database
        let pool = await sql.connect(config);
        console.log('Connected to SQL Server');

        // Example query
        let result = await pool.request().query('SELECT * FROM your_table');
        console.log(result.recordset); // Display the results

        // Close the connection
        await pool.close();
    } catch (err) {
        console.error('SQL error', err);
    }
}

// Call the function to connect
connectToDatabase();
