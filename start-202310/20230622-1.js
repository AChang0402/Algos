// 9. Palindrom Number
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

function isPalindrome (integer) {
    let numstring = integer.toString();
    for (let i = 0; i<~~((numstring.length)/2); i++){
        if(numstring[i]!==numstring[numstring.length-1-i]){
            return false;
        }
    }
    return true;
}

let x = -121
console.log(isPalindrome(x))