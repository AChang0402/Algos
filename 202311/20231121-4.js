function reverseWords(s){
    let i=0;
    let j=s.length-1
    let reversed = ""
    while (s[i]==" "){
        i++
    }
    while (s[j]==" "){
        j--
    }
    let word = ""
    for(j; j>=i; j--){
        if(s[j]!==" "){
            word = s[j]+word
        }
        else{
            reversed += word
            word = ""
            if(reversed[reversed.length-1] !== " "){
                reversed += " "
            }
        }
    }
    reversed += word;
    return reversed
}

let s1 = "the sky is blue"
console.log(reverseWords(s1))