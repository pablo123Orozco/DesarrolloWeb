const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto si tu usuario de MySQL es diferente
    password: '', // Añade tu contraseña si tienes una configurada
    database: 'sucursales', // Nombre de la base de datos
    port: 3306 // Cambia esto si tu MySQL usa otro puerto
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;
