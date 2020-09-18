const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let teamName = [];
  if (arr) {
    if (arr.isArray || typeof arr === 'object' && arr.length > 1) {
      for (let key in arr) {
        if (typeof arr[key] === 'string') {
          arr[key] = arr[key].replace(/\s/g, '');
          teamName.push(arr[key][0].toUpperCase());
        }
      }
      return teamName.sort().join('');
    } else {
      return false;
    }
  } else {
    return false;
  }
};