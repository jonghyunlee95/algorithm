const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const map = new Map();
input = input.map((x) => x.split(' '));

for (let i = 0; i < T; i++) {
  if (input[i][1] === 'enter') map.set(input[i][0], 'enter');
  else if (input[i][1] === 'leave') map.delete(input[i][0]);
}

const answer = [];

for ([key, value] of map) {
  answer.push(key);
}

console.log(answer.sort().reverse().join('\n'));
