const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const T = input.shift();
const answer = [];

const prime = (n) => {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

for (let i = 0; i < T; i++) {
  let arr = [];
  for (let j = 1; j < input[i]; j++) {
    if (prime(j) && prime(input[i] - j) && j <= input[i] - j) {
      arr.push(j);
      arr.push(input[i] - j);
    }
  }
  if (arr.length > 2) {
    arr = arr.splice(arr.length - 2, 2);
  }
  answer.push(arr.join(' '));
}

console.log(answer.join('\n'));
