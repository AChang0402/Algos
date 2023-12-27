// 724. Find Pivot Index

function pivotIndex(nums){
    totalSum = 0
    for (let i=0; i<nums.length; i++){
        totalSum += nums[i]
    }
    let leftSum = 0
    if(totalSum-nums[0]==leftSum){
        return 0
    }
    for(let j=1; j<nums.length; j++){
        leftSum += nums[j-1]
        if (leftSum == totalSum - leftSum - nums[j]){
            return j
        }
    }
    return -1
}

let nums1 = [1,7,3,6,5,6]
console.log(pivotIndex(nums1))