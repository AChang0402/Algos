// Reverse Integer

function reverse(x){
    if(x==0){
        return 0;
    }
    else if(x<0){
        x=-x
        var neg = true
    }
    else{
        var neg = false
    }
    let reversed = 0
    while(x%10==0){
        x=x/10
    }
    while (x>0){
        let digit = x%10
        reversed = reversed*10+digit
        x = Math.floor(x/10)
    }
    if (neg == true){
        reversed = -reversed
    }
    if(reversed>(2**31-1) || reversed < ((-2)**31)){
        return 0
    }
    return reversed
}

let x1 = 1534236469
console.log(reverse(x1))

