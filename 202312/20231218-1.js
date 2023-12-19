// 1679. Max Number of K-Sum Pairs

function maxOperations (nums, k){
    nums = nums.sort((x,y)=>(x-y))
    let start = 0
    let end = nums.length-1
    let count = 0
    while(start<end){
        if(nums[start]+nums[end]<k){
            start++
        }
        else if(nums[start]+nums[end]>k){
            end--
        }
        else{
            count++
            start++
            end--
        }
    }
    return count
}


let nums1 = [3,1,3,4,3]
let k1 = 6
console.log(maxOperations(nums1, k1))

let nums2 = [1,2,3,4]
let k2= 5
console.log(maxOperations(nums2, k2))