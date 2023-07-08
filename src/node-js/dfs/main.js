const dfs = (parent, targetValue) => {
    if (parent.value === targetValue) {
        return parent;
    }

    let left = null;
    if (parent.left !== null) {
        left = dfs(parent.left, targetValue);
    }
    if (left !== null) {
        return left;
    }

    let right = null;
    if (parent.right !== null) {
        right = dfs(parent.right, targetValue);   
    }
    if (right !== null) {
        return right;
    }

    return null;
};