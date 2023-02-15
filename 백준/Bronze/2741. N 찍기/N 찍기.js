const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const answer = [];

for (let i = 1; i <= input; i++) {
  answer.push(i);
}

console.log(answer.join('\n'));
