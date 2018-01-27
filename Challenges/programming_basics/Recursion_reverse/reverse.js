const reverse = (str) => {
  if (str.length <= 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.substr(0, str.length - 1));
};
export default reverse;
