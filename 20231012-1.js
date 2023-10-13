// 746. Min Cost Climbing Stairs

// function minCostClimbingStairs(costs){
//     let i=-1;
//     let cost = 0;
//     while (i<costs.length-2){
//         if(costs[i+2]>costs[i+1]){
//             cost += costs[i+1]
//         }
//         else{
//             cost += costs[i+2]
//         }
//         i++
//     }
//     return cost
// }

function minCostClimbingStairs(cost) {
    for (let i = 2; i<cost.length; i++)
        cost[i] += Math.min(cost[i-1], cost[i-2])
    return Math.min(cost[cost.length-1], cost[cost.length-2])
};

let costs1=[10,15,20]
console.log(minCostClimbingStairs(costs1))