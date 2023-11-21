// 1071. Greatest Common Divisor of Strings

function gcdOfStrings (str1, str2){
    if (str1.length>=str2.length){
        var string1 = str1
        var string2 = str2
    }
    else{
        var string1 = str2
        var string2 = str1
    }
    let gcd = ""
    for (let gcdLength=1; gcdLength<=string2.length; gcdLength++){
        if(string1.length%(gcdLength)==0 && string2.length%(gcdLength)==0){
            if(string2.substr(0,gcdLength).repeat(string1.length/(gcdLength)) == string1 && string2.substr(0,gcdLength).repeat(string2.length/(gcdLength)) == string2){
                gcd = string2.substr(0,gcdLength)
            }
        }
    }
    return gcd
}

// Leetcode most voted solution:

// const gcdOfStrings = (str1, str2) => {
//     if (str1 + str2 !== str2 + str1) return '';
//     const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
//     return str1.substring(0, gcd(str1.length, str2.length));
//   };

let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
let str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
console.log(gcdOfStrings(str1, str2))


