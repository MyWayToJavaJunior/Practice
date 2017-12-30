import { table, tr, td } from './tags';

// BEGIN (write your solution here)
export default () => table(
  tr(td('lang'), td('comment')),
  tr(td('php'), td('statements')),
  tr(td('clojure'), td('expressions')),
);
// END
