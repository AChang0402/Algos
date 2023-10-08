// Longest Substring Without Repeating Characters


// ----- Works but takes too long

function lengthOfLongestSubstring (s){
    let seen = []
    let longestSubstring = 0
    for (let i=0; i<s.length; i++){
        for(let j=i; j<s.length; j++){
            if(seen.includes(s[j])){
                if(seen.length>longestSubstring){
                    longestSubstring = seen.length
                }
                seen=[]
            }
            else{
                seen.push(s[j])
                if(j==s.length-1){
                    if(seen.length>longestSubstring){
                        longestSubstring = seen.length
                    }
                    seen=[]
                }
            }
        }
    }
    return longestSubstring
}



// ----- Attempt 2 (Not solved)
//
function lengthOfLongestSubstring(s) {
    let longestSubstring = 0
    let seen = []
    let found = ""
    let cutoff = -1

    for (let i = 0; i < s.length; i++) {
        found = seen.lastIndexOf(s[i])
        if (found >= 0 && found > cutoff) {
            cutoff = found
        }
        longestSubstring = Math.max(longestSubstring, i-cutoff)
        seen.push(s[i])
    }
    return longestSubstring
}

// let s1 = "abcabcbb"
// console.log(lengthOfLongestSubstring(s1))
// let s2 = "bbbbb"
// console.log(lengthOfLongestSubstring(s2))
// let s3 = "pwwkew"
// console.log(lengthOfLongestSubstring(s3))




let s4 = "ohomm"
console.log(lengthOfLongestSubstring(s4))