const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const N = +input[0];
const K = +input[1];

const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  else return num * factorial(num - 1);
};

console.log(factorial(N) / (factorial(K) * factorial(N - K)));
