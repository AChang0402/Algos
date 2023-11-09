// 1759. Count Number of Homogenous Substrings

function countHomogenous (s){
    let count = 1
    let answer = 1
    for(let i=1; i<s.length; i++){
        if(s[i]==s[i-1]){
            count++
        }
        else if(s[i]!==s[i-1]){
            count = 1
        }
        answer += count
    }
    return answer % (10**9+7) // Since the answer may be too large, return it modulo 10^9 + 7.
}

console.log(countHomogenous("abb"))
