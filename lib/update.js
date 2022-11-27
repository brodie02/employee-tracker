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

const updateEmployeeRole = (start) => {
    const questions = [
        {
            type: 'number',
            message: `What is the ID of the employee you would like to update?`,
            name: 'employee',
        },
        {
            type: 'number',
            message: `What is the ID of the role you would like to assign to the selected employee?`,
            name: 'role',
        },
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `UPDATE employee
            SET role_id = ${data.role}
            WHERE id = ${data.employee}`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                   console.log(`Updated employee's role`); 
                   start()
                }
            })
        })
}

const updateEmployeeManager = (start) => {
    const questions = [
        {
            type: 'number',
            message: `What is the ID of the employee you would like to update?`,
            name: 'employee',
        },
        {
            type: 'number',
            message: `What is the ID of the manager you would like to assign to the selected employee?`,
            name: 'manager',
        },
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `UPDATE employee
            SET manager_id = ${data.manager}
            WHERE id = ${data.employee}`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                   console.log(`Updated employee's manager`); 
                   start()
                }
            })
        })
}

module.exports = {
    updateEmployeeRole,
    updateEmployeeManager
}