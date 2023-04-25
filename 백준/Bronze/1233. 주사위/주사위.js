const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const sum = [];
const map = new Map();

for (let i = 1; i <= input[0]; i++) {
  for (let j = 1; j <= input[1]; j++) {
    for (let k = 1; k <= input[2]; k++) {
      sum.push(i + j + k);
    }
  }
}

for (let i = 0; i < sum.length; i++) {
  map.set(sum[i], map.get(sum[i]) + 1 || 1);
}

const arr = [...map].sort((a, b) => a[0] - b[0]).sort((a, b) => b[1] - a[1]);
console.log(arr[0][0]);
