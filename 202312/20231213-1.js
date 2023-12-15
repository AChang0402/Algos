// 283. Move Zeroes

function moveZeroes(nums){
    let i=0;
    let j=i+1;
    while (j<nums.length){
        if(nums[i]!==0){
            i++
            j++
        }
        else{
            if(nums[j]!==0){
                [nums[i],nums[j]]=[nums[j],nums[i]]
                i++
            }
            j++
        }
    }
}


//first attempt: slow
// function moveZeroes(nums){
//     let x=0
//     let y=nums.length-1
//     while (x<y){
//         if (nums[x]==0){
//             let i=x
//             while(i<y){
//                 [nums[i],nums[i+1]] = [nums[i+1],nums[i]]
//                 i++
//             }
//             y--
//         }
//         else{
//             x++
//         }
//     }
// }

let nums1 = [0,0,1]
moveZeroes(nums1)
let nums2 = [0,1,0,3,12]
moveZeroes(nums2)
