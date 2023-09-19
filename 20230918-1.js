// 88. Merge Sorted Array

function merge(nums1, m, nums2, n){
    let i=0;
    nums1.splice(m, n)
    while(i<nums1.length){
        if(nums1[i]>nums2[0]){
            nums1.splice(i, 0, nums2[0])
            nums2.shift();
        }
        i++
    }
    // nums1 = [...nums1, ...nums2]
    nums1.splice(i,0,...nums2)
    return nums1
}

let numbers1 = [1,2,3,0,0,0]
let numbers2 = [2,5,6]
// numbers1.splice(numbers1.length-numbers2.length, numbers2.length)
// console.log(numbers1)
console.log(merge(numbers1, 3, numbers2, 3));
