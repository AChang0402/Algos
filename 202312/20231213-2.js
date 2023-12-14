function isSubsequence(s,t){
    if(s==""){
        return true;
    }
    let i=0;
    let j=0;
    while(j<t.length){
        if(s[i]==t[j]){
            i++
            if(i==s.length){
                return true;
            }
        }
        j++
    }
    return false
}

let s1 = "abc"
let t1 = "ahbgdc"
console.log(isSubsequence(s1,t1))

let s2 = "axc"
let t2 = "ahbgdc"
console.log(isSubsequence(s2,t2))