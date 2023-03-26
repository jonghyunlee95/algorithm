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
  const map1 = new Map();
  const map2 = new Map();
  const answer = [];
  arr = arr.map((x) => x.split(' '));

  for (let i = 0; i < T; i++) {
    map1.set(arr[0][i], i);
    map2.set(arr[1][i], i);
  }

  for (let i = 0; i < map2.size; i++) {
    answer.push(arr[2][map2.get(arr[0][i])]);
  }

  console.log(answer.join(' '));
}
