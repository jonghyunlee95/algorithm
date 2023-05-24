const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let sum = 0;

while (arr.length) {
  const a = arr.shift();
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    b += arr[i];
  }
  sum += a * b;
}

console.log(sum);
