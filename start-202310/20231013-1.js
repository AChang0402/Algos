// 6. Zigzag Conversion

function convert(s, numRows){
    if (numRows==1){
        return s
    }
    let answer = ""
    let row=1
    while (row<=numRows){
        if(row==1 || row ==numRows){
            let i = row-1
            while(i<s.length){
                answer += s[i]
                i+= (numRows-1)*2
            }
        }
        else{
            let j=0
            let zag = false;
            while( j<s.length){
                if(zag == false){
                    answer += s[j+row-1]? s[j+row-1]: ""
                }
                else {
                    answer += s[j+(numRows-row)]? s[j+(numRows-row)]: ""
                }
                zag = !zag
                j += numRows-1
            }
        }
        row++
    }
    return answer
}

// let s1 = "PAYPALISHIRING"
// let numRows1 = 4
// console.log(convert(s1, numRows1))

let s2 = "A"
let numRows2 = 1
console.log(convert(s2, numRows2))