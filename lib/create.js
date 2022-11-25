const mysql = require('mysql2')
const cTable = require('console.table');
const inquirer = require('inquirer')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'office_db'
    }
)

const createDepartment = () => {
    const questions = [
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department',
        }
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `INSERT INTO department (name)
            VALUES ('${data.department}')`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                   console.table(`Added ${data.department} to the database`); 
                }
            })
        })
}

module.exports = {
    createDepartment,
}