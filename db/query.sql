-- SELECT *
-- FROM employee
-- JOIN role ON employee.role_id = role.id;

-- SELECT role.id, title, name, salary
-- FROM role
-- JOIN department ON role.department_id = department.id;

-- SELECT employee_1.id, employee_1.first_name, employee_1.last_name, title, name as department, salary, CONCAT(employee.first_name, SPACE(1), employee.last_name) AS manager
-- FROM employee as employee_1
-- JOIN role ON employee_1.role_id = role.id
-- JOIN department ON role.department_id = department.id
-- LEFT OUTER JOIN employee ON employee_1.manager_id = employee.id
-- ORDER BY name DESC;

-- UPDATE employee
-- SET role_id = 2
-- WHERE id = 4

-- SELECT employee_1.id, employee_1.first_name, employee_1.last_name, title, name as department, salary, CONCAT(employee.first_name, SPACE(1), employee.last_name) AS manager
-- FROM employee as employee_1
-- JOIN role ON employee_1.role_id = role.id
-- JOIN department ON role.department_id = department.id
-- LEFT OUTER JOIN employee ON employee_1.manager_id = employee.id;

-- SELECT department.id, name as department, SUM(salary)
-- FROM department
-- JOIN role ON role.department_id = department.id

SELECT department.name, SUM(salary) AS total
FROM role
JOIN department on department.id = role.department_id
GROUP BY department_id;
