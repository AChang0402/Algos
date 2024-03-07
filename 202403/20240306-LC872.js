// 872. Leaf-Similar Trees

var leafSimilar = function(root1, root2) {
    function leaves (root, leafArr = []){
        if(!root){
            return
        }
        if(!root.left && !root.right){
            leafArr.push(root.val)
        }
        leaves(root.left, leafArr)
        leaves(root.right, leafArr)
    }

    let leaves1 = []
    let leaves2 = []
    leaves(root1, leaves1)
    leaves(root2, leaves2)

    if(leaves1.length !== leaves2.length){
        return false
    }
    for (let i=0; i<leaves1.length; i++){
        if(leaves1[i]!==leaves2[i]){
            return false
        }
    }
    return true
};