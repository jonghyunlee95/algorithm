const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +require('fs').readFileSync(filePath).toString().trim();
const A = 300;
const B = 60;
const C = 10;
const button = new Array(3).fill(0);

button[0] = Math.floor(input / A);
input = input % A;

button[1] = Math.floor(input / B);
input = input % B;

button[2] = Math.floor(input / C);
input = input % C;

if (input !== 0) console.log(-1);
else console.log(button.join(' '));
