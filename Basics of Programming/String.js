// BEGIN
export default (str) => {
    let i = length(str) - 1;
  
    let result = '';
    while (i >= 0) {
      result += str[i];
      i -= 1;
    }
  
    return result;
  };
  // END