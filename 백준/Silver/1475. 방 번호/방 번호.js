const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map((x) => +x);

const arr = Array(10).fill(0);

for (let i = 0; i < input.length; i++) {
  if (input[i] === 9) arr[6]++;
  else arr[input[i]]++;
}
const cnt = [];

for (let i = 0; i < arr.length; i++) {
  if (i === 6 && arr[i] >= 2) {
    cnt.push(Math.ceil(arr[i] / 2));
  } else {
    cnt.push(arr[i]);
  }
}

const max = Math.max(...cnt);

console.log(max);
