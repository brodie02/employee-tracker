const mysql = require('mysql2')
const cTable = require('console.table');

const {start} = require('../index')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'office_db'
    }
)

const viewDepartments = () => {
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

const viewEmployees = () => {
    const sql = `SELECT employee_1.id, employee_1.first_name, employee_1.last_name, title, name as department, salary, CONCAT(employee.first_name, SPACE(1), employee.last_name) AS manager
    FROM employee as employee_1
    JOIN role ON employee_1.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT OUTER JOIN employee ON employee_1.manager_id = employee.id;`

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data); 
        }
    })
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees
}