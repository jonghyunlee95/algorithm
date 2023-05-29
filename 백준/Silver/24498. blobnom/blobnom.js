const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0].split(' ').map(Number);
const blob = [];

for (let i = 1; i < T - 1; i++) {
  blob.push(arr[i] + Math.min(arr[i - 1], arr[i + 1]));
}

console.log(Math.max(...blob, arr[0], arr[arr.length - 1]));
