module.exports = function towelSort (matrix) {
    if (matrix == null) return [];
    let arr = [];
    matrix.forEach((item, row) => {
        if (row % 2 !== 0) {
            item.reverse();
        }
        arr.push(...item);
    });
    return arr;
}
