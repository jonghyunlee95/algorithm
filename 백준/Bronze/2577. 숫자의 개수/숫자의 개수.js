const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);

let num = 1;

for (let i = 0; i < input.length; i++) {
  num *= input[i];
}

const arr1 = String(num).split('');
const arr2 = Array(10).fill(0);

for (let i = 0; i < 10; i++) {
  arr2[+arr1[i]]++;
}

console.log(arr2.join('\n'));
