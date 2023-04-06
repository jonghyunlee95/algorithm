const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');
let answer = '';

for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt() > 96) answer += input[i].toUpperCase();
  else answer += input[i].toLowerCase();
}

console.log(answer);
