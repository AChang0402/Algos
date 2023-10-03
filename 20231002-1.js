// 1512. Number of Good Pairs

// function numIdenticalPairs (nums){
//     let seen = {}
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in seen){
//             seen[nums[i]]++
//         }
//         else{
//             seen[nums[i]]=1;
//         }
//     }
//     let totalPairs = 0
//     let pairsToAdd = 0
//     for (let key in seen){
//         if (seen[key]>1){
//             pairsToAdd = (seen[key]*(seen[key]-1))/2
//             totalPairs += pairsToAdd
//         }
//     }
//     return totalPairs
// }

function numIdenticalPairs (nums){
    let seen = {}
    let totalPairs = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i] in seen){
            seen[nums[i]]++
            totalPairs += seen[nums[i]]-1
        }
        else{
            seen[nums[i]]=1;
        }
    }
    return totalPairs
}

let nums1 = [1,2,3,1,1,3]
console.log(numIdenticalPairs(nums1))