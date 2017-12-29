const sum = (n, a, b) => {
    let result = 0;
    for (let i = 1; i < n; i += 1) {
      if (i % a === 0 || i % b === 0) {
      result +=i;
      }
    };
    return result;
  };
  export default sum;