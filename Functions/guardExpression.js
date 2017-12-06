// BEGIN
const isPalindrome = (string) => {
  if (length(string) <= 1) {
    return true;
  }
  const firstSymbol = string[0];
  const lastSymbol = string[length(string) - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = substr(string, 1, length(string) - 2);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};

export default isPalindrome;
// END
const isPalindrome = (str) => {
    if (str.length < 2) {
      return true;
    }
    else if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.substr(1, str.length - 2));
    }
    else return false;
  };
  export default isPalindrome;