// 1768. Merge Strings Alternately

function mergeAlternately(word1, word2){
    let merged = ""
    for (var i=0; i<Math.min(word1.length, word2.length); i++){
        merged += (word1[i]+word2[i])
    }
    if (i!==word1.length){
        merged += word1.substr(i)
    }
    else if(i!==word2.length){
        merged += word2.substr(i)
    }
    return merged
}

let word1 = "abcd"
let word2 = "pq"
console.log(mergeAlternately(word1, word2))