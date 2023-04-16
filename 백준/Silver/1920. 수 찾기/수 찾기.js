const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = new Set(input[1].trim().split(' '));
const M = input[3].trim().split(' ');
const answer = [];

for (let i = 0; i < M.length; i++) {
  if (N.has(M[i])) answer.push(1);
  else answer.push(0);
}
console.log(answer.join('\n'));
