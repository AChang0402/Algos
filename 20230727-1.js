// 27. Remove Element

function removeElement(nums, val){
    let x=0;
    for (let i=0; i<nums.length; i++){
        if (nums[i]!=val){
            nums[x]=nums[i]
            x++
        }
    }
    return x
}

let nums1 = [3,2,2,3]
console.log(removeElement(nums1, 3))
console.log(nums1)

let nums2 = [0,1,2,2,3,0,4,2]
console.log(removeElement(nums2, 2))
console.log(nums2)
