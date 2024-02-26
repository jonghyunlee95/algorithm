const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const dfs = (graph, n, m, x, y) => {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

  if (graph[x][y] === 1) {
    graph[x][y] = -1;

    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);

    return true;
  }

  return false;
};

let testCases = +input[0];
let line = 1;

while (testCases--) {
  const [m, n, k] = input[line].split(' ').map(Number);
  const graph = [];

  for (let i = 0; i < n; i++) graph[i] = new Array(m).fill(0);

  for (let i = 1; i <= k; i++) {
    const [y, x] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1;
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++;
    }
  }

  line += k + 1;
  console.log(answer);
}
