const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const nums = input[0].split(' ').map(Number);

function same(T, arr) {
  const answer = [];

  for (let i = 0; i < T; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        answer.push(j);
      }
    }
  }

  const map = new Map();
  const num = [];

  for (let k = 0; k < answer.length; k++) {
    if (!map.has(answer[k])) map.set(answer[k], 1);
    else map.set(answer[k], map.get(answer[k]) + 1);
  }

  for (const item of map) {
    if (item[1] === T) num.push(item[0]);
  }
  console.log(num.sort((a, b) => a - b).join('\n'));
}

same(T, nums);
