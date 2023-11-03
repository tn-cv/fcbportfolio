const express = require('express');
const app = express();
const mysql = require('mysql');

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'your-host',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database',
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + db.threadId);
});

// Set up your Node.js route to handle database queries
app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM your_table'; // Replace with your SQL query

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
