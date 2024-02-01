// 1207. Unique Number of Occurrences

function uniqueOccurrences (arr){
    let occurrences = {}
    for (let i=0; i<arr.length; i++){
        if (occurrences.hasOwnProperty(arr[i])){
            occurrences[arr[i]]++
        }
        else{
            occurrences[arr[i]] = 1
        }
    }
    let unique = {}
    for (key in occurrences){
        if(!unique.hasOwnProperty(occurrences[key])){
            unique[occurrences[key]] = 0
        }
        else{
            return false
        }
    }
    return true
}

let arr1 = [1,2,2,1,1,3]
console.log(uniqueOccurrences(arr1))