// BEGIN (write your solution here)
export const makeSegment = (point1, point2) => {
    return cons(makePoint(getX(point1), getY(point1)), makePoint(getX(point2), getY(point2)))
  };
  export const startSegment = (makeSegment) => {
  return car(makeSegment);
  };
  export const endSegment = (makeSegment) => {
  return cdr(makeSegment);
  };
  export const segmentToString = (makeSegment) => {
    return `[${pointToString(car(makeSegment))}, ${pointToString(cdr(makeSegment))}]`;
  };
  export const midpointSegment = (makeSegment) => {
    const x1 = car(startSegment(makeSegment));
    const y1 = cdr(startSegment(makeSegment));
    const x2 = car(endSegment(makeSegment));
    const y2 = cdr(endSegment(makeSegment));
    return cons(((x1 + x2) / 2), ((y1 + y2) / 2));
  };
  // END









  getY(startPoint) - height = 7
  height = 7 - get yield
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
    return (  cdr(cdr(cdr(makeRectangle))) - cdr(cdr(cdr(makeRectangle))));
  };
  export const square = (makeRectangle) => {
    return width(makeRectangle) * height(makeRectangle);
  };
  export const perimeter = () => {
    return 2 * (width(makeRectangle) + height(makeRectangle));
  };
  export const containsTheOrigin = (makeRectangle) => {
    const check = ((quadrant(startPoint) === 2) && (quadrant(point2) === 1) && (quadrant(point3) === 3));
  };
  // END
  