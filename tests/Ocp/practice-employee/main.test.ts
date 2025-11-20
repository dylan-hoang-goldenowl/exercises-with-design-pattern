import {
	Employee,
	EmployeeFullTime,
	EmployeePartTime,
	EmployeeIntern,
} from "../../../Solid/2.Ocp/practice-employee/models";

describe("EmployeeFullTime", () => {
	let employee: EmployeeFullTime;

	beforeEach(() => {
		employee = new EmployeeFullTime("Alice");
	});

	test("should create full-time employee with name", () => {
		expect(employee.name).toBe("Alice");
	});

	test("should calculate salary correctly", () => {
		expect(employee.calculateSalary()).toBe(5000);
	});

	test("should have correct salary property", () => {
		expect(employee.salary).toBe(5000);
	});

	test("should extend Employee abstract class", () => {
		expect(employee).toBeInstanceOf(Employee);
	});

	test("should create multiple employees with different names", () => {
		const employee1 = new EmployeeFullTime("John");
		const employee2 = new EmployeeFullTime("Jane");
		expect(employee1.name).toBe("John");
		expect(employee2.name).toBe("Jane");
		expect(employee1.calculateSalary()).toBe(5000);
		expect(employee2.calculateSalary()).toBe(5000);
	});
});

describe("EmployeePartTime", () => {
	let employee: EmployeePartTime;

	beforeEach(() => {
		employee = new EmployeePartTime("Bob");
	});

	test("should create part-time employee with name", () => {
		expect(employee.name).toBe("Bob");
	});

	test("should calculate salary correctly", () => {
		expect(employee.calculateSalary()).toBe(3000);
	});

	test("should have correct salary property", () => {
		expect(employee.salary).toBe(3000);
	});

	test("should extend Employee abstract class", () => {
		expect(employee).toBeInstanceOf(Employee);
	});

	test("should create multiple employees with different names", () => {
		const employee1 = new EmployeePartTime("Sarah");
		const employee2 = new EmployeePartTime("Mike");
		expect(employee1.name).toBe("Sarah");
		expect(employee2.name).toBe("Mike");
		expect(employee1.calculateSalary()).toBe(3000);
		expect(employee2.calculateSalary()).toBe(3000);
	});
});

describe("EmployeeIntern", () => {
	let employee: EmployeeIntern;

	beforeEach(() => {
		employee = new EmployeeIntern("Charlie");
	});

	test("should create intern employee with name", () => {
		expect(employee.name).toBe("Charlie");
	});

	test("should calculate salary correctly", () => {
		expect(employee.calculateSalary()).toBe(1000);
	});

	test("should have correct salary property", () => {
		expect(employee.salary).toBe(1000);
	});

	test("should extend Employee abstract class", () => {
		expect(employee).toBeInstanceOf(Employee);
	});

	test("should create multiple employees with different names", () => {
		const employee1 = new EmployeeIntern("Tom");
		const employee2 = new EmployeeIntern("Jerry");
		expect(employee1.name).toBe("Tom");
		expect(employee2.name).toBe("Jerry");
		expect(employee1.calculateSalary()).toBe(1000);
		expect(employee2.calculateSalary()).toBe(1000);
	});
});

describe("Employee Polymorphism", () => {
	test("should work with different employee types through base class", () => {
		const employees: Employee[] = [
			new EmployeeFullTime("Alice"),
			new EmployeePartTime("Bob"),
			new EmployeeIntern("Charlie"),
		];

		expect(employees[0].calculateSalary()).toBe(5000);
		expect(employees[1].calculateSalary()).toBe(3000);
		expect(employees[2].calculateSalary()).toBe(1000);
	});

	test("should calculate total payroll for all employees", () => {
		const employees: Employee[] = [
			new EmployeeFullTime("Alice"),
			new EmployeeFullTime("David"),
			new EmployeePartTime("Bob"),
			new EmployeeIntern("Charlie"),
		];

		const totalPayroll = employees.reduce(
			(sum, emp) => sum + emp.calculateSalary(),
			0
		);
		expect(totalPayroll).toBe(14000); // 5000 + 5000 + 3000 + 1000
	});

	test("should maintain correct salary for each employee type", () => {
		const fullTime = new EmployeeFullTime("Test1");
		const partTime = new EmployeePartTime("Test2");
		const intern = new EmployeeIntern("Test3");

		expect(fullTime.calculateSalary()).toBeGreaterThan(
			partTime.calculateSalary()
		);
		expect(partTime.calculateSalary()).toBeGreaterThan(
			intern.calculateSalary()
		);
	});
});
