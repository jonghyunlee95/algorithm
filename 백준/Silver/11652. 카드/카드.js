const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const map = new Map();
input = input.map((x) => BigInt(x));

for (let i = 0; i < T; i++) {
  if (!map.has(input[i])) map.set(input[i], 0);
  else map.set(input[i], map.get(input[i]) + 1);
}

const answer = [...map].sort((a, b) => {
  if (b[1] < a[1]) return -1;
  else if (b[1] > a[1]) return 1;
  else {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    else return 0;
  }
});
console.log(answer[0][0].toString());
