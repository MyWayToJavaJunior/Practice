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