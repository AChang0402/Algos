// 501. Find Mode in Binary Search Tree

function findMode(root){
    let count = {}
    countValue(root, count)
    let max = 0
    let answer = []
    for (key in count){
        if (count[key]>max){
            answer = [key]
            max = count[key]
        }
        else if(count[key]==max){
            answer.push(key)
        }
    }
    return answer
}

function countValue (node, countDict){
    if (!node){
        return
    }
    if (countDict.hasOwnProperty(node.val)){
        countDict[node.val]++
    }
    else{
        countDict[node.val]=1
    }
    countValue (node.left, countDict)
    countValue (node.right, countDict)
}