const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input
  .map((x) => x.split(' ').map(Number))
  .sort(function (a, b) {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });
let temp = 0;
let cnt = 1;

for (let i = 1; i < T; i++) {
  if (arr[temp][1] <= arr[i][0]) {
    temp = i;
    cnt++;
  }
}

console.log(cnt);
