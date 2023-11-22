// 605. Can Place Flowers

function canPlaceFlowers(flowerbed, n){
    let maxNewFlowers = 0;
    for (let i=0; i<flowerbed.length; i++){
        if(flowerbed[i]==0 && flowerbed[i-1]!==1 && flowerbed[i+1]!==1){
            flowerbed[i]=1
            maxNewFlowers++
        }
    }
    return maxNewFlowers>=n? true: false
}

let flowerbed1 = [1,0,0,0,1]
let n1 = 2
console.log(canPlaceFlowers(flowerbed1, n1))


