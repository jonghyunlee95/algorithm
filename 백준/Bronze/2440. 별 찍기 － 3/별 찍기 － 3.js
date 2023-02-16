const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();

for (let i = input; i > 0; i--) {
    console.log('*'.repeat(i));
}