// 35. Search Insert Position

function searchInsert (nums, target){
    if(target<nums[0]){
        return 0
    }
    for (let i=0; i<nums.length; i++){
        if (nums[i]==target){
            return i
        }
        else if(nums[i]<target){
            if (i+1 == nums.length || nums[i+1]>target){
                return i+1
            }
        }
    }
    return nums.length
}

let nums1 = [1,3,5,6]
console.log(searchInsert(nums1,5))
let nums2 = [1,3,5,6]
console.log(searchInsert(nums2,2))
let nums3 = [1,3,5,6]
console.log(searchInsert(nums3,7))