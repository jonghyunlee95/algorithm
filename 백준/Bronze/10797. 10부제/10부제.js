const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [num, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const car = input[0].split(' ');
let illegal = 0;

for (let i = 0; i < car.length; i++) {
  if (car[i] === num) illegal++;
}

console.log(illegal);
