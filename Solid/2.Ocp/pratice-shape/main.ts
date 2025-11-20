import { Shape, Circle, Rectangle, Triangle, Square } from "./models";
import { AreaCalculator } from "./services";

let shapes: Shape[] = [
	new Circle(5),
	new Rectangle(4, 5),
	new Triangle(3),
	new Square(6),
];
console.log("Total area:", AreaCalculator.totalArea(shapes));
