const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('-');
const answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push(input[i][0]);
}
console.log(answer.join(''));
