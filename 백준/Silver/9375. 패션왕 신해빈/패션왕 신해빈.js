const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = [];

for (let i = 0; i < T; i++) {
  const map = new Map();
  const T = +input.shift();
  const arr = input.splice(0, T).map((x) => x.split(' '));

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i][1])) map.set(arr[i][1], map.get(arr[i][1]) + 1);
    else map.set(arr[i][1], 1);
  }

  let sum = 1;

  for (const value of map.values()) {
    sum *= value + 1;
  }
  answer.push(sum - 1);
}

console.log(answer.join('\n'));
