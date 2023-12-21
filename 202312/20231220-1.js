// 1456. Maximum Number of Vowels in a Substring of Given Length

// function maxVowels(s,k){
//     let max = 0;
//     for (let i=0; i<s.length-k+1; i++){
//         let count = 0;
//         for(let j=i; j<i+k; j++){
//             if(s[j]=="A" || s[j]=="a" || s[j]=="E" || s[j]=="e" || s[j]=="I" || s[j]=="i" || s[j]=="O" || s[j]=="o" || s[j]=="U" || s[j]=="u"){
//                 count++
//             }
//         }
//         max = Math.max(max, count)
//     }
//     return max
// }

function maxVowels(s, k){
    let maxCount = 0
    let count = 0
    for (let i=0; i<s.length; i++){
        if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u"){
            count++
        }
        if(s[i-k]=="a" || s[i-k]=="e" || s[i-k]=="i" || s[i-k]=="o" || s[i-k]=="u"){
            count--
        }
        if(count == k){
            return k
        }
        maxCount = Math.max(count, maxCount)
    }
    return maxCount
}


let s1 = "weallloveyou"
let k1 = 7
console.log(maxVowels(s1,k1))