const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().split('\n');

for (let i = 0; i < +T; i++) {
  const [X1, Y1, R1, X2, Y2, R2] = input[i].split(' ').map((x) => +x);
  const D = Math.sqrt(Math.pow(X1 - X2, 2) + Math.pow(Y1 - Y2, 2));

  if (D === 0) {
    if (R1 === R2) console.log(-1);
    else console.log(0);
  } else {
    if (D > Math.abs(R1 - R2) && D < R1 + R2) console.log(2);
    else if (D === R1 + R2) console.log(1);
    else if (D > R1 + R2) console.log(0);
    else if (D === Math.abs(R1 - R2)) console.log(1);
    else console.log(0);
  }
}
