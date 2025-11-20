export abstract class Employee {
	constructor(public name: string) {}
	abstract calculateSalary(): number;
}

export class EmployeePartTime extends Employee {
	salary = 3000;

	constructor(name: string) {
		super(name);
	}

	calculateSalary(): number {
		return this.salary;
	}
}

export class EmployeeIntern extends Employee {
	salary = 1000;

	constructor(name: string) {
		super(name);
	}

	calculateSalary(): number {
		return this.salary;
	}
}

export class EmployeeFullTime extends Employee {
	salary = 5000;

	constructor(name: string) {
		super(name);
	}

	calculateSalary(): number {
		return this.salary;
	}
}
