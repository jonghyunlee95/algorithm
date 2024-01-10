function solution(n) {
    const num = n.toString(2).split('').filter(x => x === '1').length;

    while(true) {
        n++;
        const nNum = n.toString(2).split('').filter(x => x === '1').length;
        
        if (nNum === num) return n;
    }
}