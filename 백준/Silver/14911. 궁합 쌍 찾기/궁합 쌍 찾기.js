const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input.shift().split(' ').map(Number);
const findNum = +input.shift();
const set = new Set();
let answer = [];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === findNum) {
      const combi = [];
      combi.push(arr[i]);
      combi.push(arr[j]);
      combi.sort((a, b) => a - b);
      answer.push(combi);
    }
  }
}

answer = answer.sort();

for (let i = 0; i < answer.length; i++) {
  set.add(answer[i].join(' '));
}

for (const item of set) {
  console.log(item);
}

console.log(set.size);
