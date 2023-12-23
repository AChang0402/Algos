// 1493. Longest Subarray of 1's After Deleting One Element

function longestSubarray (nums){
    let start = 0;
    let end = 0;
    let count0s = 0
    let max1s = 0
    let has0 = false;
    while (end<nums.length){
        if(nums[end]==0){
            count0s++
            has0 = true
            if(count0s>1){
                while(nums[start]==1 && start<end){
                    start++
                }
                start++
                count0s--
            }
        }
        max1s = Math.max(max1s, end-start+1-count0s)
        end++
    }
    
    return has0? max1s: max1s-1
}

let nums1 = [1,1,1]
console.log(longestSubarray(nums1))
