// merge sort has two parts -> 1. divide and break down
//                             2. merging /combining

// 1. divide function -> array is divided into 2
function mergeSort(arr) {
    var len = arr.length;
    if(len < 2)
        return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0, mid),
        right =  arr.slice(mid);
    // send left and right to the mergeSort to break it down into pieces
    // then merge them
    return merge(mergeSort(left), mergeSort(right));
}

// 2. merging
function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;

        while(l < lLen && r < rLen) {
            if (left[l] < right[r]) {
                result.push(left[l++]);
            }
            else {
                result.push(right[r++]);
            }
        }
        // remaing part needs to be added to the result
        return result.concat(left.slice(l)).concat(right.slice(r));
}

const list = [6, 5, 3, 1, 8, 7, 2, 4]
console.log(mergeSort(list));