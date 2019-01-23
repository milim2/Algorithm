function quickSort(arr) {

    if (arr.length == 0) {
        return [];
    }
    let left = [];
    let right = [];
    let pivot = arr[0];
    let len = arr.length;

    for (let i = 1; i < len; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

let arr = [34, 12, 56, 3, 8, 18, 10, 15, 22, 24, 11, 0, 31, 9];
console.log(quickSort(arr));