const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const weakNum = input[0]
  .split(' ')
  .map((x) => +x)
  .sort((a, b) => a - b);

console.log(weakNum[0] * weakNum[weakNum.length - 1]);
