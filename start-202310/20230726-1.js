// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function mergeTwoLists(list1, list2) {
    let i = 0
    let j = 0
    let merged = []
    while (i<list1.length && j<list2.length){
        if(list1[i]<=list2[j]){
            merged.push(list1[i])
            i++
        }
        else {
            merged.push(list2[j])
            j++
        }
    }
    if (i!=list1.length){
        merged=merged.concat(list1.splice(i))
    }
    if(j!=list2.length){
        merged=merged.concat(list2.splice(j))
    }
    return merged
}
    
let list1a = [1,2,4]
let list1b = [1,3,4]
console.log(mergeTwoLists(list1a,list1b))
let list2a = []
let list2b = []
console.log(mergeTwoLists(list2a,list2b))