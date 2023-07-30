// 67. Add Binary

function addBinary(A,B){
    let arrA = A.split("")
    let arrB = B.split("")
    let total = []
    let sum = 0
    let carryover=0
    let digitA = 0
    let digitB = 0
    while(arrA.length>0 || arrB.length>0){
        if(arrA.length==0){
            digitA = 0
        }
        else{
            digitA = Number(arrA[arrA.length-1])
        }
        if(arrB.length==0){
            digitB = 0
        }
        else{
            digitB = Number(arrB[arrB.length-1])
        }
        sum = digitA+digitB+carryover
        if(sum<2){
            total = [sum, ...total]
            carryover = 0
        }
        else{
            total = [sum-2, ...total]
            carryover = 1
        }
        arrA.pop()
        arrB.pop()
    }
    if (carryover>0){
        total = [carryover, ...total]
    }
    return total.join('')
}

// let a1="11"
// let b1="1"
// console.log(addBinary(a1,b1))
let a2="1010"
let b2="1011"
console.log(addBinary(a2,b2))