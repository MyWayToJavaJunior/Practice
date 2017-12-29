// BEGIN
export default (str, index = 0, substrLength = getLength(str)) => {
    if (substrLength === 0) { // guard expression
      return '';
    }
  
    const length = getLength(str);
    if (index >= length) { // guard expression
      return '';
    }
  
    let currentIndex = index < 0 ? 0 : index;
    let lastIndex;
    if (substrLength < 1) {
      lastIndex = currentIndex;
    } else if (substrLength > length) {
      lastIndex = length - 1;
    } else {
      lastIndex = currentIndex + (substrLength - 1);
    }
  
    let result = '';
    for (; currentIndex <= lastIndex; currentIndex += 1) {
      result = `${result}${str[currentIndex]}`;
    }
  
    return result;
  };
  // END