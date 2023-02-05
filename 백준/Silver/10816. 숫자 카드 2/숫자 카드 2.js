const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.trim());
const T1 = +input.shift();
const have = input.shift().split(' ');
const T2 = +input.shift();
const find = input[0].split(' ');
const obj = {};
const map = new Map();
const answer = [];

for (let i = 0; i < T1; i++) {
  obj[have[i]] = (obj[have[i]] || 0) + 1;
}

for (let i = 0; i < T1; i++) {
  map.set(have[i], obj[have[i]]);
}

for (let i = 0; i < T2; i++) {
  if (map.has(find[i])) answer.push(map.get(find[i]));
  else answer.push(0);
}

console.log(answer.join(' '));
