const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().split('\n');
const num1 = +T.split(' ')[0];
const num2 = +T.split(' ')[1];
const arr1 = new Set(input.splice(0, num1).map((s) => s.trim()));
const arr2 = input.map((x) => x.trim());
let cnt = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr1.has(arr2[i])) cnt++;
}

console.log(cnt);
