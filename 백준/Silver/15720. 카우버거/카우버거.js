const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input[0].split(' ').map(Number);
const B = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const C = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const D = input[3]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

const answer = [];
const sum = B.reduce((a, b) => a + b) + C.reduce((a, b) => a + b) + D.reduce((a, b) => a + b);
let discount = 0;
let i = 0;

while (true) {
  if (B.length === 0 || C.length === 0 || D.length === 0) {
    break;
  } else {
    discount += (B[i] + C[i] + D[i]) * 0.9;
    B.shift();
    C.shift();
    D.shift();
  }
}

if (B.length > 0) {
  discount += B.reduce((a, b) => a + b);
}
if (C.length > 0) {
  discount += C.reduce((a, b) => a + b);
}
if (D.length > 0) {
  discount += D.reduce((a, b) => a + b);
}

answer.push(sum, discount);
console.log(answer.join('\n'));
