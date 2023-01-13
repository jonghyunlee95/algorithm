function solution(s) {
    const answer = [];
    const arr1 = s.replace('{{', '').replace('}}', '').split('},{');
    const obj = {};
    
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].split(',')   
        for (let j = 0; j < arr1[i].length; j++) {
            obj[arr1[i][j]] = (obj[arr1[i][j]] || 0) + 1;
        }
    }
    const arr2 = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    for (let k = 0; k < arr2.length; k++) {
        answer.push(Number(arr2[k][0]));
    }
    
    return answer;
}