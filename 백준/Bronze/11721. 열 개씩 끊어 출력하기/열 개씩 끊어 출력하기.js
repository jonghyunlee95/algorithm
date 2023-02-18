const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');

const num = Math.ceil(input.length / 10);

for (let i = 0; i < num; i++) {
  console.log(input.splice(0, 10).join(''));
}
