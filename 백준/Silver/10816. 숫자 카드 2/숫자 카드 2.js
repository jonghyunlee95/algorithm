const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const N = +input[0];
const numCard = input[1].split(' ').map(Number);
const M = +input[2];
const sCard = input[3].split(' ').map(Number);
const map = new Map();
const answer = [];

for (let i = 0; i < N; i++) {
  if (!map.has(numCard[i])) map.set(numCard[i], 1);
  else map.set(numCard[i], map.get(numCard[i]) + 1);
}

for (let j = 0; j < M; j++) {
  if (map.get(sCard[j])) answer.push(map.get(sCard[j]));
  else answer.push(0);
}

console.log(answer.join(' '));
