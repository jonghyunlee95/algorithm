const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift().split(' ').map(Number);
const egg = T[0];
const people = T[1];
const arr = input.map(Number).sort((a, b) => b - a);
const num = [];
const answer = [];

if (egg >= people) {
  for (let i = 0; i < people; i++) {
    num.push((i + 1) * arr[i]);
  }

  answer.push(arr[num.indexOf(Math.max(...num))]);
  answer.push(Math.max(...num));
} else {
  for (let i = 0; i < egg; i++) {
    num.push((i + 1) * arr[i]);
  }

  answer.push(arr[num.indexOf(Math.max(...num))]);
  answer.push(Math.max(...num));
}

console.log(answer.join(' '));
