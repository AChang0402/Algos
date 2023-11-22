// 1431. Kids With the Greatest Number of Candies

function kidsWithCandies(candies, extraCandies){
    let max = Math.max(...candies)
    let answer = []
    for (let i=0; i<candies.length; i++){
        if (candies[i]+extraCandies >= max){
            answer.push(true)
        }
        else{
            answer.push(false)
        }
    }
    return answer
}

let candies1 = [4,2,1,1,2]
let extraCandies1 = 1
console.log(kidsWithCandies(candies1, extraCandies1))