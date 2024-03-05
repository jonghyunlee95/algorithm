const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const visited = Array(+n).fill(false);
const set = new Set();

const dfs = (num, cnt) => {
  if (cnt === +k) {
    set.add(num);
    return;
  }

  for (let i = 0; i < input.length; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    dfs(num + input[i], cnt + 1);
    visited[i] = false;
  }
};

dfs('', 0);
console.log(set.size);
