/* Insertion sort is a simple sorting algorithm 
that builds the final sorted array (or list) one item 
at a time. It is much less efficient on large lists 
than more advanced algorithms such as quicksort, heapsort, 
or merge sort. */

function insertionSort (arr = []) {
    // copy array
    let result = [...arr];
    
    for(let i = 0; i < result.length; i++) {
        let temp = result[i];
       
        // store the current value so it can be placed right side
        for (let j = i - 1; j >= 0 && result[j] > temp; j--) {
            // loop through the result in the stored array 
            // (the result from  the current to the beginning)
            // copy each results to the next one
            result[j+1] = temp;
        
        // when the value of the left side is bigger than current value : swap
        // while (curIndex >= 0 && result[curIndex] > temp) {
        //     result[curIndex + 1] = result[curIndex];
        //     curIndex--;
        }

        // assign the value of temp into the sorted index
        // result[curIndex + 1] = temp;
        }
        return result;
    }


const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]