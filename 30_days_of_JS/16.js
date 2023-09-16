/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    let curr = [];
    for(let i = 0;i < arr.length; i++) {
        curr.push(arr[i])
        if(curr.length == size) {
            res.push(curr);
            curr = [];
        }
    }

    if(curr.length > 0) res.push(curr);
    return res;
};