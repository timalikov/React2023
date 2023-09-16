/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let arra=[];
    for(let i=0; i<arr.length;i++){
        if(fn(arr[i],i)){
            arra.push(arr[i]);
        }
    }
    return arra;
};