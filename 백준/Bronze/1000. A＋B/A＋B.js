const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);
console.log(A+B);