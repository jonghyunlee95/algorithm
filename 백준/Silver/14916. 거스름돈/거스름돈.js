const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const answer = [];

for (let i = 0; i <= parseInt(input / 5); i++) {
  for (let j = 0; j <= parseInt(input / 2); j++) {
    if (i * 5 + j * 2 === input) {
      answer.push(i + j);
      break;
    }
  }
}

if (answer.length === 0) console.log(-1);
else console.log(Math.min(...answer));
