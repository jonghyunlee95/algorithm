function solution(nums) {
    const obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1  
    }
    
    const arr = Object.entries(obj);
    
    if (nums.length / 2 > arr.length) return arr.length;
    else if (nums.length / 2 < arr.length) return nums.length / 2;
    else return arr.length;
}