const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, K] = a.split(' ').map(Number);

const sortedArr = b
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(sortedArr[K - 1]);
