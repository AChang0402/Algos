// 345. Reverse Vowels of a String

function reverseVowels(s){
    strArray = s.split('');
    let i=0;
    let j = strArray.length-1
    while(true){
        while((strArray[i]!=="a" && strArray[i]!=="e" && strArray[i]!=="i" && strArray[i]!=="o" && strArray[i]!=="u" && strArray[i]!=="A" && strArray[i]!=="E" && strArray[i]!=="I" && strArray[i]!=="O" && strArray[i]!=="U") && i<j){
            i++
        }
        while((strArray[j]!=="a" && strArray[j]!=="e" && strArray[j]!=="i" && strArray[j]!=="o" && strArray[j]!=="u" && strArray[j]!=="A" && strArray[j]!=="E" && strArray[j]!=="I" && strArray[j]!=="O" && strArray[j]!=="U") && j>i){
            j--
        }
        if (i<j){
            [strArray[i],strArray[j]] = [strArray[j], strArray[i]]
            i++
            j--
        }
        else{
            break;
        }
    }
    return strArray.join('')
}

let s1 = "Aa"
console.log(reverseVowels(s1))