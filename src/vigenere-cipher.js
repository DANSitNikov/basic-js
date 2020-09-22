const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor() {
        this.arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
    check(message, key) {
        if (!message || !key) {
            throw new Error('Error')
        }
    }
    encrypt(message, key) {
        let preRes = [],
            res = [],
            copyMes = message.split(' '),
            finish = [];

        this.check(message, key);
        message = message.toUpperCase().split(' ').join('').split('');
        key = key.toUpperCase().split('');

        for (let i = 0; i < key.length; i++) {
            if (message.length > key.length) {
                key.push(key[i]);
            }
        }

        for (let i = 0; i < message.length; i++) {
            if (this.arr.includes(message[i]) && this.arr.includes(key[i])) {
                let addIndex = this.arr.indexOf(message[i]) + this.arr.indexOf(key[i]);
                if (addIndex >= 26) {
                    addIndex = addIndex - 26;
                }
                preRes.push(addIndex);
            } else {
                preRes.push(message[i]);
            }
        }

        for (let i = 0; i < preRes.length; i++) {
            if (typeof preRes[i] == 'number') {
                for (let j = 0; j < this.arr.length; j++) {
                    if (this.arr.indexOf(this.arr[j]) === preRes[i]) {
                        res.push(this.arr[j]);
                    }
                }
            } else {
                res.push(preRes[i]);
            }
        }

        let checker = 0;

        for (let i = 0; i < copyMes.length; i++) {
            for (let j = 0; j < copyMes[i].length; j++) {
                finish.push(res[checker]);
                checker += 1;
            }
            finish.push(' ');
        }

        finish.pop();

        return finish.join('');
    }

    decrypt(message, key) {
        let preRes = [],
            res = [],
            copyMes = message.split(' '),
            finish = [];

        this.check(message, key);
        message = message.toUpperCase().split(' ').join('').split('');
        key = key.toUpperCase().split('');

        for (let i = 0; i < key.length; i++) {
            if (message.length > key.length) {
                key.push(key[i]);
            }
        }

        for (let i = 0; i < message.length; i++) {
            if (this.arr.includes(message[i]) && this.arr.includes(key[i])) {
                let addIndex = this.arr.indexOf(message[i]) - this.arr.indexOf(key[i]);
                if (addIndex < 0) {
                    addIndex = addIndex + 26;
                }
                preRes.push(addIndex);
            } else {
                preRes.push(message[i]);
            }
        }

        for (let i = 0; i < preRes.length; i++) {
            if (typeof preRes[i] == 'number') {
                for (let j = 0; j < this.arr.length; j++) {
                    if (this.arr.indexOf(this.arr[j]) === preRes[i]) {
                        res.push(this.arr[j]);
                    }
                }
            } else {
                res.push(preRes[i]);
            }
        }

        let checker = 0;

        for (let i = 0; i < copyMes.length; i++) {
            for (let j = 0; j < copyMes[i].length; j++) {
                finish.push(res[checker]);
                checker += 1;
            }
            finish.push(' ');
        }

        finish.pop();

        return finish.join('');
    }
}

module.exports = VigenereCipheringMachine;
