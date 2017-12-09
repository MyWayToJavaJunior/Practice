var Zero = function (f) {
    return function (x) {
      return x;
    };
  };
  
  var Succ = function (n) {
    return function (f) {
      return function (x) {
        return f(n(f)(x));
      };
    };
  };
  