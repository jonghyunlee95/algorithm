const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');
let answer = '';
let stack = [];
let bool = true;

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'X') {
    stack.push(input[i]);
  } else if (input[i] === '.') {
    if (stack.length !== 0) {
      valid(stack.join(''));
      stack = [];
    }
    valid(input[i]);
  }
}

if (stack.length !== 0) {
  valid(stack.join(''));
}

function valid(str) {
  if (str === '.') {
    answer += '.';
  } else if (str.length >= 4) {
    answer += 'AAAA'.repeat(parseInt(str.length / 4));
    if ((str.length % 4) % 2 === 0) {
      answer += 'BB'.repeat((str.length % 4) / 2);
    } else {
      bool = false;
    }
  } else if (str.length < 4) {
    if (str.length >= 2 && str.length % 2 === 0) {
      answer += 'BB'.repeat(str.length / 2);
    } else {
      bool = false;
    }
  }
}

if (bool) console.log(answer);
else console.log(-1);
