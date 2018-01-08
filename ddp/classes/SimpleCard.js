// BEGIN (write your solution here)
export default class SimpleCard {
  constructor(name, percent) {
    this.name = name;
    this.percent = percent;
  }
  damage() {
    return this.percent;
  }
}
// END
