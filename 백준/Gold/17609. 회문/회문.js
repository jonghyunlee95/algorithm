const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = [];

function valid(str) {
  if (str === str.split('').reverse().join('')) return true;
  else return false;
}

for (let i = 0; i < T; i++) {
  const str = input[i];
  if (valid(str)) answer.push(0);
  else {
    const num = str.length;
    let bool = false;

    for (let j = 0; j < parseInt(num / 2); j++) {
      if (str[j] !== str[num - j - 1]) {
        if (valid(str.slice(0, j) + str.slice(j + 1, num))) bool = true;
        if (valid(str.slice(0, num - j - 1) + str.slice(num - j, num))) bool = true;
        break;
      }
    }
    if (bool) answer.push(1);
    else answer.push(2);
  }
}

console.log(answer.join('\n'));
