// 443. String Compression

function compress(chars){
    let s=''
    let count = 1;
    let curChar = chars[0]
    for (let i=1; i<chars.length; i++){
        if (chars[i] == chars[i-1]){
            count++
        }
        else {
            if(count !== 1){
                curChar += count
            }
            s += curChar
            curChar = chars[i]
            count = 1
        }
    }
    if(count>=1){
        if(count !== 1){
            curChar += count
        }
        s += curChar
    }
    
    for (let j=0; j<chars.length; j++){
        if(j<s.length){
            chars[j]=s[j]
        }
        else{
            j--
            chars.pop()
        }
    }
    
    return s.length
}

let chars1 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
console.log(compress(chars1))


// initial attempt: doesn't satisfy requirements but works

// function compress(chars){
//     let count = 1;
//     let curChar = chars[0]
//     for (let i=1; i<chars.length; i++){
//         if (chars[i] == chars[i-1]){
//             count++
//         }
//         else {
//             if(count !== 1){
//                 curChar += count
//             }
//             chars = [...chars.slice(0,i-count),...curChar.split(''),...chars.slice(i)]
//             i += (curChar.length-count)
//             curChar = chars[i]
//             count = 1
//         }
//     }
//     if(count>=1){
//         if(count !== 1){
//             curChar += count
//         }
//         chars = [...chars.slice(0,chars.length-count),...curChar.split(''),...chars.slice(chars.length)]
//     }
//     return chars.length
// }