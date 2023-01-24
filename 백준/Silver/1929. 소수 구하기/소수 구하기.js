const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((x) => +x);

const answer = [];

const prime = (n) => {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

for (let i = input[0]; i <= input[1]; i++) {
  if (prime(i)) answer.push(i);
}

console.log(answer.join('\n'));
