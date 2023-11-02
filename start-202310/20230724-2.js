// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid (str){
    let i = 0;
    let q = ""
    while (i<str.length){
        switch(str[i]){
            case "(":
                q = str[i]+q
                break;
            case ")":
                if (q[0] == "("){
                    q=q.slice(1)
                }
                else{
                    return false;
                }
                break;
            case "{":
                q = str[i]+q
                break;
            case "}":
                if (q[0] == "{"){
                    q=q.slice(1)
                }
                else{
                    return false;
                }
                break;
            case "[":
                q = str[i]+q
                break;
            case "]":
                if (q[0] == "["){
                    q=q.slice(1)
                }
                else{
                    return false;
                }
                break;
        }
        i++
    }
    if (q!=""){
        return false;
    }
    return true;
}

// let s1 = "()"
// let s2 = "()[]{}"
// let s3 = "(]"
// let s4 = "([)]"
let s5 = "{[]}"
// console.log(isValid(s1))
// console.log(isValid(s2))
// console.log(isValid(s3))
// console.log(isValid(s4))
console.log(isValid(s5))

// string = "{fdlafsd"
// console.log(string[0])
// console.log(string.slice(1))