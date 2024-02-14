// 394. Decode String

function decodeString(s){
    let stack = []
    let stack2 = []
    let answer = ""
    let temp = ""
    let number = ""
    for (let i=0; i<s.length; i++){
        if(!isNaN(s[i])){
            number += s[i]
        }
        else if(s[i]=="["){
            if(stack.length>0){
                stack2.push(temp)
                temp=""
            }
            stack.push(parseInt(number))
            number = ""
        }
        else if(s[i]=="]"){
            if(stack2.length>0){
                temp = stack2.pop() + temp.repeat(stack.pop())
            }
            else{
                temp = temp.repeat(stack.pop())
            }
            if(stack.length == 0){
                answer += temp
                temp = ""
            }
        }
        else{
            if (stack.length==0){
                answer += s[i]
            }
            else{
                temp += s[i]
            }
        }
    }
    answer += temp
    return answer
}

let s1 = "100[leetcode]"
console.log(decodeString(s1))

