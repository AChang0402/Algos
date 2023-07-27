// 26. Remove Duplicates from Sorted Array

function removeDuplicates (nums) {
    let x = 0;
    for (let i=1; i<nums.length; i++){
        if (nums[i]!=nums[x]){
            x++
            nums[x]=nums[i]
        }
    }
    return x+1
}

let nums1 = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums1)
console.log(nums1)