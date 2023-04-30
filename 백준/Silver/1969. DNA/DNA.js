const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift().split(' ').map(Number);
const arrLeng = +T[0];
const sentenseLeng = +T[1];
const arr = input.map((x) => x.trim().split(''));
const answer = [];
let str = '';
let cnt = 0;

for (let i = 0; i < sentenseLeng; i++) {
  const map = new Map();
  for (let j = 0; j < arrLeng; j++) {
    map.set(arr[j][i], map.get(arr[j][i]) + 1 || 1);
  }
  const result = [...map].sort().sort((a, b) => b[1] - a[1]);
  str += result[0][0];
}

answer.push(str);

for (let i = 0; i < sentenseLeng; i++) {
  for (let j = 0; j < arrLeng; j++) {
    if (input[j][i] !== answer[0][i]) cnt++;
  }
}

answer.push(cnt);
console.log(answer.join('\n'));
