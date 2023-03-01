const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' '));
const answer = [];
let obj = {};

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    obj[input[i][j]] = (obj[input[i][j]] || 0) + 1;
  }
  if (obj['0'] === 1) answer.push('A');
  else if (obj['0'] === 2) answer.push('B');
  else if (obj['0'] === 3) answer.push('C');
  else if (obj['0'] === 4) answer.push('D');
  else if (obj['1'] === 4) answer.push('E');

  obj = {};
}
console.log(answer.join('\n'));
