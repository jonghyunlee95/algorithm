const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input.map((x) => x.trim().split(' '));
const answer = [];
const real = [];

for (let i = 0; i < T; i++) {
  if (arr[i][0] === 'push') {
    answer.push(arr[i][1]);
  } else if (arr[i][0] === 'pop') {
    if (answer.length === 0) {
      real.push(-1);
    } else {
      real.push(+answer.pop());
    }
  } else if (arr[i][0] === 'size') {
    real.push(answer.length);
  } else if (arr[i][0] === 'empty') {
    if (answer.length === 0) {
      real.push(1);
    } else {
      real.push(0);
    }
  } else if (arr[i][0] === 'top') {
    if (answer.length === 0) {
      real.push(-1);
    } else {
      real.push(+answer[answer.length - 1]);
    }
  }
}

console.log(real.join('\n'));
