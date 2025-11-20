import { Shape, Circle, Rectangle, Square, Triangle } from "../../../Solid/2.Ocp/pratice-shape/models";
import { AreaCalculator } from "../../../Solid/2.Ocp/pratice-shape/services";

describe("Circle", () => {
	test("should calculate area correctly", () => {
		const circle = new Circle(5);
		expect(circle.calculateArea()).toBeCloseTo(Math.PI * 25, 5);
	});

	test("should calculate area for different radius", () => {
		const circle1 = new Circle(10);
		const circle2 = new Circle(3);
		expect(circle1.calculateArea()).toBeCloseTo(Math.PI * 100, 5);
		expect(circle2.calculateArea()).toBeCloseTo(Math.PI * 9, 5);
	});

	test("should extend Shape abstract class", () => {
		const circle = new Circle(5);
		expect(circle).toBeInstanceOf(Shape);
	});

	test("should calculate area for radius 1", () => {
		const circle = new Circle(1);
		expect(circle.calculateArea()).toBeCloseTo(Math.PI, 5);
	});

	test("should calculate area for decimal radius", () => {
		const circle = new Circle(2.5);
		expect(circle.calculateArea()).toBeCloseTo(Math.PI * 6.25, 5);
	});
});

describe("Rectangle", () => {
	test("should calculate area correctly", () => {
		const rectangle = new Rectangle(4, 5);
		expect(rectangle.calculateArea()).toBe(20);
	});

	test("should calculate area for different dimensions", () => {
		const rectangle1 = new Rectangle(10, 8);
		const rectangle2 = new Rectangle(3, 7);
		expect(rectangle1.calculateArea()).toBe(80);
		expect(rectangle2.calculateArea()).toBe(21);
	});

	test("should extend Shape abstract class", () => {
		const rectangle = new Rectangle(4, 5);
		expect(rectangle).toBeInstanceOf(Shape);
	});

	test("should calculate area for square-like rectangle", () => {
		const rectangle = new Rectangle(6, 6);
		expect(rectangle.calculateArea()).toBe(36);
	});

	test("should calculate area for decimal dimensions", () => {
		const rectangle = new Rectangle(2.5, 4.5);
		expect(rectangle.calculateArea()).toBe(11.25);
	});
});

describe("Square", () => {
	test("should calculate area correctly", () => {
		const square = new Square(6);
		expect(square.calculateArea()).toBe(36);
	});

	test("should calculate area for different side lengths", () => {
		const square1 = new Square(10);
		const square2 = new Square(3);
		expect(square1.calculateArea()).toBe(100);
		expect(square2.calculateArea()).toBe(9);
	});

	test("should extend Shape abstract class", () => {
		const square = new Square(6);
		expect(square).toBeInstanceOf(Shape);
	});

	test("should calculate area for side length 1", () => {
		const square = new Square(1);
		expect(square.calculateArea()).toBe(1);
	});

	test("should calculate area for decimal side length", () => {
		const square = new Square(4.5);
		expect(square.calculateArea()).toBe(20.25);
	});
});

describe("Triangle", () => {
	test("should calculate area correctly", () => {
		const triangle = new Triangle(3);
		expect(triangle.calculateArea()).toBe(4.5);
	});

	test("should calculate area for different lengths", () => {
		const triangle1 = new Triangle(6);
		const triangle2 = new Triangle(10);
		expect(triangle1.calculateArea()).toBe(18);
		expect(triangle2.calculateArea()).toBe(50);
	});

	test("should extend Shape abstract class", () => {
		const triangle = new Triangle(3);
		expect(triangle).toBeInstanceOf(Shape);
	});

	test("should calculate area for length 1", () => {
		const triangle = new Triangle(1);
		expect(triangle.calculateArea()).toBe(0.5);
	});

	test("should calculate area for decimal length", () => {
		const triangle = new Triangle(5.5);
		expect(triangle.calculateArea()).toBe(15.125);
	});
});

describe("AreaCalculator", () => {
	test("should calculate total area of multiple shapes", () => {
		const shapes: Shape[] = [
			new Circle(5),
			new Rectangle(4, 5),
			new Triangle(3),
			new Square(6)
		];
		const totalArea = AreaCalculator.totalArea(shapes);
		const expectedArea = Math.PI * 25 + 20 + 4.5 + 36;
		expect(totalArea).toBeCloseTo(expectedArea, 5);
	});

	test("should return 0 for empty array", () => {
		const shapes: Shape[] = [];
		expect(AreaCalculator.totalArea(shapes)).toBe(0);
	});

	test("should calculate total area of same type shapes", () => {
		const shapes: Shape[] = [
			new Circle(2),
			new Circle(3),
			new Circle(4)
		];
		const totalArea = AreaCalculator.totalArea(shapes);
		const expectedArea = Math.PI * (4 + 9 + 16);
		expect(totalArea).toBeCloseTo(expectedArea, 5);
	});

	test("should calculate total area of single shape", () => {
		const shapes: Shape[] = [new Rectangle(10, 5)];
		expect(AreaCalculator.totalArea(shapes)).toBe(50);
	});

	test("should calculate total area of rectangles and squares", () => {
		const shapes: Shape[] = [
			new Rectangle(5, 10),
			new Square(5),
			new Rectangle(3, 4)
		];
		const totalArea = AreaCalculator.totalArea(shapes);
		expect(totalArea).toBe(87); // 50 + 25 + 12
	});

	test("should handle mixed shapes including triangles", () => {
		const shapes: Shape[] = [
			new Triangle(4),
			new Triangle(6),
			new Square(3)
		];
		const totalArea = AreaCalculator.totalArea(shapes);
		expect(totalArea).toBe(35); // 8 + 18 + 9
	});

	test("should work with all shape types", () => {
		const shapes: Shape[] = [
			new Circle(1),
			new Rectangle(2, 3),
			new Square(2),
			new Triangle(2)
		];
		const totalArea = AreaCalculator.totalArea(shapes);
		const expectedArea = Math.PI + 6 + 4 + 2;
		expect(totalArea).toBeCloseTo(expectedArea, 5);
	});
});

describe("Shape Polymorphism", () => {
	test("should work with different shape types through base class", () => {
		const shapes: Shape[] = [
			new Circle(3),
			new Rectangle(4, 5),
			new Square(4),
			new Triangle(6)
		];

		expect(shapes[0].calculateArea()).toBeCloseTo(Math.PI * 9, 5);
		expect(shapes[1].calculateArea()).toBe(20);
		expect(shapes[2].calculateArea()).toBe(16);
		expect(shapes[3].calculateArea()).toBe(18);
	});

	test("should allow adding new shape types without modifying existing code", () => {
		const shapes: Shape[] = [
			new Circle(2),
			new Square(3)
		];

		const totalBefore = AreaCalculator.totalArea(shapes);
		shapes.push(new Rectangle(5, 4));
		const totalAfter = AreaCalculator.totalArea(shapes);

		expect(totalAfter).toBeGreaterThan(totalBefore);
		expect(totalAfter - totalBefore).toBe(20);
	});
});
