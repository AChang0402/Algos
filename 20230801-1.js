// 77. Combinations

// Backtracking



// Solution from LeetCode

var combine = function(n, k) {
    
    result = []
    //-----------------------------------
    var comb = function(start, curComb ){
        
        // Base case:
        if(curComb.length == k){
            result.push( [...curComb] ) ;
            return;
        }
        
        // General cases:
        for(let i = start; i <= n ; i++){
            curComb.push( i );
            comb(i+1, curComb );
            curComb.pop()
        }
        return
    }
    //-----------------------------------
    comb(start=1, curComb=[]);
    return result;
};

// let n1=4
// let k1=2
// console.log(combine(n1,k1))
// let n2=1
// let k2=1
// console.log(combine(n2,k2))
let n3=5
let k3=3
console.log(combine(n3,k3))


// function combine(n,k){
//     let perms = 1
//     for (let i=n;i>k;i--){
//         perms *= i
//     }
//     let permstocombos = 1
//     for (let j=n-k; j>0; j--){
//         permstocombos *= j
//     }
//     return perms / permstocombos
// }