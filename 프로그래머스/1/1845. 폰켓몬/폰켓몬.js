function solution(nums) {
    const pocketmon = [...new Set(nums)];
    
    return pocketmon.length < nums.length / 2 ? pocketmon.length: nums.length / 2
}