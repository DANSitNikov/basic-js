const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  arr = arr.flat();
  let res = 0;
  arr.forEach(el => {if (el === '^^') res += 1});
  return res;
};

