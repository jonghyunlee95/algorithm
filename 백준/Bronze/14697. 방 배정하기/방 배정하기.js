const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C, D] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const arrA = [];
const arrB = [];
const arrC = [];
let answer = 0;

for (let i = 1; i <= Math.floor(D / A); i++) {
  arrA.push(A * i);
}

for (let i = 1; i <= Math.floor(D / B); i++) {
  arrB.push(B * i);
}

for (let i = 1; i <= Math.floor(D / C); i++) {
  arrC.push(C * i);
}

for (let i = 0; i < arrA.length; i++) {
  for (let j = 0; j < arrB.length; j++) {
    for (let k = 0; k < arrC.length; k++) {
      if (arrA[i] + arrB[j] + arrC[k] === D) answer = 1;
    }
  }
}

console.log(answer);
