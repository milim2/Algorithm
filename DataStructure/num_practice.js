function oddNumbers(l, r) {
  let arr = [];
  let smaller = l<r ? l : r;
  let larger = smaller === l ? r: l;
  let smallerOdd = !(smaller%2 === 0) ? true: false;
  for (let i=smaller; i<=larger; i+=2) {
    if (smallerOdd) {
      arr.push(i);
    } else {
      arr.push(i+1)
    }
  }
  return arr;
}


function findNumbers (arr, k) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === k) {
      return 'YES'
    }
  } return 'NO'
}


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

--------------------------------------------------------------------------------

function harshadNum(n){
let arr = n.toString().split(''),
    sum = 0;
for(let i=0; i<arr.length; i++) {
  sum += parseInt(arr[i]);
}

if(n%sum == 0)
return true;
else false;
}

console.log(harshadNum(18));


function Harshad(n){ return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;})); }  console.log(Harshad(18))




    
