const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
input = input.map((x) => x.split(' '));
const queue = [];
const answer = [];

for (let i = 0; i < T; i++) {
  if (input[i][0] === 'push') {
    queue.push(input[i][1]);
  } else if (input[i][0] === 'pop') {
    if (queue.length !== 0) {
      answer.push(queue.shift());
    } else {
      answer.push(-1);
    }
  } else if (input[i][0] === 'size') {
    answer.push(queue.length);
  } else if (input[i][0] === 'empty') {
    if (queue.length !== 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if (input[i][0] === 'front') {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[0]);
    }
  } else if (input[i][0] === 'back') {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[queue.length - 1]);
    }
  }
}

console.log(answer.join('\n'));
