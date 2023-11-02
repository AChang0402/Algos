// 69. Sqrt(x)

function mySqrt (x){
    let i=0
    while((i*i<=x)){
        i++
    }
    return i-1
}

let x1=4
console.log(mySqrt(x1))
let x2=8
console.log(mySqrt(x2))

