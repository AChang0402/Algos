// 456. 132 Pattern

// function find132pattern (nums) {
//     let i=0;
//     let k=nums.length-1
//     for (let i=0; i<nums.length-2; i++){
//         for (let k=nums.length-1; k>i+1; k--){
//             if(nums[k]>nums[i]){
//                 for (let j=i+1; j<k; j++){
//                     if (nums[j]>nums[k]){
//                         return true;
//                     }
//                 }
//             }
//         }
//     }
//     return false;
// }

function find132pattern (nums) {
    let i=0;
    let k=nums.length-1
    for (let i=0; i<nums.length-2; i++){
        while(nums[i+1]<=nums[i]){
            i++;
        }
        for (let k=nums.length-1; k>i+1; k--){
            if(nums[k]>nums[i]){
                for (let j=i+1; j<k; j++){
                    if (nums[j]>nums[k]){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

let nums1 = [1,2,3,4]
console.log(find132pattern(nums1))
let nums2 = [3,1,4,2]
console.log(find132pattern(nums2))
let nums3 = [-1,3,2,0]
console.log(find132pattern(nums3))
let nums4 = [2,1]
console.log(find132pattern(nums4))