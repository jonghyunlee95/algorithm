function solution(today, terms, privacies) {
    const answer = [];
    const map = new Map();
    const day = today.split('.').map(Number);
    const daySum = (day[0] * 12 * 28) + (day[1] * 28) + day[2];
    
    for (let i = 0; i < terms.length; i++) {
        const arr = terms[i].split(' ');
        map.set(arr[0], +arr[1]);
    }
    
    for (let i = 0; i < privacies.length; i++) {
        const arr = privacies[i].split('.');
        const alpabet = arr[2].split(' ')
        const sum = (arr[0] * 12 * 28) + (arr[1] * 28) + +alpabet[0] + (map.get(alpabet[1]) * 28);

        if (daySum >= sum) answer.push(i + 1);
    }
    return answer;
}