// 1456. Maximum Number of Vowels in a Substring of Given Length

// function maxVowels(s, k){
//     let maxCount = 0
//     let count = 0
//     for (let i=0; i<s.length; i++){
//         if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u"){
//             count++
//         }
//         if(s[i-k]=="a" || s[i-k]=="e" || s[i-k]=="i" || s[i-k]=="o" || s[i-k]=="u"){
//             count--
//         }
//         if(count == k){
//             return k
//         }
//         maxCount = Math.max(count, maxCount)
//     }
//     return maxCount
// }

function maxVowels(s, k){
    let maxCount = 0
    let count = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            count++
        }
        if(vowels.includes(s[i-k])){
            count--
        }
        if(count>maxCount){
            if(count==k){
                return count
            }
            maxCount = count
        }
    }
    return maxCount
}


let s1 = "weallloveyou"
let k1 = 7
console.log(maxVowels(s1,k1))