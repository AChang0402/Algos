// 779. K-th Symbol in Grammar

// first attempt

// function kthGrammar(n,k){
//     if (n==1){
//         return 0
//     }
//     let code = "01"
//     let row = 2
//     while (row<n){
//         // let righthalf = code.replaceAll('0','2').replaceAll('1','0').replaceAll('2','1')
//         code = code + code.replaceAll('0','2').replaceAll('1','0').replaceAll('2','1')
//         row++
//     }
//     return code[k-1]
// }

function kthGrammar(n,k){
    let digits = 2**(n-1)
    let answer = 0
    while (n>1){
        if (k>digits/2){
            answer==0? answer++: answer--
            k=k-digits/2
        }

        digits = digits/2
        n--
    }
    return answer
}


console.log(kthGrammar(3,4))

// 1 0
// 2 01
// 3 0110
// 4 01101001
// 5 0110100110010110
// 6 01101001100101101001011001101001