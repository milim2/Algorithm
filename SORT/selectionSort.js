function selectionSort(arr = []) {
    // copy array
    let result = [...arr];

    for (let i = 0; i < result.length -1; i++) {
        // assume current index as a minimum number
        let min = i;

        // leaving the very left side, j assign i+1 
        // to search the rest of the array 
        // to see if anything is smaller in the right side 
        for(let j = i+1; j < result.length; j++) {
            if(result[min] > result[j]) {
                min = j;
            }
        }
        // if the minimum isn't the temp position, swap it
        if(i != min) {
            swap(result, i, min);
            // let temp = result[min];
            // result[min] = result[i];
            // result[i] = temp;
        }
    }
    return result;

}

function swap(result, firstIndex, secondIndex) {
    let temp = result[firstIndex];
    result[firstIndex] = result[secondIndex];
    result[secondIndex] = temp;
}

console.log(selectionSort([2, 1, 4, 3, 5])); // [1,2,3,4,5]
console.log(selectionSort([710, 509, 733, 224, 654, 154, 474, 166, 699, 102, 72, 272, 176, 450, 390, 217, 928, 641, 210, 892]))
// [86, 111, 190, 220, 385, 445, 458, 516, 517, 527, 604, 608, 611, 614, 831, 876, 893, 913, 949, 970]