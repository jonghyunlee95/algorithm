const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));
const maxNum = [];
const answer = [];

for (let i = 0; i < input.length; i++) {
  maxNum.push(Math.max(...input[i]));
}

for (let i = 0; i < input.length; i++) {
  if (input[i].indexOf(Math.max(...maxNum)) >= 0) {
    answer.push(i + 1);
    answer.push(input[i].indexOf(Math.max(...maxNum)) + 1);
  }
}

console.log(String(Math.max(...maxNum)));
console.log(answer.join(' '));
