const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().split('\n');
const obj = {};

for (let i = 0; i < T; i++) {
  obj[input[i]] = input[i].trim().length;
}

const arr = Object.entries(obj).sort();
arr.sort((a, b) => a[1] - b[1]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i][0]);
}
