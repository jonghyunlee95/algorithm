const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = [];
let arr = [];

for (let i = 0; i < T; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (arr[arr.length - 1] === '(' && input[i][j] === ')') {
      arr.pop();
    } else {
      arr.push(input[i][j]);
    }
  }
  if (arr.length === 0) answer.push('YES');
  else answer.push('NO');
  arr = [];
}

console.log(answer.join('\n'));
