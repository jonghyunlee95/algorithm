const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('-');
input = input.map((x) => x.split('+'));

const arr = [];

for (let i = 0; i < input.length; i++) {
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    sum += +input[i][j];
  }
  arr.push(sum);
}

let answer = arr[0];

for (let i = 1; i < arr.length; i++) {
  answer -= arr[i];
}
console.log(answer);
