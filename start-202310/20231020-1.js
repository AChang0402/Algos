// 1425. Constrained Subsequence Sum


// non-working attempt
function constrainedSubsetSum(nums, k){
    var i=0;
    var end = nums.length-1;
    while (nums[i]<=0){
        i++
    }
    while(nums[end]<=0){
        end--
    }
    console.log(i,end)
    if (i>end){
        return Math.max(...nums)
    }
    let lastK = [nums[i]]
    for (i+=1; i<k && i<=end; i++){
        // console.log(nums[i])
        lastK.push(Math.max(Math.max(...lastK)+nums[i], nums[i]))
        // console.log(lastK)
    }
    for(i; i<=end; i++){
        // console.log(Math.max(...lastK))
        lastK.push(Math.max(...lastK)+nums[i])
        lastK.shift();
        // console.log(lastK)
    }
    return Math.max(...lastK)
}


let nums1 = [-8269,3217,-4023,-4138,-683,6455,-3621,9242,4015,-3790]
console.log(constrainedSubsetSum(nums1,1))

