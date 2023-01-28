const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, input] = require('fs').readFileSync(filePath).toString().split('\n');
const cutline = T.split(' ').map((x) => +x)[1];
const score = input
  .split(' ')
  .map((x) => +x)
  .sort((a, b) => b - a);

console.log(score[cutline - 1]);
