const range = (startNum, endNum) => {
  if (endNum - startNum === 2) {
    return [startNum + 1];
  }
  const list = range(startNum, endNum - 1);
  list.push(endNum - 1);
  return list;
};
export default range;
