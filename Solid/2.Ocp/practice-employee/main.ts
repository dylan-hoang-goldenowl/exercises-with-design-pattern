import { EmployeeFullTime, EmployeeIntern } from "./models";

const fullTimeEmployee = new EmployeeFullTime("Alice");
console.log(
	`${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`
);

const internEmployee = new EmployeeIntern("Bob");
console.log(
	`${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`
);
