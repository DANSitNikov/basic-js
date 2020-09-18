const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, res = 1) {
        if (arr.every(el => typeof el !== 'object')) {
          return res;
        } else {
          arr = arr.flat();
          res += 1;
          return this.calculateDepth(arr, res)
        }
    }
};