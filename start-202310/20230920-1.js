// 118. Pascal's Triangle

function generate (numRows){
    if (numRows == 1){
        return [[1]]
    }
    let pascal = [[1],[1,1]]
    let rows = 2
    while(rows<numRows){
        let temp = [1]
        for (i=0; i<pascal[rows-1].length-1; i++){
            temp.push(pascal[rows-1][i]+pascal[rows-1][i+1])
        }
        temp.push(1)
        pascal.push([...temp])
        rows++
    }
    return pascal
}

console.log(generate(5))