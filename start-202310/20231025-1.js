// 19. Remove Nth Node From End Of List

function removeNthFromEnd(head, n){
    if (!head.next){
        if(n==1){
            return null
        }
    }
    if (!head.next.next){
        if(n==2){
            return head.next
        }
        else if(n==1){
            head.next=null
            return head
        }
    }
    
    function getLength(head){
        let runner = head
        if(!head){
            return 0
        }
        let count = 1
        while(runner.next){
            runner=runner.next
            count = count+1
        }
        return count
    }
    
    let length = getLength(head)
    if (n==length){
        return head.next
    }
    let runner = head
    let remove = length - n + 1 
    let count = 1
    while (runner && count<remove-1){
        runner = runner.next
        count++
    }
    if(runner && runner.next!==null){
        runner.next = runner.next.next
    }
    return head
}

// function removeNth(head, n){
//     let runner = head
//     let count = 1
//     while (runner && count<=n-1){
//         runner = runner.next
//         count++
//     }
//     if(runner.next!==null && runner.next.next!==null){
//         runner.next = runner.next.next
//     }
//     return head
// }