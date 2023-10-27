// 4. Median of Two Sorted Arrays

// attempt 

function findMedianSortedArrays(nums1, nums2){
    if(nums1.length==0){
        return (nums2[Math.ceil(nums2.length/2-1)]+nums2[nums2.length-1-Math.ceil(nums2.length/2-1)])/2
    }
    if(nums2.length==0){
        return (nums1[Math.ceil(nums1.length/2-1)]+nums1[nums1.length-1-Math.ceil(nums1.length/2-1)])/2
    }
    if(nums1.length==1){
        if(nums1.length%2==1){
            if (nums1[0]<=nums2[Math.ceil(nums2.length/2-1)]){
                if(nums1[0]>=nums2[Math.ceil(nums2.length/2-1)-1]){
                    return (nums1[0]+nums2[nums2.length-1-Math.ceil(nums2.length/2-1)])/2
                }
                else{
                    return (nums2[nums2.length-1-Math.ceil(nums2.length/2-1)-1]+nums2[nums2.length-1-Math.ceil(nums2.length/2-1)])/2
                }
            }
            else if(nums1[0]>=nums2[Math.ceil(nums2.length/2-1)]){
                if(nums1[0]<=nums2[Math.ceil(nums2.length/2-1)+1]){
                    return (nums1[0]+nums2[nums2.length-1-Math.ceil(nums2.length/2-1)])/2
                }
                else{
                    return (nums2[nums2.length-1-Math.ceil(nums2.length/2-1)+1]+nums2[nums2.length-1-Math.ceil(nums2.length/2-1)])/2
                }
            }
        }
    }

    let totalLength = nums1.length+nums2.length
    let left1 = 0
    let right1 = nums1.length-1
    let left2 = 0
    let right2 = nums2.length-1
    let count = 0;
    let stopPoint = Math.ceil(totalLength/2-1)

    while(left1 !== right1 && left2 !== right2){
        if (nums1[left1+1]<=nums2[left2+1]){
            left1++
            var medLeft = nums1[left1]
        }
        else{
            left2++
            var medLeft = nums2[left2]
        }
        if (nums1[right1-1]>=nums2[right2-1]){
            right1--
            var medRight = nums1[right1]
        }
        else{
            right2--
            var medRight = nums2[right2]
        }
        count++
        if (count == stopPoint){
            return (medLeft+medRight)/2
        }
    }
    if (left1 == right1){
        while(count<stopPoint){
            left2++
            right2--
            count++
        }
        return (nums2[left2]+nums2[right2])/2
    }
    else if(left2 == right2){
        while(count<stopPoint){
            left1++
            right1--
            count++
        }
        return (nums1[left1]+nums1[right1])/2
    }
}

// let array1 = [1,3,5]
// let array2 = [2,4,6]
// console.log(findMedianSortedArrays(array1,array2))

// let array3 = [1,3,5,6]
// let array4 = [0,2,4,6,7]
// console.log(findMedianSortedArrays(array3,array4))

let array5 = [3]
let array6 = [-2,-1]
console.log(findMedianSortedArrays(array5,array6))

