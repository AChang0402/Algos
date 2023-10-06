// 343. Integer Break

function integerBreak (n){
    if(n<=3){
        return n-1
    }
    else{
        let threes = Math.floor(n/3)
        let remainder = n % 3;
        if (remainder == 0) {
            return (3**threes)
        }
        else if (remainder == 1){
            return (3**(threes-1)) * 4
        }
        else{
            return(3**(threes) * 2)
        }
    }
}


console.log(integerBreak(4))