const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const rope = input.map(Number).sort((a, b) => a - b);
const answer = [];

for (let i = 0; i < T; i++) {
  answer.push(rope[i] * (T - i));
}

console.log(Math.max(...answer));
