const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const visited = new Array(N).fill(false);
let answer = 0;

const dfs = (day, weight) => {
  if (weight < 0) return;

  if (day === N) {
    answer = answer + 1;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    dfs(day + 1, weight + arr[i] - K);
    visited[i] = false;
  }
};

dfs(0, 0);
console.log(answer);