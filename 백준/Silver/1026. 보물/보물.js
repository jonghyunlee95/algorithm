const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
let answer = 0;

while (A.length !== 0) {
  answer += Math.max(...A) * Math.min(...B);
  A.splice(A.indexOf(Math.max(...A)), 1);
  B.splice(B.indexOf(Math.min(...B)), 1);
}

console.log(answer);
