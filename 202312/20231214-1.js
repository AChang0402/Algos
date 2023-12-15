// 11. Container With Most Water

function maxArea(height){
    let i = 0;
    let j = height.length-1
    let max = 0;
    while (i<j){
        max = Math.max(max, (j-i)*Math.min(height[i],height[j]))
        if(height[i]<height[j]){
            i++
        }
        else{
            j--
        }
    }
    return max
}

let height1 = [1,1]
console.log(maxArea(height1))