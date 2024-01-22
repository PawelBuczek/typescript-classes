import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let circle: Circle = new Circle(4, 5, 6);
let rectangle: Rectangle = new Rectangle(7, 8, 9, 10);

let shapeCollection: Shape[] = [];
shapeCollection.push(circle);
shapeCollection.push(rectangle);

console.log(shapeCollection);

// using collection with objects extending abstract class Shape

shapeCollection.forEach(sh => console.log(sh.getInfo()));

console.log();

for (let sh of shapeCollection) {
    console.log(sh.calculateArea());
}