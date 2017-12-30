// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? str[i].toUpperCase : str[i];
  }

  return result;
};
// END
