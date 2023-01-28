const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);

let sum = 0;
const obj = {};
input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  sum += input[i];
  obj[input[i]] = (obj[input[i]] || 0) + 1;
}
const arr = Object.entries(obj);
const max = Math.max(...Object.values(obj));
const arr1 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][1] === max) arr1.push(Number(arr[i][0]));
}
if (Math.round(sum / T) === -0) {
  console.log(0);
} else {
  console.log(Math.round(sum / T));
}

console.log(input[Math.floor(input.length / 2)]);

if (arr1.length === 1) {
  console.log(arr1[0]);
} else {
  arr1.sort((a, b) => a - b);
  console.log(arr1[1]);
}

console.log(Math.max(...input) - Math.min(...input));
