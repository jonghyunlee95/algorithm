const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const distance = input[0].split(' ').map((x) => BigInt(x));
const pay = input[1].split(' ').map((x) => BigInt(x));
let answer = 0n;
let cheaper = pay[0];

for (let i = 0; i < distance.length; i++) {
  answer += cheaper * distance[i];

  if (cheaper > distance[i]) cheaper = distance[i];
}

console.log(String(answer));
