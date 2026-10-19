class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hobbyMap = new Map();

        for(var i=0;i<nums.length;i++){
            if (!hobbyMap.has(nums[i])) {
                hobbyMap.set(nums[i], 1); 
            }else {
                return true;
            }

        }
        return false;
    }
}
