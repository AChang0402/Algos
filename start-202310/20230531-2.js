// You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

// You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    var sec = 0

    while(amount[0] > 0 || amount[1] > 0 || amount[2] > 0){
        if(amount[0] >= amount[1]){
            amount[0]--
            if(amount[1] >= amount[2]){
                amount[1]--
            }
            else{
                amount[2]--
            }
            sec++
        }
        else{
            amount[1]--
            if(amount[0] >= amount[2]){
                amount[0]--
            }
            else{
                amount[2]--
            }
            sec++
        }
    }
    return sec
};

// Another solution from LeetCode
var fillCups = function (amount) {
    // const maxValue = Math.max(amount[0], Math.max(amount[1], amount[2]));
    const maxValue = Math.max(amount[0], amount[1], amount[2]);
    const totalSum = amount[0] + amount[1] + amount[2];
    // return (maxValue >= totalSum - maxValue) ? maxValue : (Math.floor(totalSum / 2) + totalSum % 2);
    return (maxValue >= totalSum - maxValue) ? maxValue : Math.ceil(totalSum / 2);
};



console.log(fillCups([1,4,2])) //4
console.log(fillCups([5,4,4])) //7