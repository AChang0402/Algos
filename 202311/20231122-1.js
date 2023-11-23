// 238. Product of Array Except Self

function productExceptSelf (nums){
    let productNoZeros = 1
    let countZeros = 0
    for (let i=0; i<nums.length; i++){
        if(nums[i]==0){
            countZeros++
        }
        else{
            productNoZeros *= nums[i]
        }
    }
    if (countZeros >= 2){
        return Array(nums.length).fill(0)
    }
    else{
        var answer = []
        for (let j=0; j<nums.length; j++){
            if(countZeros == 1){
                if(nums[j]!==0){
                    answer.push(0)
                }
                else{
                    answer.push(productNoZeros)
                }
            }
            else{
                answer.push(productNoZeros/nums[j])
            }
        }
    }
    return answer;
}

let nums1 = [-1,1,0,-3,3]
console.log(productExceptSelf(nums1))