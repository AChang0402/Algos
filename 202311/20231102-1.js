// 1441. Build an Array With Stack Operations

function buildArray (target, n){
    let answer=[]
    let currentInt = 1
    let currentIndex = 0
    let temp=[]
    while(currentInt <= n){
        if(currentInt===target[currentIndex]){
            answer.push(...temp)
            temp = []
            answer.push("Push")
            currentIndex++
        }
        else {
            temp.push("Push")
            temp.push("Pop")
        }
        currentInt++
    }
    return answer
}

let target1 = [2,3,4]
let n1 = 4
console.log(buildArray(target1, n1))