const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.trim());
const answer = [];
let cnt = 0;

function palindrome(str) {
  cnt++;
  return recursion(str, 0, str.length - 1);
}

function recursion(str, start, end) {
  if (str[start] !== str[end]) answer.push(`0 ${cnt}`);
  else if (start >= end) answer.push(`1 ${cnt}`);
  else {
    cnt++;
    recursion(str, start + 1, end - 1);
  }
}

for (let i = 0; i < T; i++) {
  cnt = 0;
  palindrome(input[i]);
}

console.log(answer.join('\n'));
