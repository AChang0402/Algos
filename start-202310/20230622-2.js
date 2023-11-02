// 13. Roman to Integer
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(string){
    let sum = 0;
    for (i=0; i<string.length; i++){
        if(string[i]=="M"){
            sum += 1000
        }
        if(string[i]=="D"){
            sum += 500
        }
        if(string[i]=="C"){
            if (string[i+1] == "D" || string[i+1] == "M"){
                sum -= 100
            }
            else {
                sum += 100
            }
        }
        if(string[i]=="L"){
            sum += 50
        }
        if(string[i]=="X"){
            if (string[i+1] == "L" || string[i+1] == "C"){
                sum -= 10
            }
            else {
                sum += 10
            }
        }
        if(string[i]=="V"){
            sum += 5
        }
        if(string[i]=="I"){
            if (string[i+1] == "X" || string[i+1] == "V"){
                sum -= 1
            }
            else {
                sum += 1
            }
        }
    }
    return sum;
}

let x = "MCMXCIV"
console.log(romanToInt(x))