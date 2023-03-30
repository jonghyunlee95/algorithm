const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift().split(' ');
const keyWordNumber = +T[0];
const blogTextNumber = +T[1];
const set = new Set(input.splice(0, keyWordNumber));
input = input.map((x) => x.split(','));
const answer = [];

for (let i = 0; i < blogTextNumber; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (set.has(input[i][j])) set.delete(input[i][j]);
  }
  answer.push(set.size);
}

console.log(answer.join('\n'));
