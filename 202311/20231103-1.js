// 29. Divide Two Integers


function divide(dividend, divisor){
    let count = 0
    if(dividend==0){
        return 0
    }
    if(dividend>=0){
        var dividendPos = true;
        if(divisor>0){
            var positive = true;
            var answer = -1
        }
        else{
            var positive = false;
            var answer = 1
        }
    }
    else {
        var dividendPos = false;
        if(divisor>0){
            var positive = false;
            var answer = 1
        }
        else{
            var positive = true;
            var answer = -1
        }
    }    
    if(dividendPos){
        while(count<= dividend){
            if(positive){
                answer++
                count+=divisor
            }
            else{
                answer--
                count-=divisor
            }
        }
    }
    else{
        while(count>=dividend){
            if(positive){
                answer++
                count+=divisor
            }
            else{
                answer--
                count-=divisor
            }
        }
    }
    if (answer>2**31-1){
        return 2**31-1
    }
    else if(answer<(-2)**31){
        return (-2)**31
    }
    else{
        return answer
    }
}

console.log(divide(-2147483648,1))