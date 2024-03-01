// 2130. Maximum Twin Sum of a Linked List

function pairSum(head){
    let runner = head
    let listArr = []
    while (runner){
        listArr.push(runner.val)
        runner = runner.next
    }
    let i=0
    let j=listArr.length-1
    let max = listArr[i]+listArr[j]
    i++
    j--
    while (i<j){
        max = Math.max(max, listArr[i]+listArr[j])
        i++
        j--
    }
    return max
}