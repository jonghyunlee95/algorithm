const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.trim());
const T = input
  .shift()
  .split(' ')
  .map((x) => +x);
const dontListenNum = T[0];
const dontSeeNum = T[1];
const dontSee = input.splice(dontListenNum);
const map = new Map();
const answer = [];

for (let i = 0; i < dontListenNum; i++) {
  map.set(input[i]);
}

for (let i = 0; i < dontSeeNum; i++) {
  if (map.has(dontSee[i])) answer.push(dontSee[i]);
}

console.log(answer.length);
console.log(answer.sort().join('\n'));
