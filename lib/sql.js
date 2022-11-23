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

const viewRoles = () => {
    const sql = `SELECT role.id, title, name AS department, salary
    FROM role
    JOIN department ON role.department_id = department.id;`

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data); 
        }
    })
}

viewRoles()