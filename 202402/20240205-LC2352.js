// 2352 Equal Row and Column Pairs

function equalPairs(grid){
    let rows = {}
    let cols = {}
    let count = 0
    for (let i=0; i<grid.length; i++){
        let temp1 = ""
        let temp2 = ""
        for (let j=0; j<grid.length; j++){
            temp1 = temp1 + grid[i][j] + "."
            temp2 = temp2 + grid[j][i] + "."
        }
        if(rows.hasOwnProperty(temp1)){
            rows[temp1] ++
        }
        else{
            rows[temp1] = 1
        }
        if(cols.hasOwnProperty(temp2)){
            cols[temp2] ++
        }
        else{
            cols[temp2] = 1
        }
    }
    for(key in rows){
        if (cols.hasOwnProperty(key)){
            count += rows[key]*cols[key]
        }
    }
    return count
}
let grid1 = [[11,1],[1,11]]
console.log(equalPairs(grid1))