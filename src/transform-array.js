const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] == '--discard-next') {
            res.pop();
        } else if (arr[i] == '--discard-prev' && arr[0] != '--discard-prev') {
            res.pop()
        } else if (arr[i] == '--double-next') {
            res.push(arr[i + 1])
        } else if (arr[i] == '--double-prev') {
            res.push(arr[i - 1])
        } else if (arr[i] != '--discard-next' && arr[i] != '--discard-next') {
            res.push(arr[i]);
        }
    }
    if (res[0] == '--discard-prev' || res[0] == undefined) {
      res.shift();
    }

    if (res[res.length - 1] == undefined) {
      res.pop();
    }
    return res;
};
