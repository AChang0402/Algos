// 2095. Delete the Middle Node of a Linked List


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteMiddle = function(head) {
    if(!head.next){
        return null
    }
    else{
        let runner = head
        let runnerHalf = head
        let runnerHalfTrail
        let count = 1
        while(runner.next){
            runner = runner.next
            count++
            if(count%2 == 0){
                runnerHalfTrail = runnerHalf
                runnerHalf = runnerHalf.next
            }
        }
        if(!runnerHalfTrail.next){
            runnerHalfTrail.next = null
        }
        else{
            if(!runnerHalfTrail.next.next){
                runnerHalfTrail.next = null
            }
            else{
                runnerHalfTrail.next = runnerHalfTrail.next.next
            }
        }
        return head
    }
};

