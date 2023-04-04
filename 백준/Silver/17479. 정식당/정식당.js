const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift().split(' ').map(Number);
const normal = new Map();
const normalMenu = input
  .splice(0, T[0])
  .map((x) => x.split(' '))
  .map((x) => normal.set(x[0], +x[1]));
const special = new Map();
const specialMenu = input
  .splice(0, T[1])
  .map((x) => x.split(' '))
  .map((x) => special.set(x[0], +x[1]));
const service = new Set(input.splice(0, T[2]));
const orderNum = +input.shift();
let sum1 = 0;
let sum2 = 0;
const arr1 = [];
const arr2 = [];
const arr3 = [];

for (let i = 0; i < orderNum; i++) {
  if (normal.has(input[i])) arr1.push(input[i]);
  if (special.has(input[i])) arr2.push(input[i]);
  if (service.has(input[i])) arr3.push(input[i]);
}

for (let i = 0; i < orderNum; i++) {
  if (normal.has(input[i])) sum1 += normal.get(input[i]);
  else if (special.has(input[i])) sum2 += special.get(input[i]);
}

let answer = 'Okay';

if (sum1 < 20000 && arr2.length > 0) {
  answer = 'No';
} else {
  if (sum1 + sum2 < 50000 && arr3.length > 0) {
    answer = 'No';
  } else if (arr3.length > 1) {
    answer = 'No';
  }
}

console.log(answer);
