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

const addDepartment = (start) => {
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
                   console.log(`Added ${data.department} to the database`); 
                   start()
                }
            })
        })
}

const addRole = (start) => {
    const questions = [
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'role',
        },
        {
            type: 'number',
            message: 'What is the salary of the role?',
            name: 'salary',
        },
        {
            type: 'number',
            message: `What is the role's department ID?`,
            name: 'department',
        },
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `INSERT INTO role (title, salary, department_id)
            VALUES ('${data.role}', ${data.salary}, '${data.department}')`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                   console.log(`Added ${data.role} to the database`); 
                   start()
                }
            })
        })
}

const addEmployee = (start) => {
    const questions = [
        {
            type: 'input',
            message: `What is the employee's first name?`,
            name: 'first',
        },
        {
            type: 'input',
            message: `What is the employee's last name?`,
            name: 'last',
        },
        {
            type: 'number',
            message: `What is the employee's role ID?`,
            name: 'role',
        },
        {
            type: 'list',
            message: `Does the employee have a manager?`,
            name: 'confirm',
            choices: ['Yes', 'No'],
        },   
        {
            type: 'number',
            message: `What is the manager's ID?`,
            name: 'manager',
            when(answers) {
                return answers.confirm === 'Yes'
            },
        },
    ]

    const check = (answer) => {
        if (answer === undefined) {
            return null
        } else {
            return answer
        }
    }

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ('${data.first}', '${data.last}', ${data.role}, ${check(data.manager)})`

            db.query(sql, (err, tbl) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                   console.log(`Added ${data.first} ${data.last} to the database`); 
                   start()
                }
            })
        })
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
}