// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

var maxProductDifference = function(nums) {

    let max1
    let max2
    let min1
    let min2

    if (nums[0]>nums[1]){
        max1=nums[0]
        max2=nums[1]
        min1=nums[1]
        min2=nums[0]
    }
    else {
        max2=nums[0]
        max1=nums[1]
        min2=nums[1]
        min1=nums[0]
    }

    for(let i = 2; i<nums.length; i++){
        if(nums[i] > max2){
            if(nums[i] > max1){
                max2 = max1
                max1 = nums[i]
            }
            else {
                max2 = nums[i]
            }
        }

        if(nums[i] < min2){
            if(nums[i] < min1){
                min2 = min1
                min1 = nums[i]
            }
            else {
                min2 = nums[i]
            }    
        }
    }
    return max1 * max2 - min1 * min2 
};


var maxProductDifference = function(nums) {
    let max=nums[0]*nums[1];
    let min=nums[0]*nums[1];
    for (let i=0; i<nums.length-1; i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i]*nums[j]>max){
                max = nums[i]*nums[j]
            }
            else if (nums[i]*nums[j]<min){
                min = nums[i]*nums[j]
            }
        }
    }
    return max-min;
};



console.log(maxProductDifference([4,2,5,9,7,4,8]));