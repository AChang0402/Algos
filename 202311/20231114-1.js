// 1846. Maximum Element After Decreasing and Rearranging

function maximumElementAfterDecrementingAndRearranging (arr) {
    arr.sort((a, b) => (a-b))
    let count =0
    for (let i = 0; i<arr.length; i++){
        if(arr[i]<i+1-count){
            count++
        }
    }
    return arr.length-count
};

let arr1 = [100,1,1000]
console.log(maximumElementAfterDecrementingAndRearranging(arr1))