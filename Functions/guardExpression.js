// BEGIN
const isPalindrome = (string) => {
  if (string.length <= 1) {
    return true;
  }
  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = string.substr(1, string.length - 2);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};
export default isPalindrome;
// END
export const isPalindrome1 = (str) => {
  if (str.length < 2) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substr(1, str.length - 2));
  }
  return false;
};
