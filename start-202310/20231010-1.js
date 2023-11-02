// 2251. Number of Flowers in Full Bloom

// First attempt, works? but too slow
// function fullBloomFlowers(flowers,people){
//     let answer = []
//     let fullBloomAtT={}
//     for (let i=0; i<flowers.length; i++){
//         let start = flowers[i][0]
//         let end = flowers[i][1]
//         for (let x=start; x<=end; x++){
//             if (fullBloomAtT.hasOwnProperty(x)){
//                 fullBloomAtT[x]++
//             }
//             else{
//                 fullBloomAtT[x]=1
//             }
//         }
//     }
//     for (let j=0; j<people.length; j++){
//         if(fullBloomAtT.hasOwnProperty(people[j])){
//             answer.push(fullBloomAtT[people[j]])
//         }
//         else{
//             answer.push(0)
//         }
//     }
//     return answer
// }

function fullBloomFlowers(flowers,people){
    let bloomStart = []
    let bloomEnd = []
    let answer = []
    while (flowers.length>0){
        bloomStart.push(flowers[0][0])
        bloomEnd.push(flowers[0][1])
        flowers.shift()
    }
    bloomStart.sort((a,b)=>a-b)
    bloomEnd.sort((a,b)=>a-b)

    for (let i=0; i<people.length; i++){
        answer.push(binarySearchStart(bloomStart,people[i])+1-binarySearchEnd(bloomEnd,people[i]))
    }

    return answer;
}

function binarySearchStart(arr, target){
    let l=0
    let r=arr.length-1
    while (l<r){
        let mid=Math.ceil((l+r)/2)
        if(arr[mid]>target){
            r=mid-1
        }
        else{
            l=mid
        }
    }
    return arr[r]>target? -1: r
}

function binarySearchEnd(arr, target){
    let l=0
    let r=arr.length-1
    while (l<r){
        let mid=Math.floor((l+r)/2)
        if(arr[mid]<target){
            l=mid+1
        }
        else{
            r=mid
        }
    }
    return arr[l] < target? arr.length: l
}


console.log(binarySearchStart([19,19,19],46))
console.log(binarySearchEnd([35,37,38],46))


let flowers1 = [[1,6],[3,7],[9,12],[4,13]]
let people1 = [2,3,7,11]
console.log(fullBloomFlowers(flowers1, people1))
let flowers2 = [[1,10],[3,3]] 
let people2 = [3,3,2]
console.log(fullBloomFlowers(flowers2, people2))