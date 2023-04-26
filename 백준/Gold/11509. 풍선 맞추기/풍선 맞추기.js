const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0].split(' ').map(Number);
let arrow = 0;
let ballon = Array(Math.max(...arr) + 1).fill(0);

for (let i = 0; i < T; i++) {
  if (ballon[arr[i]] === 0) {
    arrow++;
    ballon[arr[i] - 1]++;
  } else {
    ballon[arr[i]]--;
    ballon[arr[i] - 1]++;
  }
}
console.log(arrow);
