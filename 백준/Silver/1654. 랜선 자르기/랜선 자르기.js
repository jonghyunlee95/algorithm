const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

let start = 0;
let end = Math.max(...arr);

let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (x of arr) total += parseInt(x / mid);

  if (total < M) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
