const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0) {
      this.arr = [];
      throw new Error('Position is not a number!');
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

console.log(chainMaker.finishChain());

module.exports = chainMaker;
