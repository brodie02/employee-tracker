-- SELECT *
-- FROM employee
-- JOIN role ON employee.role_id = role.id;

SELECT role.id, title, name, salary
FROM role
JOIN department ON role.department_id = department.id;