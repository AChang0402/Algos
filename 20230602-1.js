// 678. Valid Parenthesis String
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

var checkValidString = function(s) {
    let left = 0
    let right = 0
    let ast = 0

    for(let i = 0; i < s.length; i++ ){
        if(s[i] == "(" ){
            left ++
        }
        else if(s[i] == ")" ){
            right ++
        }
        else if(s[i] == "*" ){
            ast ++
        }
    }
    console.log(left,right,ast)

    if(left > right+ast || right>left+ast){
        return false 
    }

    let sArray = s.split('')

    let x=0
    while(right>left){
        if(sArray[x]=="*"){
            sArray[x]="("
            left++
            ast--
        }
        x++    
    }

    let y=sArray.length-1
    while(left>right){
        if(sArray[y]=="*"){
            sArray[y]=")"
            right++
            ast--
        }
        y--
    }

    let count = 0;
    for(let i=0; i<sArray.length; i++){
        if(sArray[i]=="*"){
            count++
            if(ast%2==1){
                if(count<=(Math.floor(ast/2))){  // 15-(49-36) = 2
                    sArray[i]="("
                }
                else if (count>=Math.ceil(ast/2)+1){
                    sArray[i]=")"
                }
                else if (count==Math.ceil(ast/2)){
                    sArray[i]=""
                }
            }
            else{
                if(count<=(ast/2)){  // 15-(49-36) = 2
                    sArray[i]="("
                }
                else if (count>=(ast/2)+1){
                    sArray[i]=")"
                }
            }
        }
    }
    

    let currL=0
    let currR=0
    for(let i = 0; i < sArray.length; i++ ){
        if(sArray[i] == "(" ){
            currL ++
        }
        else if(sArray[i] == ")" ){
            currR ++
        }
        if(currR > currL){
            return false 
        }
    }

    return true
};




console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"))
// console.log(checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"))



    // if(right>left){
    //     for(let i=0; i<sArray.length; i++){
    //         if(sArray[i]=="*"){
    //             count++
    //             if(count<=(right-left)){  // 15-(49-36) = 2
    //                 sArray[i]="("
    //             }
    //             else{
    //                 sArray[i]=""
    //             }
    //         }
    //     }
    // }


        // if(left>right){
    //     for(let i=0; i<sArray.length; i++){
    //         if(sArray[i]=="*"){
    //             count++
    //             if(count<=(ast-(left-right))){  // 15-(49-36) = 2
    //                 sArray[i]=""
    //             }
    //             else{
    //                 sArray[i]=")"
    //             }
    //         }
    //     }
    // }
        
    // console.log(sArray)