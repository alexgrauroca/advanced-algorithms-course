const depth = (node, type) => {
    const validTypes = ['max', 'min'];
    
    if (type === undefined || type === null || validTypes.indexOf(type) === -1) {
        type = 'max';
    }
    
    if (!node) {
        return 1;
    }

    left = depth(node.left, type);
    right = depth(node.right, type);

    switch (true) {
        case !left:
            return right + 1;
        case !right:
            return left + 1;
        default:
            return Math[type](left, right) + 1
    }
};

const tree = {
    left: {
        left: null,
        right: {
            left: null,
            right: null
        },
    },
    right: {
        left: null,
        right: null
    },
};

console.log(depth(tree, 'min'));
console.log(depth(tree, 'max'));