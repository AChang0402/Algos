// 70. Climbing Stairs

// 5p2

// function climbStairs(n) {
//     let count = 0
//     let x = n;
//     let y = 0;
//     while (x >= 0) {
//         let perm = 1
//         console.log("x:",x,"y:",y)
//         if(x==0||y==0){
//             count++
//         }
//         else if(x+y>1){
//             perm = ((x+y)*(x+y-1))
//             count += perm/2
//         }
//         console.log("count:",count)
//         x-=2
//         y++
//     }
//     return count
// }
function climbStairs(n) {
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    let onebehind = 2
    let twobehind = 1
    let i=2
    while (i<n){
        i++
        if(i==n){
            return onebehind+twobehind
        }
        else{
            [twobehind, onebehind] = [onebehind, twobehind+onebehind]
        }
    }
}

let n1=2
console.log(climbStairs(n1))
let n2=3
console.log(climbStairs(n2))
let n3=4
console.log(climbStairs(n3))
let n4=5
console.log(climbStairs(n4))