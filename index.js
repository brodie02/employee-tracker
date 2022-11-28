const inquirer = require('inquirer')

const {viewDepartments, viewRoles, viewEmployees, viewEmployeesByManager, viewManagers, viewEmployeesByDepartment} = require('./lib/view')
const {addDepartment, addRole, addEmployee} = require('./lib/create')
const {updateEmployeeRole, updateEmployeeManager} = require('./lib/update')
const {deleteDepartment, deleteRole, deleteEmployee} = require('./lib/delete')

const start = () => {
    const questions = [
        {
            type: 'list',
            message: `What would you like to do?`,
            name: 'choice',
            choices: ['View All Employees', 'View Managers', 'View Employees By Manager ID', 'View Employees By Department ID', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 'Delete Employee', 'View All Roles', 'Add Role', 'Delete Role', 'View All Departments', 'Add Department', 'Delete Department'],
        },
    ]

    const check = (answer) => {
        switch (answer) {
            case 'View All Employees':
                return viewEmployees(start)

            case 'View Managers':
                return viewManagers(start)

            case 'View Employees By Manager ID':
                return viewEmployeesByManager(start)

            case 'View Employees By Department ID':
                return viewEmployeesByDepartment(start)

            case 'Add Employee':
                return addEmployee(start)

            case 'Update Employee Role':
                return updateEmployeeRole(start)

            case 'Update Employee Manager':
                return updateEmployeeManager(start)

            case 'Delete Employee':
                return deleteEmployee(start)

            case 'View All Roles':
                return viewRoles(start)

            case 'Add Role':
                return addRole(start)

            case 'Delete Role':
                return deleteRole(start)

            case 'View All Departments':
                return viewDepartments(start)

            case 'Add Department':
                return addDepartment(start)

            case 'Delete Department':
                return deleteDepartment(start)

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