const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => +x);

const answer = [];

const prime = (n) => {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

for (let i = 0; i < input.length; i++) {
  const arr = [];

  for (let j = input[i] + 1; j <= input[i] * 2; j++) {
    if (prime(j)) arr.push(j);
  }

  if (arr.length !== 0) answer.push(arr.length);
}

console.log(answer.join('\n'));
