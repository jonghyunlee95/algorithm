const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();
const PI = Math.PI;

console.log((input * input * PI).toFixed(6));
console.log((input * input * 2).toFixed(6));
