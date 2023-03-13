const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('.');
input.pop();
input.pop();
input = input.map((x) => x.trim());
const answer = [];
let arr = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    const str = input[i][j];
    if (str === '[' || str === ']' || str === '(' || str === ')') {
      arr.push(str);
    }
    if (arr[arr.length - 2] === '[' && arr[arr.length - 1] === ']') arr.splice(arr.length - 2, 2);
    if (arr[arr.length - 2] === '(' && arr[arr.length - 1] === ')') arr.splice(arr.length - 2, 2);
  }
  if (arr.length === 0) answer.push('yes');
  else answer.push('no');
  arr = [];
}

console.log(answer.join('\n'));
