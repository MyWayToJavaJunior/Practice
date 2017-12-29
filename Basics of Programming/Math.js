// BEGIN (write your solution here)
const transform = (n) => {
    return (n * Math.PI) / 180;
  };
  export default (side, angle1, angle2) => {
    const sin1 = Math.sin(transform(angle1));
    const sin2 = Math.sin(transform(angle2));
    const sin3 = Math.sin(transform(180 - (angle1 + angle2)));
    return (Math.pow(side, 2) / 2) * ((sin1 * sin2) / sin3);
  };
  // END
  