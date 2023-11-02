// 2038. Remove Colored Pieces if Both Neighbors are the Same Color

function winnerOfGame (colors){
    movesA = 0
    movesB = 0
    for (let i=1; i<colors.length-1; i++){
        if (colors[i-1] == 'A' && colors[i] == 'A' && colors[i+1] == 'A'){
            movesA++
        }
        else if (colors[i-1] == 'B'  && colors[i] == 'B' && colors[i+1] == 'B'){
            movesB++
        }
    }
    return movesA>movesB
}

let game1="AAABABB"
console.log(winnerOfGame(game1))