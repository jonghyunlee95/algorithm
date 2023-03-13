const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input.map((x) => x.split(',').map((x) => +x));
const answer = [];

for (let i = 0; i < T; i++) {
  answer.push(arr[i][0] + arr[i][1]);
}

console.log(answer.join('\n'));
