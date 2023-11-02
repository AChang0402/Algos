// 226. Count Nodes Equal to Average of Subtree

// First attempt: slow

function averageOfSubtree(root){
    var answer = 0

    function findAll(node){
        if(node==null){
            return;
        }
        var count = 1;
        var sum = node.val
    
        function traverseNodes(node){
            if(node==null){
                return
            }
            count++
            sum+=node.val
            traverseNodes(node.left, count, sum)
            traverseNodes(node.right, count, sum)
            return
        }
        
        traverseNodes(node.left);
        traverseNodes(node.right);
        let average = Math.floor(sum/count)
        if (average==node.val){
            answer++
        }
        findAll(node.left)
        findAll(node.right)
    }

    findAll(root)
    return answer;
}

// function findAll(node, answer){
//     if(node==null){
//         return;
//     }
//     var count = 1;
//     var sum = node.val

//     function traverseNodes(node){
//         if(node==null){
//             return
//         }
//         count++
//         // console.log("count:", count)
//         sum+=node.val
//         // console.log("sum:", sum)
//         traverseNodes(node.left, count, sum)
//         traverseNodes(node.right, count, sum)
//         return
//     }
    
//     traverseNodes(node.left);
//     // console.log(count, sum)
//     traverseNodes(node.right);
//     // console.log(count, sum)
//     let average = Math.floor(sum/count)
//     console.log(count, sum)
//     if (average==count){
//         answer++
//     }
//     findAll(node.left)
//     findAll(node.right)
// }



