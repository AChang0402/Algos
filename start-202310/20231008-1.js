// 34. Find First and Last Position of Element in Sorted Array

// function searchRange(nums, target){
//     let i = Math.floor((nums.length-1)/2)
//     while (nums[i] !== target || i!==nums.length-1 || i!==0){
//         if(nums[i]>target){
//             i=Math.floor(i/2)
//         }
//         else if (nums[i]<target){
//             i=Math.ceiling((nums.length-1+i)/2)
//         }
//     }
// }

function searchRange(nums, target){
    let i = nums.indexOf(target)
    if (i==-1){
        return [-1,-1]
    }
    let answer = [i]
    i++
    while(nums[i]==target){
        i++
    }
    answer.push(i-1)
    return answer;
}

let nums1=[5,7,7,8,8,10]
console.log(searchRange(nums1, 8))