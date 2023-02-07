const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((x) => +x);

const [X, Y, W, H] = input;

console.log(Math.min(X, Y, W - X, H - Y));
