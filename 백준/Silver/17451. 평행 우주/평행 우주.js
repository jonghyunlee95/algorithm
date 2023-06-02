const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input[0].split(' ').map(Number).reverse();
let speed = arr[0];

for (let i = 0; i < T; i++) {
  if (speed > arr[i]) {
    if (speed % arr[i] === 0) continue;
    else speed = Math.floor(speed / arr[i] + 1) * arr[i];
  } else {
    speed = arr[i];
  }
}

console.log(speed);
