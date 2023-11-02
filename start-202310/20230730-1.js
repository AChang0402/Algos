// 66. Plus One

function plusOne (digits){
    let i=digits.length-1
    digits[i]++;
    if(digits[i] == 10){
        for (i; i>=0; i--){
            if(digits[i]==10){
                digits[i]=0;
                if(i!=0){
                    digits[i-1]++
                }
                else{
                    digits = [1, ...digits]
                }
            }
        }
    }
    return digits;
}

let digits1 = [1,2,3]
console.log(plusOne(digits1));
let digits2 = [4,3,2,1]
console.log(plusOne(digits2));
let digits3 = [9]
console.log(plusOne(digits3));