function diagonalDifference(arr) {

    var LeftD = 0, RightD = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i == j) {
                LeftD += arr[i][j];
            }
            if (i == arr.length - j - 1) {
                RightD += arr[i][j];
            }
        }
    }
    return Math.abs(LeftD - RightD);

}



function simpleArraySum(ar) {
    let sum = 0;  
    
    for (let i = 0; i < ar.length; i++) {
         sum += ar[i];
    }
    return sum;

}



function compareTriplets(a, b) {    

    let A = 0, B = 0;

    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) A++;
        else if (a[i] < b[i]) B++;
    }
    return [A, B];
}



function aVeryBigSum(ar) {

    return ar.reduce((a, b) => a + b);
}



function solveMeFirst(a, b) {
    
    var sum = a + b;
    return sum;
}


function reverseArray(a) {
    var arr = a.reverse();
    return arr;
}


function hourglassSum(arr) {
    let maxI = 3;
    let maxJ = 3;
    let Tsum = -64;
   
    for (let i = 0; i <= maxI; i++) {
        for (let j = 0; j <= maxJ; j++) {
            // sum for the top of hourglass
            let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

            // add the middle of hourglass
            sum += arr[i + 1][j + 1];

            // add the bottom of hourglass
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]

            if (sum > Tsum)
                Tsum = sum ;
        }
    }
    return Tsum;
}





    
