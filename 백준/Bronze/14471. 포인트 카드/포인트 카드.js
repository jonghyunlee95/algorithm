const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const point = input.shift().split(' ').map(Number);
const arr = input.map((x) => x.split(' ').map(Number)).sort((a, b) => b[0] - a[0]);
let cnt = 0;
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] >= point[0]) {
    cnt++;
  } else {
    answer += point[0] - arr[i][0];
    cnt++;
  }

  if (cnt === point[1] - 1) break;
}

console.log(answer);
