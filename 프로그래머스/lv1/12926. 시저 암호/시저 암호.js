function solution(s, n) {
    let answer = '';
    let arr = s.split('');
    
    for (let i = 0; i < arr.length; i++) {
        let ascii = arr[i].charCodeAt();
        
        if (ascii >= 65 && ascii <= 90) {
            ascii += n;
            if (ascii > 90) ascii -= 26;
        }
        if (ascii >= 97 && ascii <=122) {
            ascii += n;
            if (ascii > 122) ascii -= 26;
        }
        
        answer += String.fromCharCode(ascii);
    }
    
    return answer;
}