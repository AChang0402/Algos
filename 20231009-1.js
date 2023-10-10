// 5. Longest Palindromic Substring

// first attempt/solution
function longestPalindrome (s){
    let longestSubstring = ""
    let substring = ""
    for (let i=0; i<s.length; i++){
        let left = i-1;
        let right = i+1
        substring = s[i]
        while(s[left]==s[i]){
            substring = s[left]+substring
            left--
        }
        while(s[right]==s[i]){
            substring = substring+s[right]
            right++
        }
        while(s[left]==s[right] && left>=0 && right<s.length){
            substring = s[left] + substring + s[right]
            left--;
            right++;
        }
        // console.log(substring, longestSubstring)
        if (substring.length > longestSubstring.length){
            longestSubstring = substring
        }
        substring = ""
    }
    return longestSubstring
}

// refinement on first attempt

function longestPalindrome (s){
    let longestSubstring = ""
    let substring = ""
    let i=0;
    while (i<s.length){
        let left = i-1
        let right = i+1
        substring = s[i]
        while(s[right]==s[i]){
            substring += s[right]
            right++
        }
        i=right
        while(s[left]==s[right] && left>=0 && right<s.length){
            substring = s[left] + substring + s[right]
            left--;
            right++;
        }
        if (substring.length > longestSubstring.length){
            longestSubstring = substring
        }
        substring = ""
    }
    return longestSubstring
}

let s1 = "babad"
console.log(longestPalindrome(s1))
let s2 = "cbbd"
console.log(longestPalindrome(s2))
let s3 = "a"
console.log(longestPalindrome(s3))
