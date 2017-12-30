const arraySum = (myArray) => {
  if (myArray.length === 1) {
    return myArray[0];
  }
  return myArray.pop() + arraySum(myArray);
};
export default arraySum;
