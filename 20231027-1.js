// 22. Generate Parentheses

function generateParenthesis (n){
    let answer = []
    genParenRecursive(answer, '', n, 0, 0)
    return answer
}

function genParenRecursive(answer, combo, n, opened, closed){
    if(combo.length == n*2){
        answer.push(combo)
        return
    }
    if(opened<n){
        genParenRecursive(answer, combo+'(', n, opened+1, closed)
    }
    if(closed<opened){
        genParenRecursive(answer, combo+')', n, opened, closed+1)
    }
}

console.log(generateParenthesis(3))