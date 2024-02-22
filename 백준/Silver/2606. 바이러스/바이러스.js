const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const n = +input[0];
const m = +input[1];
const graph = [];

for (let i = 1; i <= n; i++) graph[i] = [];

for (let i = 2; i <= m + 1; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visited = new Array(n + 1).fill(false);

const dfs = (x) => {
  visited[x] = true;
  cnt++;

  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
};

dfs(1);

console.log(cnt - 1);
