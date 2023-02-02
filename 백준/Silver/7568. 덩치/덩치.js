const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [T, ...input] = require('fs').readFileSync(filePath).toString().split('\n');
input = input.map((x) => x.split(' ').map((x) => +x));

for (let i = 0; i < T; i++) {
  const arr = [...input.filter((x) => input[i][0] < x[0] && input[i][1] < x[1])];

  console.log(arr.length + 1);
}
