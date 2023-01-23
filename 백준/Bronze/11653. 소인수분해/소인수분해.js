const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +require('fs').readFileSync(filePath).toString();
const answer = [];

for (let i = 2; i <= input; i++) {
  while (input % i === 0) {
    input = input / i;
    answer.push(i);
  }
}

console.log(answer.join('\n'));
