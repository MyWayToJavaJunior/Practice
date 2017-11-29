// BEGIN (write your solution here)
export const makeRectangle = (startPoint, width, height) => {
  const point2 = makePoint((getX(startPoint) + width), getY(startPoint));
  const point3 = makePoint(getX(startPoint), (getY(startPoint) - height));
  return cons(makePoint(startPoint, point2), makePoint(startPoint, point3));
};
export const startPoint = (makeRectangle) => {
  return makePoint((car(car(car(makeRectangle)))), cdr(cdr(car(makeRectangle))));
};
export const width = (makeRectangle) => {
  return car(cdr(car(makeRectangle))) - car(car(car(makeRectangle)));
};
export const height = (makeRectangle) => {
  return (cdr(cdr(car(makeRectangle)))) - (cdr(cdr(cdr(makeRectangle))));
};
export const square = (makeRectangle) => {
  return width(makeRectangle) * height(makeRectangle);
};
export const perimeter = (makeRectangle) => {
  return 2 * (width(makeRectangle) + height(makeRectangle));
};
export const containsTheOrigin = (makeRectangle) => {
  return ((quadrant(car(car(makeRectangle))) === 2) && (quadrant(cdr(car(makeRectangle))) === 1) && (quadrant(cdr(cdr(makeRectangle))) === 3));
};

export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = rectangle => car(rectangle);
export const height = rectangle => cdr(cdr(rectangle));
export const width = rectangle => car(cdr(rectangle));

export const square = rectangle => height(rectangle) * width(rectangle);
export const perimeter = rectangle => 2 * (height(rectangle) + width(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = startPoint(rectangle);
  const point2 = makePoint(getX(point1) + width(rectangle), getY(point1) - height(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};


const True = one => two => one;
True(one)(two)