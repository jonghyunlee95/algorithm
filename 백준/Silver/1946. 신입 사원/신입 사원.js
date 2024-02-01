const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const tc = +input[0];
let line = 1;

for (let i = 0; i < tc; i++) {
  let n = +input[line];
  const arr = [];

  for (let j = line + 1; j <= line + n; j++) {
    const data = input[j].split(' ').map(Number);
    arr.push(data);
  }

  arr.sort((a, b) => a[0] - b[0]);
  let cnt = 0;
  let minValue = 100001;

  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      cnt++;
    }
  }

  console.log(cnt);
  line += n + 1;
}
