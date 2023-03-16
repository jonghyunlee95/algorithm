function solution(nums) {
    const variaty = new Set(nums);
    const getPoketmon = nums.length / 2;
    
    if (variaty.size > getPoketmon) return getPoketmon;
    else return variaty.size;
}