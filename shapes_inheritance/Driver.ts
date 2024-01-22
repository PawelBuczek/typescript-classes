import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let shape: Shape = new Shape(2, 3);
let circle: Circle = new Circle(4, 5, 6);
let rectangle: Rectangle = new Rectangle(7, 8, 9, 10);

let shapeCollection: Shape[] = [];
shapeCollection.push(shape);
shapeCollection.push(circle);
shapeCollection.push(rectangle);

console.log(shapeCollection);

shapeCollection.forEach(sh => console.log(sh.getInfo()));