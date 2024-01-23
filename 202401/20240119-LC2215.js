// 2215. Find the Difference of Two Arrays


function findDifference(nums1, nums2){
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    for(let num of set1){
        if(set2.delete(num)==true){
            set1.delete(num)
        }
    }
    return [[...set1],[...set2]]
}

let nums11 = [1,2,3]
let nums12 = [2,4,6]
console.log(findDifference(nums11, nums12))

// function findDifference(nums1, nums2){
//     let hash1 = {}
//     let hash2 = {}
//     let distinct1 = []
//     let distinct2 = []
//     for (let x = 0; x<nums1.length; x++){
//         console.log(nums1[x])
//         if(!hash1.hasOwnProperty(nums1[x])){
//             hash1[nums1[x]]=0
//         }
//     }
//     for (let y=0; y<nums2.length; y++){
//         console.log(nums2[y])
//         if(!hash2.hasOwnProperty(nums2[y])){
//             hash2[nums2[y]]=0
//         }
//     }
//     console.log(hash1, hash2)
//     for (let i=0; i<nums2.length; i++){
//         if(!hash1.hasOwnProperty(nums2[i])){
//             distinct2.push(nums2[i])
//             hash1[nums2[i]]=0
//         }
//     }
//     for (let i=0; i<nums1.length; i++){
//         if(!hash2.hasOwnProperty(nums1[i])){
//             distinct1.push(nums1[i])
//             hash2[nums1[i]]=0
//         }
//     }
//     return [distinct1, distinct2]
// }