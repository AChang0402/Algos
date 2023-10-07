// 2. Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let runner1 = l1
    let int1 = 0
    let count = 0
    let runner2 = l2
    let int2= 0
    while (runner1 || runner2){
        if(runner1){
            int1 += runner1.val*(10**count)
            runner1 = runner1.next
        }
        if(runner2){
            int2 += runner2.val*(10**count)
            runner2 = runner2.next
        }
        count++
    }
    let sum = int1+int2
    let answer = new ListNode(sum%10)
    sum = Math.floor(sum/10)
    let runner3 = answer
    while (sum>0){
        runner3.next = newListNode(sum%10)
        sum = Math.floor(sum/10)
        runner3 = runner3.next
    }
    return answer
};