const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[parseInt((arr.length - 1) / 2)]);
