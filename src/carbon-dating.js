const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity !== 'string' || !sampleActivity) {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);

  if (sampleActivity.toString() === 'NaN' || sampleActivity <= 0) {
    return false;
  }

  let res = Math.log(MODERN_ACTIVITY / sampleActivity) / k;

  if (res <= 0) {
    return false;
  }

  return Math.ceil(res);
};
