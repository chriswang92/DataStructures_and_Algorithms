//Binary Tree Level Order Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    //bfs
    const q = [root],
        res = [];
    while (q.length) {
        const currLayerSize = q.length;
        console.log(currLayerSize);
        const currLayer = [];
        for (let i = 0; i < currLayerSize; i++) {
            const n = q.shift();
            currLayer[i] = n.val;
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
        res.push(currLayer);
    }
    return res;
};
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
const root2 = new TreeNode(
    3,
    new TreeNode(9, new TreeNode(14), new TreeNode(27)),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
// console.log(root)
console.log(levelOrder(root2));
