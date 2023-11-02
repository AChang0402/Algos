function lengthOfLastWord(string){
    let i=string.length-1
    let endspaces=0
    while(string[i]==" "){
        endspaces++
        i--
    }
    for (i; i>=0; i--){
        if(string[i]==" "){
            return (string.length-i-1-endspaces)
        }
    }
    return string.length-endspaces
}

let string1 = "Hello World"
console.log(lengthOfLastWord(string1))
let string2 = "   fly me   to   the moon  "
console.log(lengthOfLastWord(string2))
let string3 = "luffy is still joyboy"
console.log(lengthOfLastWord(string3))