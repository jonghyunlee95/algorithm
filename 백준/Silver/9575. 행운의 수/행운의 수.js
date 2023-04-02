const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();

for (let i = 0; i < T; i++) {
  const arr = input.splice(0, 6);
  const A = arr[1].split(' ');
  const B = arr[3].split(' ');
  const C = arr[5].split(' ');
  const set = new Set();

  for (let j = 0; j < A.length; j++) {
    for (let k = 0; k < B.length; k++) {
      for (let l = 0; l < C.length; l++) {
        const Num = String(+A[j] + +B[k] + +C[l]).split('');
        if (!Num.includes('0') && !Num.includes('1') && !Num.includes('2') && !Num.includes('3') && !Num.includes('4') && !Num.includes('6') && !Num.includes('7') && !Num.includes('9')) {
          set.add(Num.join());
        }
      }
    }
  }
  console.log(set.size);
}
