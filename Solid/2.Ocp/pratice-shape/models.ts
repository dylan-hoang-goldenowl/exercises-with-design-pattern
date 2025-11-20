export abstract class Shape {
	abstract calculateArea(): number;
}

export class Circle extends Shape {
	constructor(private radius: number) {
		super();
	}

	calculateArea(): number {
		return Math.PI * this.radius * this.radius;
	}
}

export class Rectangle extends Shape {
	constructor(private width: number, private height: number) {
		super();
	}

	calculateArea(): number {
		return this.width * this.height;
	}
}

export class Square extends Shape {
	constructor(private side: number) {
		super();
	}

	calculateArea(): number {
		return this.side * this.side;
	}
}

export class Triangle extends Shape {
	constructor(private length: number) {
		super();
	}

	calculateArea(): number {
		return 0.5 * this.length * this.length;
	}
}
