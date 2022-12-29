function solution(nums) {
    const answer = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!answer.includes(nums[i])) answer.push(nums[i]);
        
    }
    if (answer.length > nums.length / 2) return nums.length / 2;
    
    
    return answer.length;
}