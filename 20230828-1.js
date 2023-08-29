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
var deleteDuplicates = function(head) {
    if(!head){
        return head
    }
    runner = head;
    while(runner.next){
        if (runner.val == runner.next.val){
            runner.next = runner.next.next
        }
        else{
            runner = runner.next
        }
    }
    return head
};