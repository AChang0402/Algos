// 229. Majority Element II

function majorityElement(nums){
    let x = Math.floor(nums.length/3)+1
    let count = {}
    let answer = []
    for (let i=0; i<nums.length; i++){
        if(nums[i] in count){
            count[nums[i]]++
        }
        else{
            count[nums[i]]=1
        }
        if (count[nums[i]]==x){
            answer.push(nums[i])
        }
    }
    return answer
}

let nums1 = [3,2,3]
console.log(majorityElement(nums1))
let nums2 = [1]
console.log(majorityElement(nums2))
