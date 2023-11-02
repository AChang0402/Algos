// 2. Add Two Numbers


var addTwoNumbers = function(l1, l2) {
    let runner1 = l1
    let int1 = 0
    let count = 0
    let runner2 = l2
    let int2= 0
    // while (runner1 !== null || runner2 !== null){
    //     if(runner1 !== null){
    //         int1 += runner1.val*(10**count)
    //         runner1 = runner1.next
    //     }
    //     if(runner2 !== null){
    //         int2 += runner2.val*(10**count)
    //         runner2 = runner2.next
    //     }
    //     count++
    // }
    while (runner1 !== null){
        int1 += runner1.val*(10**count)
        runner1 = runner1.next
        count++
    }

    count=0
    while (runner2 !== null){
        int2 += runner2.val*(10**count)
        runner2 = runner2.next
        count++
    }

    let sum = int1+int2
    let answer = new ListNode(sum%10)
    sum = Math.floor(sum/10)
    let runner3 = answer
    while (sum>0){
        runner3.next = new ListNode(sum%10)
        sum = Math.floor(sum/10)
        runner3 = runner3.next
    }
    return answer
};

