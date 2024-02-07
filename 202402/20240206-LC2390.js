// 2390. Removing Stars From a String

function removeStars(s){
    let answer = []
    for (let i=0; i<s.length; i++){
        if(s[i]!=="*"){
            answer.push(s[i])
        }
        else{
            answer.pop()
        }
    }
    return answer.join("");
}

s1 = "leet**cod*e"
console.log(removeStars(s1))