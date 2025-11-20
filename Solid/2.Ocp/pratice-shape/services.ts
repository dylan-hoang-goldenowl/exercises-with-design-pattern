import { Shape } from "./models";

export class AreaCalculator {
	static totalArea(shapes: Shape[]): number {
		return shapes.reduce((sum, shape) => sum + shape.calculateArea(), 0);
	}
}
