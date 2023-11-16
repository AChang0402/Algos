// 1980. Find Unique Binary String

function findDifferentBinaryString(nums){
    nums.sort((a,b)=>a-b)
    let n = nums[0].length
    let answer = "0".repeat(n)
    if(nums[0]!==answer){
        return answer;
    }
    for (let i=1; i<nums.length; i++){
        let previous = nums[i-1]
        let position = n-1
        while (previous[position]!=="0" && position>=0){
            position--
        }
        answer = previous.substring(0,position)+"1"+"0".repeat(n-position-1)
        if(nums[i]!==answer){
            return answer;
        }
    }
    return "1".repeat(n)
}

// function setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//     return str.substring(0,index) + chr + str.substring(index+1);
// }


let nums1 = ["00","01"]
console.log(findDifferentBinaryString(nums1))