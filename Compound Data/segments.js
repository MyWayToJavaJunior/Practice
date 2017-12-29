import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeSegment = (point1, point2) => {
  return makePoint(point1, point2);
};
export const startSegment = (segment) => {
  return getX(segment);
};
export const endSegment = (segment) => {
  return getY(segment);
};
export const segmentToString = (segment) => {
  return `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
};
export const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const x = (getX(startPoint) + getX(endPoint)) / 2;
  const y = (getY(startPoint) + getY(endPoint)) / 2;

  return makePoint(x, y);
};
// END

  