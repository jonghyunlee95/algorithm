const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = [];
let cnt = 0;

for (let i = 1; i <= input[0].length; i++) {
  const str = input[0].split('');
  const first = str.splice(0, i);

  arr.push(str.join('') + first.join(''));
}

for (let i = 0; i < input.length; i++) {
  if (!arr.includes(input[i])) {
    for (let j = 1; j <= input[i].length; j++) {
      const str = input[i].split('');
      const cutStr = str.splice(0, j);

      arr.push(str.join('') + cutStr.join(''));
    }
    cnt++;
  }
}

console.log(cnt + 1);
