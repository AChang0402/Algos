// 1743. Restore the Array From Adjacent Pairs

// first attempt, unfinished

function restoreArray(adjacentPairs){
    var answer = [...adjacentPairs.pop()]
    let notAdded = {}
    while(adjacentPairs.length>0){
        let currentPair = adjacentPairs[adjacentPairs.length-1]
        if (answer[0] == currentPair[0]){
            answer = [currentPair[1],...answer]
        }
        else if (answer[0] == currentPair[1]){
            answer = [currentPair[0],...answer]
        }
        else if (answer[answer.length-1] == currentPair[0]){
            answer = [...answer, currentPair[1]]
        }
        else if (answer[answer.length-1 == currentPair[1]]){
            answer = [...answer, currentPair[0]]
        }
        else{
            if(notAdded.hasOwnProperty[currentPair[0]]){
                notAdded[currentPair[0]].push(currentPair[1])
            }
            else{
                notAdded[currentPair[0]]=[currentPair[1]]
            }
            if(notAdded.hasOwnProperty[currentPair[1]]){
                notAdded[currentPair[1]].push(currentPair[0])
            }
            else{
                notAdded[currentPair[1]]=[currentPair[0]]
            }
        }

        // console.log(notAdded)
        adjacentPairs.pop();

        while(notAdded.hasOwnProperty(answer[0])){
            if (notAdded[answer[0]].length==1){
                answer = [notAdded[answer[0]],...answer]
                delete notAdded[notAdded[answer[0]]]
                delete notAdded[answer[0]]
            }
            else {

            }
        }
        while(notAdded.hasOwnProperty(answer[answer.length-1])){
            answer = [...answer, notAdded[answer[answer.length-1]]]
            delete notAdded[notAdded[answer[answer.length-1]]]
            delete notAdded[answer[answer.length-1]]
        }
    }
    console.log(notAdded)
    return answer;
}

// let adjacentPairs1 = [[2,1],[3,4],[3,2]]
// console.log(restoreArray(adjacentPairs1))
// let adjacentPairs2 = [[4,-2],[1,4],[-3,1]]
// console.log(restoreArray(adjacentPairs2))

let adjacentPairs3 = [[-3,-9],[-5,3],[2,-9],[6,-3],[6,1],[5,3],[8,5],[-5,1],[7,2]]
console.log(restoreArray(adjacentPairs3))


// function recursiveRestoreArray(arrayToAdd){
//     if (adjacentPairs.length == 0){
//         return;
//     }
//     if (answer[0] == arrayToAdd[0]){
//         answer = [...arrayToAdd.reverse(),...answer]
//         arrayToAdd = []
//     }
//     else if (answer[0] == arrayToAdd[arrayToAdd.length-1]){
//         answer = [...arrayToAdd,...answer]
//         arrayToAdd = []
//     }
//     else if (answer[answer.length-1] == arrayToAdd[0]){
//         answer = [...answer, ...arrayToAdd]
//         arrayToAdd = []
//     }
//     else if (answer[answer.length-1 == arrayToAdd[arrayToAdd.length-1]]){
//         answer = [...answer, ...arrayToAdd.reverse()]
//         arrayToAdd = []
//     }
//     if (arrayToAdd.length==0){
//         arrayToAdd.push(...adjacentPairs.pop())
//         recursiveRestoreArray(arrayToAdd)
//     }
//     else{
//         let temp = adjacentPairs.pop();
//         adjacentPairs = [...temp, adjacentPairs]
//         recursiveRestoreArray(arrayToAdd)
//     }
// }