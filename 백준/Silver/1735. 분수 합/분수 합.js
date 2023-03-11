const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));
const answer = [];

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

const temp1 = input[0][0] * input[1][1] + input[0][1] * input[1][0];
const temp2 = input[0][1] * input[1][1];

answer.push(temp1 / gcd(temp1, temp2));
answer.push(temp2 / gcd(temp1, temp2));

console.log(answer.join(' '));
