const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date);
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!date.getTime()) {
    throw new Error('THROWN');
  }

  const year = [[12,1,2], [3,4,5], [6,7,8], [9,10,11]];

  let session = date.getMonth() + 1;

  if (year[0].includes(session)) {
    return 'winter';
  } else if (year[1].includes(session)) {
    return 'spring';
  } else if (year[2].includes(session)) {
    return 'summer';
  } else if (year[3].includes(session)) {
    return 'autumn';
  } else {
    return null;
  }
};
