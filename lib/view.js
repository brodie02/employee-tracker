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

const viewDepartments = (start) => {
    const sql = 'SELECT * FROM department;'

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data);
           start()
        }
    })
}

const viewRoles = (start) => {
    const sql = `SELECT role.id, title, name AS department, salary
    FROM role
    JOIN department ON role.department_id = department.id;`

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data);
           start() 
        }
    })
}

const viewEmployees = (start) => {
    const sql = `SELECT employee_1.id, employee_1.first_name, employee_1.last_name, title, name as department, salary, CONCAT(employee.first_name, SPACE(1), employee.last_name) AS manager
    FROM employee as employee_1
    JOIN role ON employee_1.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT OUTER JOIN employee ON employee_1.manager_id = employee.id
    ORDER BY name DESC;`

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data); 
           start()
        }
    })
}

const viewEmployeesByManager = (start) => {
    const questions = [
        {
            type: 'number',
            message: `What is the manager's ID?`,
            name: 'manager'
        }
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `SELECT employee_1.id, employee_1.first_name, employee_1.last_name, title, name as department, salary, CONCAT(employee.first_name, SPACE(1), employee.last_name) AS manager
                FROM employee as employee_1
                JOIN role ON employee_1.role_id = role.id
                JOIN department ON role.department_id = department.id
                LEFT OUTER JOIN employee ON employee_1.manager_id = employee.id
                WHERE employee_1.manager_id = ${data.manager}
                ORDER BY manager DESC;`

            db.query(sql, (err, data) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                console.table(data);
                start() 
                }
            })   
        })
}

const viewManagers = (start) => {
    const sql = `SELECT employee_1.id, employee_1.first_name, employee_1.last_name, title, name as department, salary, CONCAT(employee.first_name, SPACE(1), employee.last_name) AS manager
    FROM employee as employee_1
    JOIN role ON employee_1.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT OUTER JOIN employee ON employee_1.manager_id = employee.id
    WHERE employee_1.manager_id IS NULL
    ORDER BY manager DESC;`

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data); 
           start()
        }
    })
}

const viewEmployeesByDepartment = (start) => {
    const questions = [
        {
            type: 'number',
            message: `What is the department's ID?`,
            name: 'department'
        }
    ]

    inquirer
        .prompt(questions)
        .then((data) => {
            const sql = `SELECT employee_1.id, employee_1.first_name, employee_1.last_name, title, name as department, salary, CONCAT(employee.first_name, SPACE(1), employee.last_name) AS manager
            FROM employee as employee_1
            JOIN role ON employee_1.role_id = role.id
            JOIN department ON role.department_id = department.id
            LEFT OUTER JOIN employee ON employee_1.manager_id = employee.id
            WHERE role.department_id = ${data.department};`

            db.query(sql, (err, data) => {
                if (err) {
                    console.log('Something went wrong!');
                } else {
                console.table(data); 
                start()
                }
            })   
        })
}

const viewDepartmentSalaries = (start) => {
    const sql = `SELECT department.id, department.name, SUM(salary) AS total
    FROM role
    JOIN department on department.id = role.department_id
    GROUP BY department_id;`

    db.query(sql, (err, data) => {
        if (err) {
            console.log('Something went wrong!');
        } else {
           console.table(data); 
           start()
        }
    })
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    viewEmployeesByManager,
    viewManagers,
    viewEmployeesByDepartment,
    viewDepartmentSalaries
}