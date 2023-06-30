function solution(numbers) {
    const answer = [];
    const arr = numbers.split('');
    
    function isPrimeNum(num) {
        if (num <= 1) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }    
    
    function dfs(arr, fix) {
        if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                let newFix = fix + arr[i];
                let newArr = arr.slice();
            
                newArr.splice(i, 1);
                if (!answer.includes(+newFix) && isPrimeNum(+newFix)) answer.push(+newFix);
                dfs(newArr, newFix);
            }    
        }           
    }   
    
    dfs(arr, '');
    
    return answer.length;
}
         
