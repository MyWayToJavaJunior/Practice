import { length, toUpperCase, toLowerCase } from './strings';

// BEGIN
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const upper = str[i] === toUpperCase(str[i]);
    result += upper ? toLowerCase(str[i]) : toUpperCase(str[i]);
  }
  return result;
};
export default invertCase;
// END
