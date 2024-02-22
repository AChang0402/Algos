// 328. Odd Even Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next){
        return head
    }
    let nextOdd = head
    let nextEven = head.next
    let evenHead = head.next
    let runner = head
    let count = 1
    while (runner.next && runner.next.next){
        runner = runner.next
        if(count%2 == 1){
            nextOdd.next = nextOdd.next.next
            nextOdd = nextOdd.next
        }
        else{
            nextEven.next = nextEven.next.next
            nextEven = nextEven.next
        }
        count++
    }
    nextOdd.next = evenHead
    nextEven.next = null
    return head
};