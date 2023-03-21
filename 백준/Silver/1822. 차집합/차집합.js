const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T1 = input
  .shift()
  .split(' ')
  .map((x) => +x);
const arr1 = new Set(input[0].split(' ').map((x) => +x));
const arr2 = input[1].split(' ').map((x) => +x);

for (const item of arr2) {
  if (arr1.has(item)) arr1.delete(item);
}

const answer = [];
if (arr1.size === 0) answer.push(0);
else {
  answer.push(String(arr1.size));
  answer.push([...arr1].sort((a, b) => a - b).join(' '));
}
console.log(answer.join('\n'));
