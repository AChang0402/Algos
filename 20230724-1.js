// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

function longestCommonPrefix (strs) {
    let prefix = ""
    for (let i=0; i<strs[0].length; i++){
        let addLetter = true;
        for (let k=1; k<strs.length; k++){
            if (strs[k][i] != strs[0][i]){
                addLetter = false;
                break;
            }
        }
        if (addLetter == false){
            break;
        }
        else {
            prefix += strs[0][i]
        }
    }
    return prefix;
}


let strs1 = ["flower","flow","flight"]
let strs2 = ["dog","racecar","car"]
let strs3 = [""]
console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))
console.log(longestCommonPrefix(strs3))