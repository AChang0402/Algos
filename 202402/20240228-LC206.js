// 206. Reverse Linked List

function reverseList (head){
    if(!head){
        return head
    }
    else if(!head.next){
        return head
    }
    else{
        let runner1 = head
        let runner2 = head.next
        runner1.next = null
        while (runner2.next){
            let temp = runner2.next
            runner2.next = runner1
            runner1 = runner2
            runner2 = temp
        }
        runner2.next=runner1
        return runner2
    }
}