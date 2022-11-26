const inquirer = require('inquirer')

const {viewDepartments, viewRoles, viewEmployees} = require('./lib/view')
const {addDepartment, addRole, addEmployee} = require('./lib/create')
const {updateEmployeeRole, updateEmployeeManager} = require('./lib/update')

const start = () => {
    const questions = [
        {
            type: 'list',
            message: `What would you like to do?`,
            name: 'choice',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        },
    ]

    const check = (answer) => {
        switch (answer) {
            case 'View All Employees':
                return viewEmployees()

            case 'Add Employee':
                return addEmployee()

            case 'Update Employee Role':
                return updateEmployeeRole()

            case 'Update Employee Manager':
                return updateEmployeeManager()

            case 'View All Roles':
                return viewRoles()

            case 'Add Role':
                return addRole()

            case 'View All Departments':
                return viewDepartments()

            case 'Add Department':
                return addDepartment()

            default:
                return console.log("Something went wrong!");
        }
    }

    inquirer
        .prompt(questions)
        .then((data) => {
            check(data.choice);
        })
}

start()

