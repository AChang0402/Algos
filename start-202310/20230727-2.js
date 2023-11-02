// 28. Find the Index of the First Occurrence in a String

function strStr (haystack, needle){
    for (let i=0; i<(haystack.length-needle.length+1); i++){
        for (var j=0; j<needle.length; j++){
            if (needle[j]!=haystack[i+j]){
                break;
            }
        }
        if(j==needle.length){
            return i+j-needle.length
        }
    }
    return -1
}

// let haystack1 = "sadbutsad"
// let needle1 = "sad"
// console.log(strStr(haystack1, needle1))

// let haystack2 = "leetcode"
// let needle2 = "leeto"
// console.log(strStr(haystack2, needle2))

let haystack3 = "hello"
let needle3 = "ll"
console.log(strStr(haystack3, needle3))