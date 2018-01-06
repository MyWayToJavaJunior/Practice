import { getMethod } from './generic';
import { contents } from './type';

export const getName = self =>
  getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)
export const damage = (self, health) => getMethod(self, 'damage')(contents(self), health);
// END
