const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();

for (let i = 0; i < T; i++) {
  answer(input.splice(0, 4));
}

function answer(arr) {
  const T = +arr.shift();
  const map = new Map();
  const answer = [];
  arr = arr.map((x) => x.split(' '));

  for (let i = 0; i < T; i++) {
    map.set(arr[1][i], i);
  }

  for (let i = 0; i < map.size; i++) {
    answer.push(arr[2][map.get(arr[0][i])]);
  }

  console.log(answer.join(' '));
}
