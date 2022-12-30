function solution(nums) {
    let arr1 = [];
    let arr2 = []; 
    let answer = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = [];
                
                sum.push(nums[i] + nums[j] + nums[k]);
                
                if (sum[0] % 2 !== 0) arr1.push(sum[0]);
                
                for (let m = 1; m <= arr1[0]; m++) {
                    if (arr1[0] % m === 0) arr2.push(m);
                }
                
                if (arr2.length === 2) answer++;
                
                arr1 = [];
                arr2 = [];
            }
        }
    }
    
    
    
    return answer;
}