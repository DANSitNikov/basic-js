const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let preRes = [],
        newStr;

    if (!str) {
        newStr = 'null'
    } else {
        newStr = str;
    }

    preRes.push(newStr);

    if (typeof options.additionRepeatTimes !== 'number') {
        if (!options.addition && typeof options.addition !== 'boolean') {
            preRes.push('null')
        } else {
            preRes.push(options.addition);
        }
    } else {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            if (!options.addition && typeof options.addition !== 'boolean') {
                preRes.push('null')
            } else {
                preRes.push(options.addition);
            }
            if (!options.additionSeparator) {
                preRes.push('|')
            } else {
                preRes.push(options.additionSeparator);
            }
        }
    }

    let res = [];

    if (typeof options.repeatTimes !== 'number') {
        preRes = preRes.join('');
        return preRes;
    } else {
        if (preRes.length > 1) {
            preRes.pop();
        }

        preRes = preRes.join('');

        for (let i = 0; i < options.repeatTimes; i++) {
            res.push(preRes);
            if (!options.separator) {
                res.push('+')
            } else {
                res.push(options.separator);
            }
        }
    }

    res.pop();

    return res.join('');
};
  