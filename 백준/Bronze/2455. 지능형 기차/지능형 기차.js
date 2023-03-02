const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));
const answer = [];
let people = 0;

for (let i = 0; i < input.length; i++) {
  people -= input[i][0];
  people += input[i][1];
  answer.push(people);
}
console.log(Math.max(...answer));
