// 1004. Max Consecutive Ones III
function longestOnes(nums, k){
    let start = 0;
    let end = 0;
    let count0s = 0
    let max1s = 0
    while (end<nums.length){
        if(nums[end]==0){
            count0s++
            if(count0s>k){
                while(nums[start]==1 && start<end){
                    start++
                }
                start++
            }
        }
        max1s = Math.max(max1s, end-start+1)
        end++
    }
    return max1s
}

let nums1 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
let k1 = 3
console.log(longestOnes(nums1, k1))