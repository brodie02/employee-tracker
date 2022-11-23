const mysql = require('mysql2')
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'office_db'
    }
)


const viewDepart = () => {
    const sql = 'SELECT * FROM department;'

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data); 
        }
    })
}

viewDepart()