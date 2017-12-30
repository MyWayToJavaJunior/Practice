export const isPrime1 = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1; // вместо i++;
  }
  return true;
};
export default (num) => {
  if (num <= 1) {
    return false;
  }
  let result = 2;
  while (num % result !== 0) {
    result += 1;
  }
  return result === num;
};
