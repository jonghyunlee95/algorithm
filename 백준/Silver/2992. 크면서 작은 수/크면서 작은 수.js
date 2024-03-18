const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');

const visited = new Array(input.length).fill(false);
const answer = [];

const dfs = (num, cnt) => {
  if (cnt === input.length && +input.join('') < +num) {
    answer.push(num);
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

answer.length ? console.log(Math.min(...answer.map(Number))) : console.log(0);
