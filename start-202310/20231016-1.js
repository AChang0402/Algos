// Pascal's Triangle

function getRow (rowIndex){
    if (rowIndex == 0){
        return [1]
    }
    if (rowIndex == 1){
        return [1,1]
    }
    let currRow = [1,1]
    for (let i=2; i<=rowIndex; i++){
        let lastRow = [...currRow]
        for (let j=1; j<currRow.length; j++){
            currRow[j]=lastRow[j-1]+lastRow[j]
        }
        currRow.push(1)
    }
    return currRow
}

console.log(getRow(4))
// console.log(getRow(3))