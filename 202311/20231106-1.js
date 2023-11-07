// 1921. Eliminate Maximum Number of Monsters

function eliminateMaximum (dist,speed){
    let timeToDest = []
    for (let i=0; i<dist.length; i++){
        timeToDest.push(Math.ceil(dist[i]/speed[i]))
    }
    timeToDest.sort((a,b)=>b-a)
    console.log(timeToDest)
    let minute = 0
    while(timeToDest[timeToDest.length-1] > minute && timeToDest.length!==0){
        timeToDest.pop();
        minute++
    }
    // number of eliminated monsters = minute+1, which minute++ accounts for
    return minute
}

let dist1=[3,2,4]
let speed1=[5,3,2]
console.log(eliminateMaximum(dist1,speed1))