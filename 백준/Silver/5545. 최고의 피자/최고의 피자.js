const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const price = input.shift().split(' ').map(Number);
let doughCalorie = +input.shift();
const arr = input.map(Number).sort((a, b) => b - a);
let doughPrice = price[0];
let toppingPrice = price[1];
const answer = [doughCalorie / doughPrice];

for (let i = 0; i < T; i++) {
  doughCalorie += arr[i];
  doughPrice += toppingPrice;
  answer.push(doughCalorie / doughPrice);
}

console.log(Math.floor(Math.max(...answer)));
