// 1657. Determine if Two Strings Are Close


// attempt 1 w/ hash map
function closeStrings(word1, word2){
    if (word1.length !== word2.length){
        return false
    }
    let letterCount1 = {}
    let letterCount2 = {}
    for (let i=0; i<word1.length; i++){
        if(letterCount1.hasOwnProperty(word1[i])){
            letterCount1[word1[i]]++
        }
        else{
            letterCount1[word1[i]]=1
        }
    }
    for (let j=0; j<word1.length; j++){
        if(!letterCount1.hasOwnProperty(word2[j])){
            return false;
        }
        else{
            if(letterCount2.hasOwnProperty(word2[j])){
                letterCount2[word2[j]]++
            }
            else{
                letterCount2[word2[j]]=1
            }
        }
    }
    if(letterCount1.length !== letterCount2.length){
        return false;
    }
    let arr1 = []
    let arr2 = []

    for (key1 in letterCount1){
        arr1.push(letterCount1[key1])
    }
    for (key2 in letterCount2){
        arr2.push(letterCount2[key2])
    }
    arr1 = arr1.sort((a,b)=>b-a)
    arr2 = arr2.sort((a,b)=>b-a)
    for(let k=0; k<arr1.length; k++){
        if (arr1[k]!==arr2[k]){
            return false;
        }
    }
    return true;
}