// 1877. Minimize Maximum Pair Sum in Array

function minPairSum(nums){
    nums.sort((a,b)=>a-b)
    let i=0
    let j=nums.length-1
    let minMaxPair = 0
    while(i<j){
        minMaxPair = Math.max(minMaxPair,nums[i]+nums[j])
        i++
        j--
    }
    return minMaxPair
}

let nums1 = [3,5,2,3]
console.log(minPairSum(nums1))