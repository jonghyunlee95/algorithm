const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const one = input.split(0).filter((x) => x !== '');
const zero = input.split(1).filter((x) => x !== '');
console.log(Math.min(one.length, zero.length));
