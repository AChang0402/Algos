function reverseWords (s){
    let answer = ""
    let wordStart = 0
    let wordEnd = 0
    for (let i=0; i<s.length; i++){
        if(s[i+1]==" " || i==s.length-1){
            wordEnd = i
            for (let j=wordEnd; j>wordStart-1; j--){
                answer += s[j]
            }
        }
        else if(s[i]==" "){
            answer+= " "
            wordStart = i+1
        }
    }
    return answer
}

let s1="God Ding"
console.log(reverseWords(s1))
let s2 = "Let's take LeetCode contest"
console.log(reverseWords(s2))