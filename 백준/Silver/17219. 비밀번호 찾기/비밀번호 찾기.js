const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input
  .shift()
  .split(' ')
  .map((x) => +x);
const N = T.shift();
const M = T.shift();
const map = new Map();
const arr = input.splice(N).map((x) => x.trim());
input = input.map((x) => x.split(' '));

for (let i = 0; i < N; i++) {
  map.set(input[i][0], input[i][1].trim());
}

for (let i = 0; i < M; i++) {
  console.log(map.get(arr[i]));
}
