const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const N = +input[0];
const K = +input[1];

// const factorial = (num) => {
//   if (num === 0 || num === 1) return 1;
//   else return num * factorial(num - 1);
// };

// console.log((factorial(N) / (factorial(K) * factorial(N - K))) % 10007);
let dy = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= i; j++) {
    if (i === j || j === 0) dy[i][j] = 1;
    else dy[i][j] = (dy[i - 1][j - 1] + dy[i - 1][j]) % 10007;
  }
}

console.log(dy[N][K]);