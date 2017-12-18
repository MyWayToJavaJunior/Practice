// BEGIN
const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
      const maybeFizz = i % 3 === 0 ? 'Fizz' : '';
      const maybeBuzz = i % 5 === 0 ? 'Buzz' : '';
      const output = `${maybeFizz}${maybeBuzz}`;
      console.log(output === '' ? i : output);
    }
  };
  const fizzBuzz2 = (begin, end) => {
    if (begin > end) {
      return;
    } else if (((begin % 3) === 0) && ((begin % 5) === 0)) {
      console.log('FizzBuzz');
    }
    else if ((begin % 5) === 0) {
      console.log('Buzz');
    }
    else if ((begin % 3) === 0) {
      console.log('Fizz');
    } else { 
      console.log(begin);
    }
      return fizzBuzz2(begin + 1, end);
  };