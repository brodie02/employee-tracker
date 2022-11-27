const inquirer = require('inquirer')

const {viewDepartments, viewRoles, viewEmployees, viewEmployeesByManager, viewManagers, viewEmployeesByDepartment, viewDepartmentSalaries} = require('./lib/view')
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
                return viewEmployees()

            case 'View Managers':
                return viewManagers()

            case 'View Employees By Manager ID':
                return viewEmployeesByManager()

            case 'View Employees By Department ID':
                return viewEmployeesByDepartment()

            case 'Add Employee':
                return addEmployee()

            case 'Update Employee Role':
                return updateEmployeeRole()

            case 'Update Employee Manager':
                return updateEmployeeManager()

            case 'Delete Employee':
                return deleteEmployee()

            case 'View All Roles':
                return viewRoles()

            case 'Add Role':
                return addRole()

            case 'Delete Role':
                return deleteRole()

            case 'View All Departments':
                return viewDepartments()

            // case 'View Department Salaries':
            //     return viewDepartmentSalaries()

            case 'Add Department':
                return addDepartment()

            case 'Delete Department':
                return deleteDepartment()

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

