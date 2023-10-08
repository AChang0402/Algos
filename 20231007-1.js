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
// function lengthOfLongestSubstring(s) {
//     let longestSubstring = 0
//     let startarr = []
//     let endarr = []
//     let start = 0
//     let end = s.length - 1
//     for (start; start<s.length; start++){
//         if (startarr.includes(s[start])){
//             break
//         }
//         startarr.push(s[start])
//         // console.log(startarr)
//     }
//     for (end; end>=0; end--){
//         if (endarr.includes(s[end])){
//             break
//         }
//         endarr.push(s[end])
//         // console.log(endarr)
//     }
    
//     longestSubstring = Math.max(start, s.length-1-end)
//     console.log(start, end, longestSubstring)
    
//     let seen = []
//     let found = ""
//     let cutoff = -1

//     for (let i = 0; i < s.length; i++) {
//         found = seen.lastIndexOf(s[i])
//         // console.log("found:",found)
//         if (found >= 0 && found > cutoff) {
//             cutoff = found
//             if (i - found > longestSubstring) {
//                 longestSubstring = i - found
//                 // console.log("longestSS:", longestSubstring)
//             }
//         }
//         seen.push(s[i])
//         // console.log("seen:",seen)
//     }
//     return longestSubstring
// }

// let s1 = "abcabcbb"
// console.log(lengthOfLongestSubstring(s1))
// let s2 = "bbbbb"
// console.log(lengthOfLongestSubstring(s2))
// let s3 = "pwwkew"
// console.log(lengthOfLongestSubstring(s3))
let s4 = "ohomm"
console.log(lengthOfLongestSubstring(s4))