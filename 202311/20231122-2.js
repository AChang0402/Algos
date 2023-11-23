// 334. Increasing Triplet Subsequence

function increasingTriplet(nums) {
    let first = nums[0]
    let second = Infinity
    for (let i=1; i<nums.length; i++){
        if (nums[i]>first && nums[i]>second){
            return true;
        }
        else if(nums[i]<=first){
            first = nums[i]
        }
        else if(nums[i]<=second){
            second = nums[i]
        }
    }
    return false;
}

let nums1 = [1,1,-2,6]
console.log(increasingTriplet(nums1))
