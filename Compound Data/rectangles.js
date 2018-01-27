import { makePoint, getX, getY } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';
// BEGIN (write your solution here)

export const makeRectangle = (startPoint, width, height) => cons(startPoint, cons(width, height));
export const startPoint = rectangle => car(rectangle);
export const width = rectangle => car(cdr(rectangle));
export const height = rectangle => cdr(cdr(rectangle));
export const square = rectangle => width(rectangle) * height(rectangle);
export const perimeter = rectangle => 2 * (width(rectangle) + height(rectangle));
export const containsTheOrigin = (rectangle) => {
  const point1 = startPoint(rectangle);
  const point2 = makePoint(getX(point1) + width(rectangle), getY(point2) - height(rectangle));
  return quadrant(point1) === 2 && quadrant(point2) === 4;
};

