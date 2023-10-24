// 515. Find Largest Value in Each Tree Row

function largestValues(root){
    var max = []
    var row = 0
    findLargest(max, row, node=root)
    return max
}

function findLargest(max, row, node){
    if(node){
        if (max[row]!==undefined){
            if (node.val > max[row]){
                max[row]=node.val
            }
        }
        else{
            max[row]=node.val
        }
        findLargest(max, row+1, node.left)
        findLargest(max, row+1, node.right)
    }
    else{
        return;
    }
}