const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'office_db'
    }
)
const deleteDepartment = () => {
    const questions = [
        {
            type: 'number',
            message: `What is the ID of the department you would like to delete?`,
            name: 'department',
        },
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `DELETE FROM department
            WHERE id = ${data.department}`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                    console.log(`Department deleted from database`);
                }
            })
        })
}

const deleteRole = () => {
    const questions = [
        {
            type: 'number',
            message: `What is the ID of the role you would like to delete?`,
            name: 'role',
        },
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `DELETE FROM role
            WHERE id = ${data.role}`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                    console.log(`Role deleted from database`);
                }
            })
        })
}

const deleteEmployee = () => {
    const questions = [
        {
            type: 'number',
            message: `What is the ID of the employee you would like to delete?`,
            name: 'employee',
        },
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `DELETE FROM employee
            WHERE id = ${data.employee}`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                    console.log(`Employee deleted from database`);
                }
            })
        })
}


module.exports = {
    deleteDepartment,
    deleteRole,
    deleteEmployee
}