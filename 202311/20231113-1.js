// 1930. Unique Length-3 Palindromic Subsequences

function countPalindromicSubsequence(s){
    let outsideSeen = {}
    let count = 0;
    for (let i=0; i<s.length; i++){
        if(!outsideSeen.hasOwnProperty(s[i])){
            let middleSeen = {}
            let j=s.length-1;
            while(s[j]!==s[i] && j>i){
                j--
            }
            for (j=j-1; j>i; j--){
                if(!middleSeen.hasOwnProperty(s[j])){
                    count++
                    middleSeen[s[j]]="seen"
                }
            }
        }
        outsideSeen[s[i]]="seen"
    }
    return count;
}

let s1 = "bbcbaba"
console.log(countPalindromicSubsequence(s1))