// 17. Letter Combinations of a Phone Number

function letterCombinations (digits){
    if(digits.length<1){
        return []
    }
    let map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    let combos = [...map[digits[0]]]
    // console.log(combos)
    for (let i=1; i<digits.length; i++){
        let currCombos = []
        let count = 0
        while (count<combos.length){
            let currDigit = digits[i]
            for (let j=0; j<map[currDigit].length; j++){
                // console.log(map[currDigit][j])
                currCombos.push([combos[count]]+map[currDigit][j])
            }
            count++
        }
        combos = [...currCombos]
    }
    return combos
}

console.log(letterCombinations('2'))

